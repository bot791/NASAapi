import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [date, setDate] = useState("");
  const apiKey = import.meta.env.VITE_APP_API_KEY;
  //console.log(apiKey);

  const api = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${date}`;

  const fetchData = async () => {
    const response = await fetch(
      `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`
    );
    const data = await response.json();
    setData(data);
    //console.log(data);
    setLoading(false);
  };
  useEffect(() => {
    fetchData();
  }, []);

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(`${api}`);
    const data = await response.json();
    setData(data);
    //console.log(data);
    setLoading(false);
  };

  //getting the api key from dotenv and storing it in a variable

  return (
    <>
      {loading ? (
        <img
          src="./spaceship.png"
          alt="Loading.........."
          className=" h-96 animate-ping mx-auto my-auto"
        />
      ) : (
        <div>
          <div className=" w-full bg-transparent flex mt-10 justify-around">
            <img
              src="./logo.png"
              alt="logo"
              className=" h-24 sm:h-40 animate-bounce hover:animate-ping"
            />
            <p className=" font-bold text-sm sm:text-5xl font-Alata text-white uppercase">
              NASA images & facts
            </p>
            <p className=" font-normal font-Jura text-xs text-white">
              <span>Powered by:</span>
              <br />
              <span className="text-xs sm:text-2xl font font-normal uppercase">
                nasa open api
              </span>
            </p>
          </div>
          <div className=" mx-auto flex flex-col sm:flex-row gap-2 px-5 py-5 bg-white bg-opacity-75">
            {data.hdurl ? (
              <img
                className=" mx-auto sm:w-1/2 w-5/6"
                src={data.hdurl}
                alt="Image"
              />
            ) : (
              <div className="hidden"></div>
            )}

            {data.hdurl ? (
              <p className="hidden"></p>
            ) : (
              <iframe
                className=" w-5/6 sm:w-1/2 mx-auto"
                src={data.url}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            )}
            <p className=" text-center sm:my-auto ">
              <span className=" text-neutral-800 font-extrabold text-xl sm:text-4xl py-5 font-Philosopher">
                This is {data.title}
              </span>
              <br />
              <br />
              <span className=" text-sm sm:text-xl font-Kosugi">
                {data.explanation}
              </span>
            </p>
          </div>
          <div className=" flex flex-row justify-center px-5 py-5 bg-teal-800 bg-opacity-75">
            <form onSubmit={handleSubmit} className="">
              <label className=" text-center font-extrabold text bg-yellow-500 text-2xl font-Jura text-neutral-800 uppercase my-5">
                FIND IMAGE BY DATE <br />
                <input
                  type="date"
                  id="dateInput"
                  value={date}
                  onChange={handleDateChange}
                  className=" bg-fuchsia-400 text-center"
                />
              </label>
              <br />
              <button
                className=" my-5 font-bold text-zinc-100 hover:-translate-y-2 hover:transition-all border-2 rounded-2xl border-purple-700 uppercase py-2 px-4 bg-purple-400 hover:bg-purple-500"
                type="submit"
              >
                see image
              </button>
            </form>
          </div>
          <p className=" font-bold text-xs text-neutral-800 font-Jura uppercase text-center ">
            <span className=" bg-yellow-400">Made by: Kajal Biswas</span>
          </p>
        </div>
      )}
    </>
  );
}

export default App;
