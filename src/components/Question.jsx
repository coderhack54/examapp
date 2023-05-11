import React, { useState } from 'react'

const Question = ({ques,currQues,setCurrQues,setUserAnswers,setShow}) => {
  const {id,question,correctAnswer,otherOptions} = ques;
  let generatedOptions=[correctAnswer,...otherOptions];
   const handlePrevQuestion=() =>{
    if(currQues<=0) return ;
      setCurrQues((prev)=>prev-1)
   }
   const handleNextQuestion=() =>{
    if(currQues>=2) return ;
      setCurrQues((prev)=>prev+1)
   }

   const handleSelect = (index) => {
    console.log("this options is selected",index,generatedOptions[index])
    setUserAnswers((prev)=>[...prev,generatedOptions[index]]);
   }
   const handleSubmit = () => {
    setShow(true)
   }
  return (
    <div className='question'>
      <h3>Q.{id} {question}</h3>
      {generatedOptions.map((item,index)=>(
        <div className='question__options'>
        <input type="radio" onClick={()=>handleSelect(index)} name={item}/>
        <label htmlFor={item}>{item}</label>
        </div>
      ))}
      <div className="questions__buttonns">
        <button onClick={handlePrevQuestion} disabled={currQues===0}>Prev Ques</button>
        <button onClick={handleNextQuestion} className={currQues===2 && "hidden"}>Next Ques</button>
        <button onClick={handleSubmit} className={currQues<2 && "hidden"}>Submit</button>
      </div>

    </div>
  )
}

export default Question