import React from "react";
import events from "./events.json" // Importing JSON!


class MyComponent extends React.Component {
    constructor(props) {
        super(props); // Must call
        this.state = { role: "admin", show: "AdminActivity", events: events, Competition : null, Dates : null, Fixtures : null
     };
    }

    handleCompetition = (event) => {
        event.preventDefault();
        this.setState({Competition: event.target.value})
        console.log(data);
    }

    handledates = (event) => {
        event.preventDefault();
        this.setState({Dates: event.target.value})
        console.log(data);
    }
    handleFixtures = (event) => {
        event.preventDefault();
        this.setState({Fixtures: event.target.value})
        console.log(data);
    }




    handleClick = ( i) => {
        // console.log("Here i am");
        // console.log(i);
        // console.log(this.props.events.Matches);
        var contacts = this.props.events.Matches;
    contacts.splice(i, 1);
    this.setState({events: contacts});
  



    }
   

    addEvent = (event, i) => {
        event.preventDefault();
        let dons = this.props.events.Matches;
        
        let inputThis = {
            name: this.state.Competition, 
            dates: this.state.Dates, 
            fixtures: this.state.Fixtures
        }
        
        
        

        dons.push(inputThis);

        let rows = dons.map(function(u, i){
            <tr key={u.name}><td>{u.name} </td><td>{u.dates}</td><td>{u.fixtures}</td></tr>;
        });

        this.setState({
            events: rows
        });

    }

    // Renders component based on current state and props
    render() {
        const {Competition} = this.state;
        let rows = this.props.events.Matches.map((u, i) => {
            console.log(u);
            
            
        return <tr  key={u.name}>
            <td> <button onClick={this.handleClick.bind(this, i)}> Delete</button></td>
            <td>{u.name} </td>
            <td>{u.dates}</td>
            <td>{u.fixtures}</td>
            </tr>;
        });

        


        // Any code you like
        return  <section id="root">
        <header id="header">
            <h1>Activity Management</h1>
        </header>

        <section>
        <details>
            
            <summary><strong>Add Activity </strong></summary>
    {/* <p> Compettion is: {Competition}</p> */}
            <form onSubmit={this.handleSubmit}>
                <p>Competition: <input type='text' name='Competition' onChange={this.handleCompetition.bind(this)}/> </p>
                <p>Dates: <input type='text' name='Dates' onChange={this.handledates.bind(this)}/> </p>
                <p>Fixtures: <input type='text' name='Fixtures' onChange={this.handleFixtures.bind(this)}/> </p>

                <p><button onClick={this.addEvent.bind(this)}>Add Activity</button></p>
                </form>
             
        </details>

            
        </section>

        <section>
        <h3><strong>Activity site work in a Table Format. </strong></h3> 
            <table className="c1">
                
                <thead><tr><th> </th><th>Competition</th><th>Dates</th><th>Matches</th></tr></thead>
                <tbody>{rows}</tbody>
            </table>
        </section>
    </section>
    }
}
export default MyComponent;