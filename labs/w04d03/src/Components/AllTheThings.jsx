import React from 'react';

function AllTheThings(props) {
 console.log(props.products)
  return (
    <div className="AllTheThings">
       <h2>Put these in your cart!</h2>
    {props.products1.map((element,index)=>{
        <li>{props.name}{props.price}</li>
    })}

    </div>
  

  );
}

export default AllTheThings;


// in components folder props.KEYNAME of parent if not distructure
// If want to .map() from component, put the html tag into the .map() function and return
