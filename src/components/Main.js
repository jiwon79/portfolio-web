import React from 'react'
import './Main.css'

const Main = () => {
    return (
        <div>
            <div className="background">
                <img className="back-img" src={require('./../img/night.jpg').default} alt="background"/>
            </div>
            <div className="main" id="main"></div>
        </div>
    )
}

export default Main;