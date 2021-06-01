import { ImageCropRotate } from "material-ui/svg-icons";
import React from "react";

function nav (props){
    switch (props.role){
        case "user":
            let x =
                <div>
                    <ul className="menuitem"> 
                        <li><a onClick={props.homeHandler.bind(this)}> Home </a></li>
                        <li><a onClick={props.activitiesHandler.bind(this)}>Activities</a></li>
                        <li><a onClick={props.loginHandler.bind(this)}>Login Page </a></li>
						<li><a onClick={props.logOutHandler.bind(this)}>LogOut </a></li>
                    </ul>
                </div>;

            return x;

        case "guest":
            let y = 
                <div>
                    <ul className="menuitem">
						<li><a onClick={props.homeHandler.bind(this)}> Home </a></li> 
						<li><a onClick={props.activitiesHandler.bind(this)}>Activities</a></li>
                        <li><a onClick={props.loginHandler.bind(this)}>Login Page </a></li>
						<li><a onClick={props.logOutHandler.bind(this)}>LogOut </a></li>
                        
                    </ul>
                </div>;
				return y;
				
				case "admin":
					let z = 
						<div>
							<ul className="menuitem">
								<li><a onClick={props.homeHandler.bind(this)}> Home </a></li> 
								<li><a onClick={props.activitiesHandler.bind(this)}>Activities</a></li>
                        		<li><a onClick={props.addActivitiesHandler.bind(this)}>Add Activities</a></li>
								<li><a onClick={props.loginHandler.bind(this)}>Login Page </a></li>
                        		
								<li><a onClick={props.logOutHandler.bind(this)}>LogOut </a></li>
							</ul>
						</div>;
						return z;

        default: return <h1>No project match</h1>;
    }
}

export default nav;