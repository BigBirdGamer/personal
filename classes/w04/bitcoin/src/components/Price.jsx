import "./Price.css";
import NavBar from "./NavBar";
import {useState, useEffect } from "react"
import {useParams} from 'react-router-dom'



function Price() {
    const params = useParams();
    const [data, setData] = useState("price");
    const [status, setStatus] = useState("loading");
  
    useEffect(() => {
      fetch(`https://api.coindsk.com/v1/bpi/currentprice/${params.currency}}`)
        .then((response) => response.json())
        .then((data) => {
            setData(data)
            setStatus("done")
        }).catch(error => {
            setStatus("error")
        })
    }, []);
  
    console.log(params);
  
    if (status === "loading") {
        return "loading";
    }
  
    if (status === "error") {
        return "Error"
    }
  
    return (
      <>
        <Navbar />
        <h1>Bitcoin price in {params.currency} </h1>
        <div className="price">{data?.bpi?.[params?.currency].rate}</div>
  
        <Link to="/currencies">Back to Currencies</Link>
      </>
    );
  }
  
  export default Price;
  