import { signInWithPopup } from 'firebase/auth';
import React from 'react'
import { auth, provider } from '../firebase';
import { useNavigate } from 'react-router-dom';

const Login = ({ setIsAuth }) => {
    const navigate = useNavigate();
    const loginInWithGoogle = () => {
        //Googleでログイン
        signInWithPopup(auth, provider).then((result) => {
            // ローカルストレージに保存
            localStorage.setItem("isAuth", true);
            setIsAuth(true);
            // ホーム画面に遷移するようにする
            navigate("/");
        });
    };
  return (
    <div>
        <p>ログインして始める</p>
        <button onClick={loginInWithGoogle}>Googleでログイン</button>
    </div>
  )
}

export default Login