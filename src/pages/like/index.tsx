import { useState } from 'react';
import { Checkbox, GoodsCard, GoodsListLayout } from '@/components';
import styles from './index.module.css';
import useLikeStore from '@/zustand';

function Like() {
  const [isEditMode, setIsEditMode] = useState(false);
  const { likedItems, removeLikedItems } = useLikeStore();
  const [selectedItems, setSelectedItems] = useState<number[]>([]);

  const toggleIsEditMode = () => {
    setIsEditMode(state => !state);
  };
  const handleSelect = (id: number) => {
    setSelectedItems(prev =>
      prev.includes(id) ? prev.filter(itemId => itemId !== id) : [...prev, id],
    );
  };

  const handleDelete = () => {
    removeLikedItems(selectedItems);
    setSelectedItems([]);
    setIsEditMode(false);
  };

  return (
    <>
      {likedItems.length ? (
        <>
          <header className={styles.header}>
            <h1 className={styles.title}>찜한 상품</h1>
            <button className={styles.editButton} onClick={toggleIsEditMode}>
              {isEditMode ? '취소' : '편집'}
            </button>
          </header>

          <GoodsListLayout>
            {likedItems.map((item, index) => (
              <GoodsCard
                key={index}
                {...item}
                floatingButton={
                  isEditMode && (
                    <Checkbox
                      value={selectedItems.includes(item.id)}
                      onChange={() => handleSelect(item.id)}
                    />
                  )
                }
              />
            ))}
          </GoodsListLayout>

          {isEditMode && selectedItems.length !== 0 && (
            <button className={styles.deleteButton} onClick={handleDelete}>
              상품 삭제
            </button>
          )}
        </>
      ) : (
        <div className={styles.emptyLike}>찜한 상품이 없습니다.</div>
      )}
    </>
  );
}

export default Like;
