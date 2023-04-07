import { GoodsListLayout, GoodsCard } from '@/components';

const TODAY_LIST = [
  {
    id: 19,
    name: '🍒 드로잉 폰케이스 / 레터링케이스 / 포토케이스 주문제작 생일선물 추천 🍒',
    image:
      'https://d20s70j9gw443i.cloudfront.net/t_GOODS_THUMB_WEBP/https://imgb.a-bly.com/data/goods/20210309_1615299162931500s.jpg',
    price: 45000,
  },
  {
    id: 20,
    name: '(백화점퀄 핏예쁜) 메이비 투버튼 소매트임 숏 자켓',
    image:
      'https://d20s70j9gw443i.cloudfront.net/t_GOODS_THUMB_WEBP/https://imgb.a-bly.com/data/goods/20210221_1613914540571180s.gif',
    price: 36400,
  },
];

function Today() {
  return (
    <GoodsListLayout title="에이블리님을 위한 추천 상품">
      {TODAY_LIST.map(({ id, ...item }) => (
        <GoodsCard key={id} {...item} />
      ))}
    </GoodsListLayout>
  );
}

export default Today;
