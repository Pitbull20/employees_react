import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

ReactDOM.render(
  <React.StrictMode>

  </React.StrictMode>,
  document.getElementById('root')
);


let test = [1,2,3,6,7,8,9,0];


function pop(arr) {
    arr.length = arr.length - 1;  
    console.log(arr);
}

pop(test);
pop(test);
pop(test);
pop(test);
pop(test);
