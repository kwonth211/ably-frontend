import { useState } from 'react';
import { GoodsCard, GoodsListLayout } from '@/components';
import styles from './index.module.css';

const LIKE_LIST: any[] = [];

function Like() {
  const [isEditMode, setIsEditMode] = useState(false);

  const toggleIsEditMode = () => {
    setIsEditMode(state => !state);
  };

  return (
    <>
      {LIKE_LIST.length ? (
        <>
          <header className={styles.header}>
            <h1 className={styles.title}>찜한 상품</h1>
            <button className={styles.editButton} onClick={toggleIsEditMode}>
              {isEditMode ? '취소' : '편집'}
            </button>
          </header>

          <GoodsListLayout>
            {LIKE_LIST.map((item, index) => (
              <GoodsCard key={index} {...item} />
            ))}
          </GoodsListLayout>

          {isEditMode && (
            <button className={styles.deleteButton}>상품 삭제</button>
          )}
        </>
      ) : (
        <div className={styles.emptyLike}>찜한 상품이 없습니다.</div>
      )}
    </>
  );
}

export default Like;
