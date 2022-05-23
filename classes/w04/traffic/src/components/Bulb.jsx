function Bulb(props: { colour: string }) {
    return <div className="bulb" style={{ backgroundColor: props.colour }}></div>;
  }
  
  export default Bulb;
  