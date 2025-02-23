export const getSavedNews = () => {
  const savedNews = localStorage.getItem("savedNews");
  return savedNews ? JSON.parse(savedNews) : [];
};

export const saveNews = (news) => {
  const data = getSavedNews();
  data.push({
    ...news,
  });
  localStorage.setItem("savedNews", JSON.stringify(data));
};
