import React from 'react';
import firebase from '../firebase/firebase';
import topChar from '../assets/img/seesoChar2.png';
import logo from '../assets/img/seeso_logo.png';
import create from '../assets/img/createImg.png';
import chat from '../assets/img/chatImg.png';
import line from '../assets/img/lineImg.png';
import topChar2 from '../assets/img/charSmile.png';
import googleBtn from '../assets/img/btn_google.png';

const Top = () => {

    const login = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        
    
        firebase.auth().signInWithPopup(provider)
            .then((result) => {
            
            if (result.user.email.match(/@oic-ok/)) {
              alert(result.user.displayName + 'さんがログインしました。');
              
              
            } else {
              alert('OICアカウントでサインインしてください')
                // location.href = '../html/error.html';
            }
          })
          // .catch(function(error) {
          //   alert(error);
          // });
      } 

    return (
        <div>
            <div className="main">
                <img src={topChar} alt="" className="top-img"/>
                <div className="main-title">
                    <img src={logo} alt="" className="title-logo-img"/>
                    <p className="sub-title">このWebサイトは専門学校岡山情報ビジネス学院(OIC)の学生専用のSNSです。</p>
                    <img src={googleBtn} onClick={login} />
                </div>
            </div>
            <div className="main2">
                <h2 className="top">SEESOで<br />イベントを企画しよう</h2>
                <div className="step-area">
                    <div className="step-left">
                        <div className="top-img-box">
                            <img src={create} alt="" className="top-comment-img"/>
                        </div>
                        <div className="top-comment-area">
                            <h3 className="step-title-left">イベントを作成し、参加者を募集</h3>
                            <p className="top-comment">
                                イベントは、作成フォームに書き込むだけですぐに作成できる。URLにはLINEのオープンチャットを貼るだけで、簡単参加。
                                zoomでもリアルでも、色々なイベントを開催できる。内容を充実させて、多くの参加者を募ろう。
                            </p>
                        </div>
                    </div>
                    <div className="step-right">
                        <div className="top-comment-area">
                            <h3 className="step-title-right">チャットでみんなと情報共有</h3>
                            <p className="top-comment">
                                イベントを作成したら、チャットに書き込み、みんなにお知らせしよう。
                                リアルタイムで通信されるので、メッセージがすぐに届く。
                                イベントを見つけやすくするために、工夫したメッセージを書き込もう。
                            </p>
                        </div>
                        <div className="top-img-box">
                            <img src={chat} alt="" className="top-comment-img"/>
                        </div>    
                    </div>
                    <div className="step-left">
                        <div className="top-img-box">
                            <img src={line} alt="" className="top-comment-img"/>
                        </div>
                        <div className="top-comment-area">
                            <h3 className="step-title-left">興味があるイベントには、どんどん参加</h3>
                            <p className="top-comment">
                                イベントへの参加は、参加ボタンを押すだけ。興味があるイベントは、積極的に参加ボタンを押してみよう。
                                ボタンを押すと、イベント開催者が作成した、LINEのオープンチャットに飛ぶので、そこでみんなと交流しよう。
                            </p>
                        </div>
                    </div>
                    <div className="step-center">
                        <h3 className="step-title-center">いつでも、どこでも、楽しめる</h3>
                        <p className="top-comment">操作はとても簡単。いますぐ、イベントを企画し、多くの人と交流しよう！</p>
                        <img src={topChar2} alt="" className="bottom-img"/>
                    </div>
                </div>  
            </div>
            <footer>
                <div className="copy">&copy;2021 seeso</div>
            </footer>
        </div>
    )
}

export default Top
