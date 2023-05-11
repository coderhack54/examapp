import { useState } from 'react'
import './App.css'
import { data } from './utils/data'
import Question from './components/Question';

const App = () => {
  const [currQues, setCurrQues] = useState(0);
  const [userAnswers,setUserAnswers]=useState([]);
  const [show, setShow] = useState(false)
  return (
    <div className='app'>
      <h2>Exam App</h2>
        <Question key={data[currQues].id} ques={data[currQues]} currQues={currQues} setCurrQues={setCurrQues} setUserAnswers={setUserAnswers} setShow={setShow}/>
        <div className={`app__answers ${!show && "hidden"}`}>
          {userAnswers.map((ans,idx)=>(
            <h3>Question{idx}:{ans}</h3>
          ))}
        </div>
    </div>
  )
}

export default App
