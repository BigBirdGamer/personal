import ComponentD from "./ComponentD";
// Import Context from App

function ComponentC() {
  // console.log('CompC - props', props)
  let style = {
    marginLeft: "20px",
    marginTop: "10px",
  };

  return (
    <div style={style}>
      {/* Setup the Consumer */}
      <>
        This is Component C
        <ComponentD />
      </>
    </div>
  );
}

export default ComponentC;
