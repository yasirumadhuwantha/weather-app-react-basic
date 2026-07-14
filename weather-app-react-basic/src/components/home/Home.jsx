import { AVAILABLE_CITY } from "../data/weather.js";

const Home = () => {
  return (
    <div className="flex flex-col items-center px-4 py-8">
      <h1 className="text-2xl text-white font-semibold">Sri Lankan City Weather Report</h1>

      <div className="flex flex-wrap justify-center gap-2 max-w-md">
        {AVAILABLE_CITY.map((city) => (
          <div key={city} className="px-3 py-1 bg-white/20 rounded-full text-white">
            {city}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;