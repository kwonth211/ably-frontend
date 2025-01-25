import useHotdealList from '@/hooks/useHotdealList';
import useLikeStore from '@/zustand';
import GoodsCard from './GoodsCard';
import GoodsListLayout from './GoodsListLayout';
import LikeButton from './LikeButton';

function HotdealContent() {
  const { hotdealList } = useHotdealList();
  const { isLiked, toggleLike } = useLikeStore();

  return (
    <GoodsListLayout title="핫딜 상품">
      {hotdealList.map(({ id, ...item }) => {
        const liked = isLiked(id);

        const { name, image, price } = item;
        return (
          <GoodsCard
            key={id}
            id={id}
            {...item}
            floatingButton={
              <LikeButton
                value={liked}
                onChange={() => toggleLike({ id, name, image, price })}
              />
            }
          />
        );
      })}
    </GoodsListLayout>
  );
}

export default HotdealContent;
