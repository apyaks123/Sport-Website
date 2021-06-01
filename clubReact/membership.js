
import React from "react";



function Membership (props)
{
    let yyy = 

<section>

<header id="header">
    <h1>
        Club Membership
    </h1>
</header>




    <section>
        <div id="cont">
            <h3>Registration Information </h3>
            <p>Please enter your valid email and Password!</p>
        </div>


    </section>


    <section>



   


    <form >
        <fieldset>

            <div>

                <label >Email Address** </label>
                <input type="text" name="email" id="InTest1" required/>

            </div>


            <div>
                <label >Password* </label>
                <input type="password" id="InTest2" name="pass"  required />

            </div>

            


            <div>

                <label >Full Name** </label>
                <input type="text" id="InTest4" name="fname"  required/>

            </div>

            <div>
                <label >Choose your Gender:</label>

                <select name="Gender" id="gender">
                    <option >Male</option>
                    <option >Female</option>
                    <option >N/a</option>

                </select>

            </div>

             <div>

                <label >How dud you hear about us?</label>
                <br/>
                <textarea cols="30" rows="6" name="description" defaultValue="  " />

                
            </div>








            <div><button type="submit">Submit!</button></div>

        </fieldset>
    </form>


</section>

</section>;
return yyy;


}


export default Membership;