import GunShooting from "@/components/shared/loading/gun-shooting";
import CircleCountDown from "@/components/shared/timmer";

export default function Page() {
  return (
    <div className="w-full h-[calc(100vh_-_4rem)] relative">
      <CircleCountDown
        className="absolute top-10 right-10 w-[100px]"
        size={100}
        stroke="#000"
        strokeWidth={4}
        time={60}
      />

      <GunShooting />
    </div>
  );
}
