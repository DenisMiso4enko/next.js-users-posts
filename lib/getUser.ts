export async function getUser(id: string) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  // if (!res.ok) throw new Error("Failed to fetch user");
  if (!res.ok) return undefined; // когда мы обрабатываем ошибку через notFound

  return res.json();
}
