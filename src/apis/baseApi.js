export const getBooks = async () => {
  try {
    const response = await fetch("https://openlibrary.org/subjects/love.json");
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("getBooks Errors", error);
  }
};

export const getSearchBook = async (keyword) => {
  console.log("🚀 ~ getSearchBook ~ keyword:", keyword);
  try {
    const response = await fetch(
      `https://openlibrary.org/search.json?q=${keyword}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("getSearch Errors", error);
  }
};
