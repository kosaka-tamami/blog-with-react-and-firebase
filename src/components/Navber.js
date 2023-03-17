import React from 'react'
import { Link } from 'react-router-dom'
import "./Navber.css"
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faPenToSquare, faRightToBracket, faRightFromBracket } from '@fortawesome/free-solid-svg-icons'


const Navber = ({ isAuth }) => {
  return (
    <nav>
        <Link to="/">
        <FontAwesomeIcon icon={faHouse} /> ホーム</Link>
        {!isAuth ? 
        (<Link to="/login">
        <FontAwesomeIcon icon={faRightToBracket} /> 
        ログイン
        </Link>
        ) :( <>
        <Link to="/createpost">
        <FontAwesomeIcon icon={faPenToSquare} /> 記事投稿</Link>
        <Link to="/logout">
        <FontAwesomeIcon icon={faRightFromBracket} /> 
        ログアウト
        </Link>
        </>
        )}
    </nav>
  );
}

export default Navber