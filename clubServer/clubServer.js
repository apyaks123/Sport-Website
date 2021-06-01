const express = require('express');
const path = require('path');
const http = require('http');
var app = express();
app.use(express.static(path.join(__dirname, 'public')));
const nunjucks = require('nunjucks');
nunjucks.configure(path.join(__dirname, 'templates'), {
    autoescape: true,
    express: app
});
let urlencodedParser = express.urlencoded({
    extended: true
});

const session = require('express-session');
const events = require('./events.json');

const users = require('./clubUsersHash.json');
const fs = require('fs');
const bcrypt = require('bcryptjs');
const { url } = require('inspector');
let nRounds = 15;


// Global empty variable
var memberApplications = [];
let hashedUsers = [];


// Setting up the cookie
const cookieName = "BFCtk3223";
app.use(session({
    secret: 'website development CSUEB',
    resave: false,
    saveUninitialized: false,
    name: cookieName // Sets the name of the cookie used by the session middleware

}));


// This initializes session state
function setUpSessionMiddleware(req, res, next) {
	console.log(`\nsession object: ${JSON.stringify(req.session)}`);
	console.log(`session id: ${req.session.id}`);
	if (!req.session.user) {
		req.session.user = {role: "guest"};
    };

	next();
};



// Calling the function
app.use(setUpSessionMiddleware);

// Use this middleware to restrict paths to only logged in users
function checkMemberMiddleware(req, res, next) {
	if (req.session.user.role !== "member") {
        //res.status(401).json({error: "Not permitted"});;
        res.status(400).render("Forbidden.njk", {
            user: req.session.user
        });
	} else {
//		console.log(`\nSession info: ${JSON.stringify(req.session)} \n`);
		next();
	}
};


// Use this middleware to restrict paths to only logged in users
const checkLoggedInMiddleware = function (req, res, next) {
	if (!req.session.user.loggedin) {
		res.status(400).render("Forbidden.njk", {
            user: req.session.user
        });
	} else {
		next();
	}
};


// User this middlewave to restrict paths only to admins
function checkAdminMiddleware(req, res, next) {
	if (req.session.user.role !== "admin") {
        //res.status(401).json({error: "Not permitted"});;
        res.status(400).render("Forbidden.njk", {
            user: req.session.user
        });
	} else {
		next();
	}
};






// availabe to all user / visitor

app.get('/', function (req, res) {
    res.render('index.njk', {
        user: req.session.user
    });
});

// available to all usser/ visitor

app.get('/MeMe', checkAdminMiddleware,function (req, res) {
    res.render('MeMe.njk', {
        user: req.session.user
    });
});

// available only to Admin

app.get('/members', checkAdminMiddleware, function (req, res) {
	res.render('users.njk', {
		users: users,
		user: req.session.user
	});
});


// available to all usser/ visitor
app.get('/login', function (req, res) {
    res.render('login.njk', {
        user: req.session.user
    });
});

// available to all usser/ visitor
app.get('/membership', function (req, res) {
    res.render('membership.njk', {
        user: req.session.user
    });
});

// available to all logged in members
app.get('/MyTeam', checkLoggedInMiddleware,function (req, res) {
    res.render('MyTeam.njk', {
        user: req.session.user
    });
});


// available to all usser/ visitor
app.get('/activity', function (req, res) {
    res.render('activity.njk', {

        events: events,
        user: req.session.user
    });
});

// Only available to logged in members
app.get('/AddActivity', checkLoggedInMiddleware, function (req, res) {
    res.render('AddActivity.njk', {
        events: events,
        users: users,
        user: req.session.user
    });
});

// Show info
app.get('/info', function (req, res) {
    res.json({clubname: "Banter Fc", ownername: "Abhishek Pyakurel", ownernetID: "tk3223"});
    
});

// show json activities

app.get('/json/activities', function (req, res) {
    res.json({events: events.Matches});
    
});


app.post("/AddActivity", checkLoggedInMiddleware,express.urlencoded({
    extended: false
}), function (req, res) {



    if (req.body.tourType === "Champions League") {
        events.Matches.push({
            fixtures: req.body.name,
            dates: req.body.date,
            name: req.body.tourType
        });
    } else if (req.body.tourType === "Carling Cup") {
        events.Matches.push({
            fixtures: req.body.name,
            dates: req.body.date,
            name: req.body.tourType
        });
    }

    if (events.Matches.length > 100) {
        events.Matches.shift();
    }

    res.render('activity.njk', {
        events: events,
        user: req.session.user
    });
});






app.post('/membershipSignup', urlencodedParser, function (req, res) {

    memberApplications = req.body;
    let salt = bcrypt.genSaltSync(nRounds); // New salt everytime!
    memberApplications["pass"] = bcrypt.hashSync(memberApplications.pass, salt);

    console.log(memberApplications);

    res.render("thanks.njk", {
        user: req.session.user
    });


});

// Available to all visitors
app.post('/loginX', urlencodedParser, async (req, res, next) => {

            hashedUsers = req.body;
            const user = users.find(user => user.email === req.body.email)

            try {
                if (user === null) {

                    
                    
                    res.status(400).render("Prob.njk",{
                        user: req.session.user
                    });

                }


                if (await bcrypt.compare(req.body.password, user.password)) {
                    // console.log("Password correct");
                    // console.log("All is well");

                    let oldInfo = req.session.user;

                    req.session.regenerate(function (err) {
                        if (err) {
                            console.log(err);
                        }
                        req.session.user = Object.assign(oldInfo, user, {
                            loggedin: true
                        });

                        let newUserInfo = Object.assign(oldInfo, user);
                        delete newUserInfo.passHash;
                        req.session.user = newUserInfo;
                        //res.json(newUserInfo);

                        res.render("Welcome.njk",{
                            user: newUserInfo
                        });
                    });
                    
                    
                }
                    else {
                        // console.log("else out");
                       
                    res.status(400).res.render("Prob.njk",{
                        user: req.session.user
                    });

                    }

                } catch {
                    // console.log("email out");
                    
                    res.status(400).render("Prob.njk",{
                        user: req.session.user
                    });
                }





            });

        // Available to all admin, members
        app.get('/logout', checkLoggedInMiddleware,function (req, res) {
        
            


            let options = req.session.cookie;
            req.session.destroy(function (err) {
                if (err) {
                    console.log(err);
                }
                res.clearCookie(cookieName, options); // the cookie name and options
                res.render("goodbye.njk", {
                    user: {role: "guest"}
                });
            })
        });









        let host = 'localhost';
        let port = process.env.PORT || 3029;
        // app.listen(port, host, function () {
        //     console.log("tourServer via Templates listening on IPv4: " + host +
        //     ":" + port);
        // });
        const server = http.createServer(app); server.listen(port, function () {
            console.log("tourServer via Templates listening on IPv4: " + host + ":" + port);
        });

     