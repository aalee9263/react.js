import React from 'react';
import reactDOM from 'react-dom';
import "./index.css"


function Post (props) {

  return <div className='facebookPost'>
      <h3>{props.name}</h3>
      <span>23 December 2023</span>
      <p>Some Text You can type here</p>
      <img width={300} src={props.imgUrl}></img>
      <br/>
      <button>Like</button>
      <button>Comment</button>
      <button>Share</button>
</div>
}


reactDOM.render(<div> 
  <Post imgUrl={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_h0xQnM3Wp5HHeSGHdbL70TjnlmeYfYXZKw&usqp=CAU"} name={"Arshad"}/>
  <Post imgUrl={"https://dynamic.brandcrowd.com/template/preview/design/cbaf946f-883a-4b7f-8e57-a72dc5861c3a/699ccdd0-0be7-4970-8290-43335453903f?v=4&designTemplateVersion=1&logoTemplateVersion=8&size=design-preview-standalone-1x"} name={"Aalee"}/>
  <Post imgUrl={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFu8i-45ZKj4Fxqm6kkZjixs0R8PrMoz9RmQ&usqp=CAU"} name={"Inzamam"}/>
  <Post imgUrl={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVJ6xZsmmaXbPjZPo8gwX0FYmUF4N_vgUUqw&usqp=CAU"} name={"Malik"}/>
  </div>, document.querySelector('#root'))