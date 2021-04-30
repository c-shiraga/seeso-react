import React from 'react';
import { useHistory } from 'react-router-dom';
import errorImg from '../assets/img/404_img.png';
import logo from '../assets/img/seeso_logo.png';
import '../assets/styles/error.css';

const ErrorPage = () => {

    const history = useHistory();

    const returnTop = () => {
        history.push('/');
    }

    return (
        <div>
            <div class="sign-in-error">
                <div class="error-message-area">
                    <img src={logo} alt=""/>
                    <p className="error">このWebサイトは、<br />
                        専門学校岡山情報ビジネス学院の学生専用です。</p>
                    <p className="error"><span className="error">OICアカウント</span>でサインインしてください。</p>
                </div>
                <div class="error-img-area">
                    <img src={errorImg} alt="" class="error-img" />
                </div>
            </div>
            <div class="return-top">
                <button className="error" onClick={returnTop}>TOPページへ</button>
            </div>
        </div>
    )
}

export default ErrorPage
