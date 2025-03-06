import { ref, onMounted } from "vue";
import { getHeadlines, getSearch } from "../utils/api";

export function useNews() {
  const news = ref([]);
  const searchQuery = ref("");
  const isLoading = ref(false);
  const isSearch = ref(false);

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

  async function searchNews() {
    isLoading.value = true;
    try {
      const { articles } = await getSearch(searchQuery.value);
      news.value = articles;
    } catch (error) {
      console.error(error);
    } finally {
      isLoading.value = false;
      isSearch.value = true;
    }
  }

  return {
    news,
    searchQuery,
    isLoading,
    isSearch,
    searchNews,
  };
}
