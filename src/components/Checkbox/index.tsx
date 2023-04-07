import inactiveImage from '@/assets/icon_checkbox_inactive.svg';
import activeImage from '@/assets/icon_checkbox_active.svg';
import styles from './index.module.css';

interface CheckboxProps {
  value: boolean;
  onChange: (value: boolean) => void;
}

function Checkbox({ value, onChange }: CheckboxProps) {
  const toggleValue = () => {
    onChange(!value);
  };

  return (
    <div className={styles.wrapper} onClick={toggleValue}>
      <img
        className={styles.image}
        style={{ ...(value && { backgroundColor: 'white' }) }}
        src={value ? activeImage : inactiveImage}
        alt="체크박스 아이콘"
      />
    </div>
  );
}

export default Checkbox;
