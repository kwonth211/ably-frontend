import styles from './index.module.css';

export interface GoodsCardProps {
  image: string;
  price: number;
  name: string;
}

function GoodsCard({ image, price, name }: GoodsCardProps) {
  const formattedPrice = price.toLocaleString('ko-KR');

  return (
    <div className={styles.wrapper}>
      <img className={styles.image} src={image} alt="상품 이미지" />
      <p className={styles.priceText}>{formattedPrice}</p>
      <p className={styles.priceTitle}>{name}</p>
    </div>
  );
}

export default GoodsCard;
