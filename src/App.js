import React from 'react';
import { useState } from 'react';
import './App.css';

function App() {
  // const [data, setData] = useState('');
  // const btns = [];

  // ['1', '2', '3', '4', '5', '6', '7', '8', '9'].forEach(i => {
  //   btns.push(
  //     <div>
  //       <button className = "fit" onClick={e => { setData(data + e.target.value) }}
  //       value = {i}
  //       key = {i}>
  //       {i}  
  //       </button>

  //     </div>

  //   )
  // })

  return (
    <div className="screen">
      
      <div>
        {/* {data} */}
      </div>
      <div className="grid-container">
        {/* {btns} */}

        <div class='item-numbr'>1</div>
        <div class='item-numbr'>2</div>
        <div class='item-numbr'>3</div>
        <div class='item-numbr'>4</div>
        <div class='item-numbr'>5</div>
        <div class='item-numbr'>6</div>
        <div class='item-numbr'>7</div>
        <div class='item-numbr'>8</div>
        <div class='item-numbr'>9</div>
        <div class='item-numbr'>0</div>
        <div class='item-numbr'>.</div>
        <div class='item-opert'>+</div>
        <div class='item-opert'>-</div>
        <div class='item-opert'>x</div>
        <div class='item-opert'>%</div>
        <div class='item-funct'>=</div>
        <div class='item-funct'>clr</div>
        <div class='item-empty'></div>


      </div>
    </div>
  );
}

export default App;
