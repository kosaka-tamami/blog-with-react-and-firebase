
import { async } from '@firebase/util';
import { doc, collection, deleteDoc, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import "./Home.css"
import { auth, db } from '../firebase';
// import { docs }

const Home = () => {

  const [postList, setPostList] = useState([]);

  useEffect(() => {
    // useEffectのなかでasync関数を使う時はもう一度関数を作る
    const getPosts = async () => {
      const data =await getDocs(collection(db, "posts"));
      // console.log(data);
      // console.log(data.docs);
      // console.log(data.docs.map((doc) => ({ doc })));
      // // docに対してdata関数を指定すると中身を取ってこれる
      // console.log(data.docs.map((doc) => ({ ...doc.data().author.username })));
      // console.log(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getPosts();
  }, []);

  const handleDelete = async(id) => {
    await deleteDoc(doc(db, "posts", id));
    // 更新ボタンを押さなくても削除した画面になるようにリダイレクトさせる
    window.location.href = "/";
  };

  return (
    <div className='homePage'>
      {postList.map((post) => {
        return(
          <div className='postContents' key={post.id}>
          <div className='postHeader'>
            <h1>{post.title}</h1>
          </div>
        <div className='postTextContainer'>
          {post.postText}
        </div>
        <div className='nameAndDeleteButton'>
          <h3>@{post.author.username}</h3>
        {/* ユーザーidが合致しているかどうかでボタンが出現、usernameじゃなくてid？ */}
          {post.author.id === auth.currentUser.uid && (
            <button onClick={() => handleDelete(post.id)}>削除</button>
          )}
        </div>
      </div>
        )
      })}
    </div>
  )
}

export default Home