import React from 'react'
import './About.css'

export default function About() {
    return (
        <div className="about" id="about">
            <div className="about__title">
                <h1>About</h1>
            </div>
            <img className="about__profile" src={require('./../img/profile.jpg').default} alt="profile"/>
            <ul className="about__content">
                <li>안녕하세요 1년차 개발자 이지원입니다.</li>
                <li>제가 만든 서비스를 남들이 사용해 주는 것이 좋아 개발을 하고 있습니다.</li>
                <li>Clean Code, 완성도 높은 UI를 고민하고 있습니다.</li>
            </ul>
        </div>
    )
}
