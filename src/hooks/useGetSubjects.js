import { useQuery } from "@tanstack/react-query";
import { getBooks } from "../apis/baseApi";

export const useGetBooks = () => {
  return useQuery({
    queryKey: ["books"],
    queryFn: () => {
      return getBooks();
    },
  });
};
