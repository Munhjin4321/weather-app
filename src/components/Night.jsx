import { HeartIcon, HomeIcon, MapPinIcon, UserSearchIcon } from "lucide-react";
export const Night = ({temp}) => {
  return (
    <div className="h-fit w-fit bg-black px-20 rounded-4xl shadow-xl">
      <p className="text-gray-500 pt-10">{temp?.location?.localtime}</p>
      <h1 className="text-5xl font-bold text-white pt-3">{temp?.location?.name}</h1>
      <img className="h-80 w-80 mt-10" src="moon.png" />
      <h2 className="text-9xl text-white pt-24 ">{temp?.forecast?.forecastday?.[0].day?.mintemp_c}</h2>
      <p className="text-[#777CCE] text-2xl font-bold p-9">{temp?.forecast?.forecastday?.[0].day?.condition?.text}</p>
      <div className="flex justify-between text-gray-600 pb-10">
        <HomeIcon />
        <MapPinIcon />
        <HeartIcon />
        <UserSearchIcon />
      </div>
    </div>
  );
};
