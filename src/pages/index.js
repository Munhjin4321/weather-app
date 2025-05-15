import { Day } from "@/components/Day";
import { Night } from "@/components/Night";
import { useEffect, useState } from "react";

export default function Home() {
  const [weather, setWeather] = useState({});
  const [searchCity, setSearchCity] = useState("Tokyo");

  console.log(weather);

  const getWeather = async () => {
    try {
      const response = await fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=${process.env.NEXT_PUBLIC_WHEATHER_API_KEY}&q=${searchCity}`
      );
      const data = await response.json();
      // console.log(data);

      setWeather(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getWeather();
  }, []);

  return (
    <div>
      <input
        className=" w-2xl py-5 px-5 me-3 mb-2 text-sm font-medium text-gray-900 focus:outlin bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-black focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
        type="search"
        placeholder="search"
        value={searchCity}
        onChange={(event) => {
          const value = event.target.value;
          setSearchCity(value);
        }}
      ></input>
      <button onClick={getWeather}>search</button>
      <div className="flex justify-center pt-20 gap-10 ">
        {/* <p>{weather?.main?.temp}</p> */}
        <Day temp={weather} />
        <Night temp={weather} />
      </div>
    </div>
  );
}
