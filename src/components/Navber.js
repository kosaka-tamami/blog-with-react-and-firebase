import React from 'react'
import { Link } from 'react-router-dom'
import "./Navber.css"
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faPenToSquare, faRightToBracket } from '@fortawesome/free-solid-svg-icons'


const Navber = () => {
  return (
    <nav>
        <Link to="/">
        <FontAwesomeIcon icon={faHouse} /> ホーム</Link>
        <Link to="/createpost">
        <FontAwesomeIcon icon={faPenToSquare} /> 記事投稿</Link>
        <Link to="/login">
        <FontAwesomeIcon icon={faRightToBracket} /> ログイン</Link>
    </nav>
  );
}

export default Navber