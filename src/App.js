import React from 'react';
import { useState } from 'react';
import './App.css';

function App() {
   const [data, setData] = useState('');
   const numbr_btns = [];
   const opert_btns = [];

   const [operatorflag, setOperatorflag] = useState(false);
   const [operator, setOperator] = useState(' ');

   ['1', '2', '3', '4', '5', '6', '7', '8', '9','0','00','.'].forEach(i => {
    numbr_btns.push(
       <div>
         <button className = "fit" onClick={e => { setData(data + e.target.value) }}
         value = {i}
         key = {i}>
         {i}  
         </button>
       </div>
     )
   });

   ['+', '-', 'x', '%'].forEach(i => {
    opert_btns.push(
       <div>
         <button className = "fit" onClick={e => [ setData(data + e.target.value), handleOperator(e.target.value)]}
         value = {i}
         key = {i}>
         {i}  
         </button>
       </div>
     )
   });


   const handleOperator = (value) => {
    if (operatorflag) {
      alert('An operator is already selected, please clear.');
    } else {
      setOperator(value);
      setOperatorflag(true);
      setData('');

    }

  };

  return (
    <div className="screen">
      <div id='container-numbr' class='grid-numbr'>
        {numbr_btns}
      </div>
      <div id='container-opert' class='grid-opert'>
        {opert_btns}
      </div>
      <div id='container-funct' class='grid-funct'>
        <div>=</div>
        <div>clr</div>
      </div>
    </div>
  );
}

export default App;
