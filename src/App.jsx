import { useEffect, useState } from 'react'
import './App.css'
import { data } from './utils/data'
import Question from './components/Question';

const App = () => {
  const [currQues, setCurrQues] = useState(0);
  const [userAnswers,setUserAnswers]=useState([]);
  const [show, setShow] = useState(false);
  const [score, setScore] = useState(0);
  useEffect(()=>{
    if(show){
      let userscore=0;
      data.forEach((item,index)=>{
        if(item.selectedOption===item.correctAnswer){
          userscore++;
        }
      })
      console.log(userscore);
      setScore(userscore)
    }
  },[show])

  // console.log(userAnswers)
  return (
    <div className='app'>
      <h2>Exam App</h2>
        <Question key={data[currQues].id} ques={data[currQues]} currQues={currQues} setCurrQues={setCurrQues} setUserAnswers={setUserAnswers} setShow={setShow} lastquestion={data.length-1}/>
        <div className={`app__answers ${!show && "hidden"}`}>
          {userAnswers?.map((ans,idx)=>(
            <h3>Question{idx}:{ans}</h3>
          ))}
        </div>
        <div>{show && <h2>Score: {score}</h2>}</div>
    </div>
  )
}

export default App
