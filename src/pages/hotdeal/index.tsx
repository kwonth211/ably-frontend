import { GoodsListLayout, GoodsCard, HotdealTimer } from '@/components';

const HOTDEAL_LIST = [
  {
    id: 29,
    name: '[롬앤] 한올 픽스 마스카라 2type',
    image:
      'https://d20s70j9gw443i.cloudfront.net/t_GOODS_THUMB_WEBP/https://imgb.a-bly.com/data/goods/20210315_1615776154023797s.jpg',
    price: 5450,
  },
  {
    id: 30,
    name: '[한정특가 봄 신상품 소개합니다] 봄 크롭 가디건 빅 사이즈',
    image:
      'https://d20s70j9gw443i.cloudfront.net/t_GOODS_THUMB_WEBP/https://imgb.a-bly.com/data/goods/20210311_1615440353020983s.jpg',
    price: 26000,
  },
];

function Hotdeal() {
  return (
    <>
      <HotdealTimer />
      <GoodsListLayout title="핫딜 상품">
        {HOTDEAL_LIST.map(({ id, ...item }) => (
          <GoodsCard key={id} {...item} />
        ))}
      </GoodsListLayout>
    </>
  );
}

export default Hotdeal;
