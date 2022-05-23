import { useState } from "react";
import BigImage from "./BigImage";
import imagesArr from "./imageData";
import SmallImage from "./SmallImage";
import "./App.css";

export default function Cities() {
  const [bigImage, setBigImage] = useState(imagesArr[0].img);

  const handleClick = (url) => () => {
    setBigImage(url);
  };

  //? React -> Pass info (one way flow) -> Parent to Child -> props
  //? Child pass info back to the Parent -> callback
  return (
    <div className="App">
      <h1>Cities Of The World</h1>
      <div id="wrapper">
        <div id="thumbnails">
          {imagesArr.map((image) => (
            <SmallImage
              key={image.city}
              img={image.img}
              city={image.city}
              setBigImage={setBigImage} //? callback
            />
          ))}
        </div>
        <BigImage bigImage={bigImage} />
      </div>
    </div>
  );
}
