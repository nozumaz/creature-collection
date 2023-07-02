import React from "react";

function About() {
    return (
        <div>
            <h1>About Page</h1>
            <div className="info-box">
            <p>Single page application made with create-react-app linked to a JSON server holding a collection of mythical creatures that can be added and removed from as desired.</p>
            <br/>
            <h3>Github Repository Links:</h3>
            <a href="https://github.com/nozumaz/flatiron-phase2-project">Frontend React Repository</a>
            <br/>
            <br/>
            <a href="https://github.com/nozumaz/flatiron-phase2-project-backend">JSON Server Repository</a>
            </div>
        </div>
        );
}

export default About;