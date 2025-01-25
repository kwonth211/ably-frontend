import useLikeStore from '@/zustand';
import LikeButton from '../LikeButton';
import styles from './index.module.css';
import { Goods } from '@/interface';

export interface GoodsCardProps extends Goods {
  floatingButton?: React.ReactNode;
}

function GoodsCard({ image, price, name, floatingButton }: GoodsCardProps) {
  const formattedPrice = price.toLocaleString('ko-KR');

  return (
    <div className={styles.wrapper}>
      <img className={styles.image} src={image} alt="상품 이미지" />
      <p className={styles.priceText}>{formattedPrice}</p>
      <p className={styles.priceTitle}>{name}</p>
      {floatingButton && (
        <div className={styles.fixedLikeButton}>{floatingButton}</div>
      )}
    </div>
  );
}

export default GoodsCard;
