import { Day } from "@/components/Day";
import { Night } from "@/components/Night";
import { useState } from "react";

export default function Home() {
  const [weather, setWeather] = useState({});
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=35.652832&lon=139.839478&appid=${process.env.NEXT_PUBLIC_WHEATHER_API_KEY}&units=metric`;
  const cityUrl = `https://api.api-ninjas.com/v1/city?name=Tokyo`;
  const getCity = async () => {
    try {
      const response = await fetch(cityUrl, {
        headers: {
          "X-Api-Key": process.env.NEXT_PUBLIC_CITY_API_KEY,
        },
      });
      const data = await response.json();
      return data;
      // console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const getWeather = async () => {
    try {
      const cityLocation = await getCity();

      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${cityLocation[0].latitude}&lon=${cityLocation[0].longitude}&units=metricc&appid=${process.env.NEXT_PUBLIC_WHEATHER_API_KEY}`
      );
      const data = await response.json();
      // console.log(data);

      setWeather(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex justify-center pt-20 gap-10 ">
      <button onClick={getWeather}>get</button>
      <p>temp:{weather?.main?.temp}</p>
      <Day temp={weather?.main?.temp} />
      <Night />
    </div>
  );
}
