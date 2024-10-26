export default async function fetchData<T>(fetchFunction: () => Promise<T>) {
  let data: T | null = null;
  let loading = true;
  let error = {
    status: false,
    message: "",
  };

  try {
    loading = true;
    data = await fetchFunction();
  } catch (err) {
    error.status = true;
    error.message = err instanceof Error ? err.message : "An error occurred";
  } finally {
    loading = false;
  }

  return { data, loading, error };
}
