import React, { useState } from 'react'
import { data } from '../utils/data';

const Question = ({ques,currQues,setCurrQues,setUserAnswers,setShow,lastquestion}) => {
  const {id,question,correctAnswer,otherOptions,selectedOption} = ques;
  let generatedOptions=[correctAnswer,...otherOptions];
   const handlePrevQuestion=() =>{
    setShow(false);
  if(currQues<=0) return ;
      setCurrQues((prev)=>prev-1)
   }
   const handleNextQuestion=() =>{
    if(currQues>=2) return ;
      setCurrQues((prev)=>prev+1)
   }

   const handleSelect = (index) => {
    // console.log("this options is selected",index,generatedOptions[index]);
    // setUserAnswers((prev)=>[...prev,generatedOptions[index]]);
    // selectedOption=generatedOptions[index];
    data[currQues].selectedOption=generatedOptions[index];
   }
   const handleSubmit = () => {
    setShow(true);
   }
  return (
    <div className='question'>
      <h3>Q.{id} {question}</h3>
      {generatedOptions.map((item,index)=>(
        <div className='question__options'>
        <input type="radio" onClick={()=>handleSelect(index)} name="questions"/>
        <label htmlFor="questions">{item}</label>
        </div>
      ))}
      <div className="questions__buttonns">
        <button onClick={handlePrevQuestion} disabled={currQues===0}>Prev Ques</button>
        <button onClick={handleNextQuestion} className={currQues===lastquestion && "hidden"}>Next Ques</button>
        <button onClick={handleSubmit} className={currQues<2 && "hidden"}>Submit</button>
      </div>
    </div>
  )
}

export default Question