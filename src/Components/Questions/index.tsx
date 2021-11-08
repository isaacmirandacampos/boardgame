import styles from './Questions.module.css'
import questions from '../../questions.json'
import { toast } from 'react-toastify';
import { useEffect, useState } from 'react';
interface QuestionsParams {
  values: {
    dificulty: number;
    choosed: boolean;
    score: number;
    attempt: number;
  }
  setValues: React.Dispatch<React.SetStateAction<{
    dificulty: number;
    choosed: boolean;
    score: number;
    attempt: number;
}>>
}

function Questions({ values, setValues }: QuestionsParams) {
  const [question] = useState(Math.floor(Math.random() * 10)) 

  useEffect(()=>{
    if(values.dificulty === values.attempt) {
      alert(`Número de tentativas excedido, a resposta verdadeira era: ${questions[values.dificulty - 1].questions[question].true}`)
      setValues({...values, choosed: false, attempt: 0 })
    } 
  }, [values.attempt])

  const selectOption = (select:'one' |'two' | 'three' | 'four') => {
    if(questions[values.dificulty - 1].questions[question][select] === questions[values.dificulty - 1].questions[question].true) {
       setValues({
         ...values,
         choosed: false,
         attempt: 0,
         score: values.dificulty !== 1 ? 
                values.score + (values.dificulty - values.attempt) : 
                values.score + 1 })
       toast.success('Resposta certa')
    } else {
      if(values.dificulty === 1) {
        alert(`Resposta errada, a verdadeira é: ${questions[values.dificulty - 1].questions[question].true}`)
        setValues({...values, choosed: false, attempt: 0 })
      } else {
        setValues({...values, choosed: true, attempt: values.attempt + 1 })
        toast.warn(`Você errou, você tem ${values.dificulty - (values.attempt + 1)} tentativas`)
      }
    }
  }

  return (
    <div className={styles.questions}>
      <span>{questions[values.dificulty - 1].questions[question].question}</span>
      <div className={styles.options}>
        <span onClick={() => selectOption('one')} >1 - {questions[values.dificulty - 1].questions[question].one}</span>
        <span onClick={() => selectOption('two')} >2 - {questions[values.dificulty - 1].questions[question].two}</span>
        <span onClick={() => selectOption('three')} >3 - {questions[values.dificulty - 1].questions[question].three}</span>
        <span onClick={() => selectOption('four')} >4 - {questions[values.dificulty - 1].questions[question].four}</span>
      </div>
    </div>
  );
}

export default Questions;
