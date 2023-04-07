import styles from './index.module.css';

function HotdealTimer() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>🔥 핫딜이 HH시간 mm분 ss초 남았어요</div>
      <div className={styles.subTitle}>핫딜 시간: HH시 ~ HH시</div>
    </div>
  );
}

export default HotdealTimer;
