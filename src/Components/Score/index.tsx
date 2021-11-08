import styles from './Score.module.css'

interface ScoreParams {
  values: {
    dificulty: number;
    choosed: boolean;
    score: number;
  }
}

function Score({ values }: ScoreParams) {
  return (
    <div className={styles.container}>
      <div className={styles.score}>
        <span>{values.score}/25</span>
        <span>Dificuldade selecionada: {values.dificulty !== 0 ? values.dificulty : 'N/A'}</span>
      </div>
    </div>
  );
}

export default Score;
