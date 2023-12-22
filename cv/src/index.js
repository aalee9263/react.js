import React from 'react'
import reactDOM from 'react-dom'

function Hi () {

  return<div>Hello World!</div>;
}

reactDOM.render(<Hi/>, document.querySelector('#root'));