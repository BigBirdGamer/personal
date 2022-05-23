import React from 'react';
import '../App.css';
import {useState, useEffect} from "react"

//name , email , birthdate , city , phone

export default function App() {

    const [name, setName] = useState({});
    const [email, setEmail] =useState({});
    const [birthday, setBirthday] =useState({});
    // const [email, setEmail] =useState({});

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("https://randomuser.me/api/")
            const data = await response.json()
        console.log(data.results[0].email)
            setName(data.results[0].name.first);
            setEmail(data.results[0].email);
            
        }
        fetchData()
    }, [])

  const handleClick = () => {
    fetch(`https://randomuser.me/api/`)
    .then((response) => response.json())
    .then((data) => setName(data)); 
  };

  const styles = {};

  return (
    <div id="container">
      <div style={styles} id="photo"></div>
      <div id="content">
        <span id="smalltext">My name is - {name}</span>
        <span id="bigtext"></span>
      </div>
      <div onClick={handleClick} className="attribute">
        <span id="name" role="img" aria-labelledby="face">
          😀
        </span>
      </div>
      <div onClick={handleClick} className="attribute">
        <span id="email" role="img" aria-labelledby="email">
          📧
        </span>
      </div>
      <div onClick={handleClick} className="attribute">
        <span id="birthdate" role="img" aria-labelledby="confetti">
          🎉
        </span>
      </div>
      <div onClick={handleClick} className="attribute">
        <span id="city" role="img" aria-labelledby="city">
          🌆
        </span>
      </div>
      <div onClick={handleClick} className="attribute">
        <span id="phone" role="img" aria-labelledby="tele">
          📞
        </span>
      </div>
    </div>
  );
}
