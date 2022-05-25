import ComponentB from "./ComponentB"

function ComponentA() {
  
  console.log('CompA')
  let style = {
    marginLeft: '20px',
    marginTop: '10px'
  };

  
  return (
    <div style={style}>
      This is Component A
      <ComponentB />
    </div>
  );
}

export default ComponentA