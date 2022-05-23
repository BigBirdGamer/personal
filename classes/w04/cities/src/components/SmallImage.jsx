type SmallImageProps = {
    img: string, 
    city: string,
    setBigImage: (img: string) => void
}


function SmallImage({ img, city, setBigImage }: SmallImageProps) {
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