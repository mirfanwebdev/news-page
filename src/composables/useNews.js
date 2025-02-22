import { ref, onMounted, watch } from "vue";
import { getHeadlines, getSearch } from "../utils/api";

export function useNews(initialQuery = "") {
  const news = ref([]);
  const searchQuery = ref(initialQuery);
  const isLoading = ref(false);

  onMounted(async () => {
    isLoading.value = true;
    try {
      const { articles } = await getHeadlines({ endpoint: "/top-headlines" });
      news.value = articles;
    } catch (error) {
      console.error(error);
    } finally {
      isLoading.value = false;
    }
  });

  async function searchNews() {
    isLoading.value = true;
    try {
      const { articles } = await getSearch(searchQuery.value);
      news.value = articles;
    } catch (error) {
      console.error(error);
    } finally {
      isLoading.value = false;
    }
  }

  watch(searchQuery, (newQuery) => {
    clearTimeout(timeout);

    const timeout = setTimeout(() => {
      if (newQuery) {
        searchNews();
      }
    }, 500);
  });

  return {
    news,
    searchQuery,
    isLoading,
  };
}
