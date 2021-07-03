import React from 'react'
import './Main.css'

const Main = () => {
    return (
        <div>
            <div className="background">
                <img className="back-img" src={require('./../img/night.jpg').default} alt="background"/>
            </div>
            <div className="main" id="main">
                <p>배움을 좋아하는 개발자<br/>이지원 입니다 :D</p>
            </div>
        </div>
    )
}

export default Main;
