import { HeartIcon, HomeIcon, MapPinIcon, UserSearchIcon } from "lucide-react";
export const Day = ({temp}) => {
  return (
    <div className="border border-gray-300 shadow-xl h-fit w-fit px-20 rounded-4xl">
      <p className="text-gray-500 pt-10">May13, 2025</p>
      <h1 className="text-5xl font-bold pt-3">Ulaanbaatar</h1>
      <img className="h-80 w-80 mt-10" src="sun.png" />
      <h2 className="text-9xl pt-24 text-black">{temp}</h2>
      <p className="text-[#FF8E27] text-2xl font-bold p-9 ">Bright</p>
      <div className="flex justify-between pb-10">
        <HomeIcon />
        <MapPinIcon />
        <HeartIcon />
        <UserSearchIcon />
      </div>
    </div>
  );
};
