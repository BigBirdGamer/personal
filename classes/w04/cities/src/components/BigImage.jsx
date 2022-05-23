type BigImageProps = {
    bigImage: string
}

function BigImage({ bigImage }: BigImageProps) {
    return  (
        <img src={bigImage} id="bigimage" alt="bigImage" />
    )
}

export default BigImage;