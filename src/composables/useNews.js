import { ref, onMounted, watch, onUpdated } from "vue";
import { getHeadlines, getSearch } from "../utils/api";

export function useNews(initialQuery = "") {
  const news = ref([]);
  const searchQuery = ref(initialQuery);
  const isLoading = ref(false);

  onMounted(async () => {
    isLoading.value = true;
    try {
      const { articles } = await getHeadlines();
      news.value = articles;
    } catch (error) {
      console.error(error);
    } finally {
      isLoading.value = false;
    }
  });

  // onUpdated(() => {
  //   searchNews();
  // });

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

  return {
    news,
    searchQuery,
    isLoading,
    searchNews,
  };
}
