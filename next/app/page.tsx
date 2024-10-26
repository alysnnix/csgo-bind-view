import SingleCard from "@/components/layout/cards";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-10 py-10 px-6">
      <div>
        <h1 className="flex flex-col text-xl leading-4">
          <span className="text-5xl font-bold">Counter Strike</span>My binds
          view
        </h1>
      </div>

      <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6">
        <SingleCard
          code="bind f1 say_team gg"
          description="Say gg in team chat"
          title="GG"
        />
      </div>
    </section>
  );
}
