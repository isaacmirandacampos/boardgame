import { useEffect, useState } from 'react'
import Questions from './Questions'
import Score from './Score'
import Choose from './Choose'
import styles from './Components.module.css'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

function Gameboard() {
  const [values, setValues] = useState({ dificulty: 0, choosed: false, score: 20 })

  useEffect(()=>{
    if(values.score >= 25) {
      alert("Você ganhou, parabéns");
      setValues({ dificulty: 0, choosed: false, score: 0 })
    }
  },[values.score])

  return (
    <div className={styles.container}>
      <ToastContainer />
      <div className={styles.gameboard}>
        <Score values={values} />
        {values.choosed ? <Questions values={values} setValues={setValues} /> : <Choose setValues={setValues} values={values} /> }
      </div>
    </div>
  );
}

export default Gameboard;
