import React from 'react'
import reactDOM from 'react-dom';
import  "./index.css"


function Hi () {

  return<div>

    <div className='Header'>Arshad Ali
    
    <nav> 
      <ul>
        <li>  Portfolio</li>
        <li>  Contact</li>
        <li>  Experience</li>
        <li>  ABC Items 4</li>
      </ul>
    </nav>

</div>
    

  </div>;

}

reactDOM.render(<Hi/>, document.querySelector('#root'));