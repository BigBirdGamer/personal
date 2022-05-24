import Button from "./Button";

function CardBody(props) {
  return (
    <div className="card-body">
      <h5 className="card-title">{props.country}</h5>
      <p className="card-text">
        {props.text}
      </p>
      <Button />
      
    </div>
  );
}

export default CardBody;
