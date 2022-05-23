function SmallImage({ img, city, setBigImage }) {
    const handleClick = () => {
        setBigImage(img) //? setBigImage()
    }

    return (
        <img
        className="thumb"
        src={img}
        alt={city}
        onClick={handleClick}
      />
    )
}

export default SmallImage;