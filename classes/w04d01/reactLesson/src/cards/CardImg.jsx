function CardImg(props) {
    //? when there is no alt attribute -> "No description"

    const alt = props.alt || "no description"


  return <img src={props.src} className="card-img-top" alt={ alt } />;
}

export default CardImg;
