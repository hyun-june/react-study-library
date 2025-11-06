import { create } from "zustand";

const userStore = create((set) => ({
  id: "",
  password: "",
  isLogin: false,
  likeBooks: [],
  login: (id, password) => set({ id, password, isLogin: true }),
  logout: () => set({ id: "", password: "", isLogin: false }),
  updateLikeBook: (newBook) =>
    set((state) => ({ likeBooks: [...state.likeBooks, newBook] })),
  deleteLikeBook: (book) =>
    set((state) => ({
      likeBooks: state.likeBooks.filter((b) => b.key !== book.key),
    })),
}));

export default userStore;
