import styles from './index.module.css';

interface HotdealTimerProps {
  title: string;
  subTitle: string;
}

function HotdealTimer({ title, subTitle }: HotdealTimerProps) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>{title}</div>
      <div className={styles.subTitle}>{subTitle}</div>
    </div>
  );
}

export default HotdealTimer;
