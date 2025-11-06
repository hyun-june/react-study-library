import { getSearchBook } from "../apis/baseApi";
import { useQuery } from "@tanstack/react-query";

export const useGetSearch = (keyword) => {
  return useQuery({
    queryKey: ["search", keyword],
    queryFn: () => {
      return getSearchBook(keyword);
    },
    enabled: !!keyword,
  });
};
