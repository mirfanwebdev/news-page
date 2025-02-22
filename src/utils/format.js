export function formatDate(date) {
  const optionsDate = {
    weekday: "short",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const optionsTime = {
    hour: "numeric",
    minute: "numeric",
  };
  const resultDate = new Date(date).toLocaleDateString("id-ID", optionsDate);
  const resultTime = new Date(date).toLocaleTimeString("id-ID", optionsTime);

  return `${resultDate} ${resultTime}`;
}
