import ComponentG from "./ComponentG"



function ComponentF(props) {

  let style = {
    marginLeft: '20px',
    marginTop: '10px'
  };
  
  return (
    <div style={style}>
      This is Component F
     <ComponentG {...props}/>
    </div>
  );
}

export default ComponentF
