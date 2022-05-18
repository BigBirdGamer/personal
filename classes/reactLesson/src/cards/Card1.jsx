import CardBody from "./CardBody";
import CardImg from "./CardImg";

//? input -> functions -> output

const sayHi = (props) => {
   return "Hi " + props.name
}
console.log("hi", sayHi({ name: "lucas" } ))

function Card1(props) {
    console.log("text", props.text)
  return (
    <div className="card">
      <CardImg src={props.url} />
      <img src="home.jpg"/>
      <CardBody country={props.title}  text={props.text}/>
      
      
    </div>
  );
}

export default Card1;
