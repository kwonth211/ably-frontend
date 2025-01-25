import { GoodsListLayout, GoodsCard, LikeButton } from '@/components';
import useTodayList from '@/hooks/useTodayList';
import useLikeStore from '@/zustand';

function Today() {
  const { todayList, isLoading, isError } = useTodayList();
  const { isLiked, toggleLike } = useLikeStore();

  if (isLoading) return <div>오늘의 상품을 조회중입니다...</div>;
  if (isError) return <div>오늘의 상품 조회중 에러가 발생했습니다.</div>;

  return (
    <GoodsListLayout title="에이블리님을 위한 추천 상품">
      {todayList.map(({ id, ...item }) => {
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

export default Today;
