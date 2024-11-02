import RetroLoading from "@/components/shared/loading/retro-loading";

export default function Loading() {
  return (
    <>
      <section className="opacity-0 fixed top-0 left-0 flex flex-col items-center justify-center gap-10 py-10 px-6 w-full h-full animate-fade overflow-hidden z-50">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col gap-4 items-center justify-center">
          <div className="bg-transparent w-[100px] h-[100px] flex items-center justify-center">
            <RetroLoading />
          </div>

          <h1 className="font-bold text-xl">Carregando ...</h1>
        </div>
      </section>
      <div className="fixed top-0 left-0 z-40 bg-black w-full h-full opacity-60" />
    </>
  );
}
