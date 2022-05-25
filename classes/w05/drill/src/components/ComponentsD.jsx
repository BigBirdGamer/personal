import { useContext } from 'react';
import { DataContext } from './Drill'
// console.log("D - DataContext", DataContext)


function ComponentD() {
  const dataContext = useContext(DataContext)
  console.log('D - dataContext', dataContext)

  let style = {
    marginLeft: '20px',
    marginTop: '10px'
  };

  return (
    <div style={style}>
      This is Component D
      <div className="user" style={style}>
        <div>
          {' '}
          username: {dataContext.user} <b></b>
        </div>
        <div className="avatar">
          <img className="avatar-image" src={dataContext.avatar} alt="avatar" />
        </div>
      </div>
    </div>
  );
}

export default ComponentD;