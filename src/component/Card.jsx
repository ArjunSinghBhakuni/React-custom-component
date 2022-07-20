import React, { useState } from 'react'
import { useRef } from 'react'
import CardNumber from './CardNumber'

const Card = ({length}) => {

 const [boxLength] = useState(new Array(length).fill(1))
 
 const inputRef = useRef();
 const [inputValue,seInputValue] = useState( new Array(length).fill(' '))

 const handleChange = (e,index)=>{

  inputRef.current[index+1].focus()
 }

  return (
    <div style={{display:'flex' ,gap:"20px",marginLeft:"40%",marginTop:"2%"}}>
     {boxLength?.map((e,i)=>{
      return(
        <CardNumber 
        ref={(element)=>{
         inputRef.current[i] = element;
        }}
       key={i}
       changeHandler = {(e)=>handleChange(e,i)}

       />
      )
     })}
    </div>
  )
}

export default Card