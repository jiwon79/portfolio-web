import React from 'react'
import './Header.css'

export default function Header() {
    return (
        <div className="header">
            <div>
                LOGO
            </div>
            <ul>
                <li onClick={() => {
                    document.getElementById('main').scrollIntoView();
                }}>
                    Home
                </li>
                <li onClick={() => {
                    document.getElementById('about').scrollIntoView();
                }}>
                    About
                </li>
                <li>
                    Contact
                </li>
                <li>
                    Skill
                </li>
                <li>
                    Project
                </li>
            </ul>
        </div>
    )
}
