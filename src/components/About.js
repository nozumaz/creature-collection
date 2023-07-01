import React from "react";

function About() {
    return (
        <div>
            <h1>About Page</h1>
            <div className="info-box">
            <p>Small collection of mythical creatures that can be added and removed from.</p>
            <br/>
            <h3>Github repository links:</h3>
            <a href="https://github.com/nozumaz/flatiron-phase2-project">Frontend Repository</a>
            <br/>
            <br/>
            <a href="https://github.com/nozumaz/flatiron-phase2-project-backend">JSON Server Repository</a>
            </div>
        </div>
        );
}

export default About;