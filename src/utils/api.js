const baseUrl = import.meta.env.VITE_BASE_API_URL;
const apiKey = import.meta.env.VITE_API_KEY;

const fetchNews = async ({
  endpoint,
  params = {
    country: "us",
    pageSize: 10,
  },
}) => {
  // api url endpoint
  const url = new URL(`${baseUrl}${endpoint}`);

  Object.entries(params).forEach(([key, value]) => {
    url.searchParams.append(key, value);
  });

  // option
  const options = {
    method: "GET",
    headers: {
      "X-Api-Key": apiKey,
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
};

export const getHeadlines = () => {
  return fetchNews({ endpoint: "/top-headlines" });
};
