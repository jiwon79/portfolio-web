import React from 'react'
import './Header.css'

export default function Header() {
    return (
        <div className="header">
            <div className="header__logo">
                LOGO
            </div>
            <ul className="header__menu">
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
                <li onClick={() => {
                    document.getElementById('contact').scrollIntoView();
                }}>
                    Contact
                </li>
                <li onClick={() => {
                    document.getElementById('skill').scrollIntoView();
                }}>
                    Skill
                </li>
                <li onClick={() => {
                    document.getElementById('project').scrollIntoView();
                }}>
                    Project
                </li>
            </ul>
        </div>
    )
}
