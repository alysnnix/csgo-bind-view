import SingleCard from "@/components/layout/cards";
import ParseService from "@/lib/parse/setup";

async function fetchData<T>(fetchFunction: () => Promise<T>) {
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

const fetchPublicBinds = async () => {
  const PublicBinds = ParseService.Object.extend("PublicBinds");
  const query = new ParseService.Query(PublicBinds);

  return await query.find(); // Retorna o resultado da consulta
};

export default async function Home() {
  const { data, error } = await fetchData(fetchPublicBinds);

  return (
    <section className="flex flex-col items-center justify-center gap-10 py-10 px-6 w-full">
      <div>
        <h1 className="flex flex-col text-xl leading-4">
          <span className="text-5xl font-bold">Counter Strike</span>My binds
          view
        </h1>
      </div>

      {error.status && (
        <div className="flex items-center justify-center gap-4">
          <span className="text-red-500">
            An error occurred: {error.message}
          </span>
        </div>
      )}

      <div className="w-full h-full flex items-center justify-center">
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-10 w-full sm:max-w-[70%] lg:max-w-[90%] xl:max-w-[80%] mx-auto">
          {data?.map((bind, index) => (
            <SingleCard
              key={bind.id}
              code={bind.get("code")}
              description={bind.get("description")}
              index={index}
              name={bind.get("name")}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
