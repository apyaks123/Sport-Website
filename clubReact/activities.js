import React from "react";



function activities (props){
    let rows = props.events.Matches.map(function(u, i){
        console.log(u);
        return <tr key={u.name}><td>{u.name}</td><td>{u.dates}</td><td>{u.fixtures}</td></tr>;
    });
    
    let x = 
        <section id="root">
            <header id="header">
                <h1>Club Activities</h1>
            </header>

            <section>
                <h2>Main Activity</h2>
                <ul>
                    <li>Play For the <strong><em>Fans!</em></strong></li>
                    <li>Win the <strong><em>League!</em> </strong>&#129488;</li>
                    <li>Be the <strong><em>Best</em> </strong> out there everyday!</li>
                </ul>

                <h3><strong>Activity site work in a Table Format. </strong></h3> 
            </section>

            <section>
                <table className="c1">
                    <thead><tr><th>Competition</th><th>Dates</th><th>Matches</th></tr></thead>
                    <tbody>{rows}</tbody>
                </table>
            </section>
        </section>

    return x;

}
export default activities;