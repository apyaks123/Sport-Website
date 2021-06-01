// index.js file
import React from "react";
import ReactDOM from "react-dom";
import Menu from "./menu";
import Home from "./home";
import Activities from "./activities";
import events from "./events.json" // Importing JSON!
import Login from "./login";
import Membership from "./membership";
import Add from "./AdminActivity";
import LogOut from "./logOut";



class App extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = { role: "user", show: "home", events: events }; 
    }

    homeHandler(event) {
        console.log(event);
        console.log(event.target)
        console.log("You pressed a button");
        this.setState({show: "home"});
    }
    
	activitiesHandler(event) {
		this.setState({show: "activities"});
  }

  membershipHandler(event) {
    this.setState({show: "membership"});
}

  addActivitiesHandler(event) {
		this.setState({show: "AdminActivity"});
    }
    
    loginHandler(event) {
		this.setState({show: "login", role:"admin"});
    }
    logOutHandler(event) {
		this.setState({show: "logOut", role:"guest"});
    }


    render() {
        let contents = null;
        
        switch (this.state.show) {
            case "home":
                contents = <Home / >;
                break;
                case "login":
                contents = <Login />;
                break;
                case "logOut":
                contents = <LogOut />;
                break;
                case "membership":
                contents = <Membership />;
                break;
                case "AdminActivity":
                contents = <Add  events={events}/>;
                break;
                case "activities":
                contents = <Activities events={events}/>;
                break;
                default:
                    contents = <h2>Warning something went wrong!!!</h2>;
            }


            return (
            
            <div>
                
            <nav><Menu role={this.state.role} logOutHandler={this.logOutHandler.bind(this)}  membershipHandler={this.membershipHandler.bind(this)} loginHandler={this.loginHandler.bind(this)}  addActivitiesHandler={this.addActivitiesHandler.bind(this)} activitiesHandler={this.activitiesHandler.bind(this)} homeHandler={this.homeHandler.bind(this)} /></nav>
            
            
            {contents}
          </div>
          
            );
    }
}
// Now rendering the App component!
ReactDOM.render(<App />, document.getElementById("section"));

