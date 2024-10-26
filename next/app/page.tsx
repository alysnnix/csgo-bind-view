import SingleCard from "@/components/layout/cards";

const user = "4lysson-a";
const repo = "csgo-bind-view";
const filePath = "binds.txt";
const url = `https://api.github.com/repos/${user}/${repo}/contents/${filePath}?ref=base`;

export default async function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-10 py-10 px-6 w-full">
      <div>
        <h1 className="flex flex-col text-xl leading-4">
          <span className="text-5xl font-bold">Counter Strike</span>My binds
          view
        </h1>
      </div>

      <div className="w-full h-full flex items-center justify-center">
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6 w-full sm:max-w-[70%] lg:max-w-[90%] xl:max-w-[80%] mx-auto">
          {Array.from({ length: 6 }).map((_, index) => (
            <SingleCard
              key={index}
              code="bind f1 say_team gg"
              description="Say gg in team chat"
              index={index}
              title="GG"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
