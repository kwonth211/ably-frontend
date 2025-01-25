import { Goods } from '@/interface';
import { create } from 'zustand';

interface LikeStore {
  likedItems: Goods[];
  toggleLike: (item: Goods) => void;
  isLiked: (id: number) => boolean;
  removeLikedItems: (ids: number[]) => void;
}

const useLikeStore = create<LikeStore>((set, get) => ({
  likedItems: JSON.parse(localStorage.getItem('likedItems') || '[]'),
  toggleLike: item => {
    const isLiked = get().isLiked(item.id);
    const updatedItems = isLiked
      ? get().likedItems.filter(likedItem => likedItem.id !== item.id)
      : [...get().likedItems, item];

    localStorage.setItem('likedItems', JSON.stringify(updatedItems));
    set({ likedItems: updatedItems });
  },
  isLiked: id => get().likedItems.some(likedItem => likedItem.id === id),
  removeLikedItems: ids => {
    const updatedItems = get().likedItems.filter(
      item => !ids.includes(item.id),
    );
    localStorage.setItem('likedItems', JSON.stringify(updatedItems));
    set({ likedItems: updatedItems });
  },
}));

export default useLikeStore;
