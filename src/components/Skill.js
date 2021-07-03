import React from 'react'
import './Skill.css'

export default function Skill() {
    return (
        <div className="skill" id="skill">
            <div className="skill__title">
                <h1>Skill</h1>
            </div>
            <div className="skill__content">
                <p className="skillName">
                    Front End
                </p>
                <ul className="skillList">
                    <li>HTML5</li>
                    <li>CSS3</li>
                    <li>JavaScript</li>
                    <li>React</li>
                </ul>
                <p className="skillName">
                    Backend
                </p>
                <ul className="skillList">
                    <li>PHP</li>
                    <li>Git</li>
                    <li>Vim, Visual Studio Code</li>
                </ul>
                <p className="skillName">
                    DevOps
                </p>
                <ul className="skillList">
                    <li>AWS EC2, Foute 53</li>
                    <li>MySQL</li>
                    <li>Tomcat</li>
                </ul>
            </div>
        </div>
    )
}
