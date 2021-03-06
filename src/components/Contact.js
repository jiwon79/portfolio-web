import React from 'react'
import './Contact.css'

export default function Contact() {
    return (
        <div className="contact" id="contact">
            <div className="contact__title">
                <h1>Contact</h1>
            </div>
            <ul className="contact__content">
                <li>
                    Email: 19-079@ksa.hs.kr
                </li>
                <li>
                    Github: <a href="https://github.com/jiwon79">jiwon79</a>
                </li>
                <li>
                    Blog: <a href="https://sleepy-it.tistory.com/">코딩 이야기</a>
                </li>
                <li>
                    Instagram: <a href="https://www.instagram.com/easy_one1979/">easy_one1979</a>
                </li>
            </ul>
        </div>
    )
}
