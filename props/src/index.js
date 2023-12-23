import React from 'react';
import reactDOM from 'react-dom';
import "./index.css"


function Post () {

  return <div className='faebookPost'>
      <h1>FaceBook Post</h1>

</div>
}


reactDOM.render(<Post/>, document.querySelector('#root'))