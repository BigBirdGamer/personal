import CardBody from "./CardBody";
import CardImg from "./CardImg";

const Card2 = () => {
  return (
    <div className="card">
      {/* <img
        src="https://images.unsplash.com/photo-1498712964741-5d33ab9e5017?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=600"
        className="card-img-top"
        alt="..."
      /> */}
      <CardImg alt="malaysia"/>
      <CardBody />
    </div>
  );
};

export default Card2;
