import styles from './Choose.module.css'

interface ChooseParams {
  setValues: React.Dispatch<React.SetStateAction<{
    dificulty: number;
    score: number;
    choosed: boolean;
    attempt: number;
  }>>;
  values: {
    dificulty: number;
    score: number;
    choosed: boolean;
    attempt: number;
  }
}

function Choose({ setValues, values }: ChooseParams) {
  return (
    <div className={styles.choose}>
      <span>Nível de dificuldade</span>
      <div className={styles.buttonChooses}>
        <button onClick={()=> setValues({ ...values, choosed: true, dificulty: 1 })}>1</button>
        <button onClick={()=> setValues({ ...values, choosed: true, dificulty: 2 })}>2</button>
        <button onClick={()=> setValues({ ...values, choosed: true, dificulty: 3 })}>3</button>
      </div>
    </div>
  );
}

export default Choose;
