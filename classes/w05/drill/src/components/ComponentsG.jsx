
function ComponentG(props) {
    let style = {
      marginLeft: '20px',
      marginTop: '10px'
    };
  
    return (
      <div style={style}>
        This is Component G
        <div style={style}>
          <div className="avatar">
            <img className="avatar-image" src={props.userData.avatar} alt="avatar" />
          </div>
        </div>
      </div>
    );
  }
  
  export default ComponentG;
  