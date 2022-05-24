import { useState, useEffect } from "react";
import "../App.css";

const extractData = (user, thing) => {
  if (thing === "name") {
    return user.name.first + user.name.last;
  } else if (thing === "email") {
    return user.email;
  } else if (thing === "birthdate") {
    return user.dob.date;
  } else if (thing === "city") {
    return user.location.city;
  } else if (thing === "phone") {
    return user.phone;
  }
  return "Nothing";
};

function RandomUser() {
  const [user, setUser] = useState({});
  const [thing, setThing] = useState("email");
  const [num, setNum] = useState(0);

  useEffect(() => {
    fetch("https://randomuser.me/api/")
      .then((response) => response.json())
      .then((data) => setUser(data.results[0]));
  }, [num]);

  const handleClick = (event) => {
    //   console.log("event", event.target.id);
    setThing(event.target.id);
  };
  const styles = { backgroundImage: `url(${user?.picture?.large})` };

  const handleNewRandomUser = () => {
    console.log("click");
    setNum(num + 1);
  };

  //   <div id="photo" style="background-image: url(&quot;https://randomuser.me/api/portraits/women/34.jpg&quot;);"></div>
  return (
    <div id="container">
      <div style={styles} id="photo"></div>
      <div id="content">
        <span id="smalltext">
          My {thing} is {extractData(user, thing)}
          <button onClick={handleNewRandomUser}>New Random User</button>
        </span>
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

export default RandomUser;
