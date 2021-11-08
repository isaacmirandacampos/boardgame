import styles from './Questions.module.css'
import questions from '../../questions.json'
import { toast } from 'react-toastify';
interface QuestionsParams {
  values: {
    dificulty: number;
    choosed: boolean;
    score: number;
  }
  setValues: React.Dispatch<React.SetStateAction<{
    dificulty: number;
    choosed: boolean;
    score: number;
}>>
}

function Questions({ values, setValues }: QuestionsParams) {
  const question = Math.floor(Math.random() * 10)

  const selectOption = (select:'one' |'two' | 'three' | 'four') => {
    if(questions[values.dificulty - 1].questions[question][select] === questions[values.dificulty - 1].questions[question].true) {
       setValues({...values, choosed: false, score: values.score + values.dificulty })
       toast.success('Resposta certa')
    } else {
      toast.error('Resposta errada')
      setValues({...values, choosed: false })
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
