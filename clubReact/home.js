import React from "react";
import neptune from "./images/arsenal_football_development_1_1.jpg";
import neptune1 from "./images/index.jpeg";

function home (props){
    let yyy = 
        <section>
            <header id="header">
            <h1> The Banter Football/Soccer Club </h1>
    </header>


            <h2>What does Banter FC &#9917; represent? </h2>
            <p>
                This the best footballing Club in the whole wide <em> World </em>.
                It is bigger than the mighty
                <strong>Galacticos </strong> &#128285;&#127894;&#128074; &#128077; 
            </p>
                <img src={neptune} width="800px" height="auto" />
            <p>
                Figure 1. The Mighty Banter FC picture. &copy; 2020 Arsenal FC
            </p>



            <h2> Football/Soccer club in top Division of California Ultimate League </h2>
            <p> Competing with the best in the west and last season Treble winner. Dahhh!!&#129322;&#129323;
            </p>
                <summary><strong>Why Banter FC? </strong></summary>
                <p>Out of 13 season we have won 11 of the top flight division. As well as we have the best striker in the whole wide world. <strong>Pierre Emerick Aubamayeng.</strong></p>

                <img src={neptune1} width="800px" height="auto" />
        </section>;

    return yyy;

}
export default home;