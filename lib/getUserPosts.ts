export async function getUserPosts(id: string) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${id}`,
    { next: { revalidate: 50 } }
  );
  // по умолчаю fetch кэшируется force-cache, зпрос кэшируется и если ничего не меняется не делаеться запрос а данные берутся из кэша

  // если данные динамичесие(часто меняются) - "no store", ничкогда не кэгируй эти данные
  // время от времени проверять если ли обновления(ISR) next: {revalidate: 60}
  // SSG
  // if (!res.ok) throw new Error("Failed to fetch user");
  if (!res.ok) return undefined; // когда мы обрабатываем ошибку через notFound
  return res.json();
}
