import ComponentC from "./ComponentC";

function ComponentB() {
  // console.log('CompB - props', props)
  let style = {
    marginLeft: "20px",
    marginTop: "10px",
  };

  return (
    <div style={style}>
      This is Component B
      <ComponentC />
    </div>
  );
}

export default ComponentB;
