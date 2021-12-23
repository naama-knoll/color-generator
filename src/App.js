import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

function App() {
  const [color, setColor]= useState('');
  const [error,setError]= useState(false);
  const [colorList ,setColorList]= useState(new Values('#222').all(10));

  const handleSubmit = (e) => {
    e.preventDefault();
    try{
      setError(false);
      let colors= new Values(color).all(10);
      setColorList(colors);
    }catch (error){
      setError(true);
      console.log('error');
    }
    setColor('');
  }
  return <>
  <section className='container'>
    <h3>color generator</h3>
    <form onSubmit={handleSubmit}> 
      <input 
      type='text' 
      value={color} 
      onChange={(e)=>setColor(e.target.value)} 
      placeholder='#f15025'
      className={`${error ? 'error' : null}`}
      />
    </form>
    <button className='btn' type='submit'> submit</button>
  </section>
  <section className='colors'>
    <h4>{colorList.map((color,index)=>{
      return <SingleColor key={index} {...color} index={index}/>
    })}</h4>
  </section>
  </>
}

export default App
