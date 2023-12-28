import { useRef } from "react";
import openai from "../utils/openai";
import { MOVIE_FETCH_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addGptMovies } from "../utils/gptSearchSlice";

const GPTSearch = () => {
  const gptInput = useRef(null);
  const dispatch = useDispatch()

  const tmdbFetchResults = async (movie)=>{
    const data = await fetch("https://api.themoviedb.org/3/search/movie?query="+movie+"&include_adult=false&language=en-US&page=1", MOVIE_FETCH_OPTIONS);
    const json = await data.json();
    return json.results;

  }
  const handleGPTSearch = async() => {
    //  console.log(gptInput.current.value);
     const gptQuery = "Act as a movie recommendation system and suggest some movies for the query: "+gptInput.current.value+". Only givie me 5 movies, comma seperated.There should not be any other string/number other than movie names. For example: Raazi, Highway, Zero, Piku, Don"
     //Make an API call to open AI and get the movie results
     const gptMovieObject = await openai.chat.completions.create({
      messages: [{ role: 'user', content: gptQuery }],
      model: 'gpt-3.5-turbo',
     })
    //  console.log(gptMovieObject?.choices);

     //DO error handling 
     if(!gptMovieObject.choices){
      //show error on web page
     }

     const gptMovieResults = gptMovieObject.choices[0]?.message?.content.split(", ");
     console.log(gptMovieResults)
     //Fetch movies from the TMDM API with the help of .map() on getMovieResults array and call tmdbFetchResults function

     const promiseArray = gptMovieResults.map(movie=>tmdbFetchResults(movie));

     //Returns the promise array as .map() function doesn't wait for all the promises to resolve. Instead it returns an array of 5 promises
     //[promise1,promise2,promise3,promise4,promise5]
     // Hence we use Promise.all() function

     const resolvedTmdbResults = await Promise.all(promiseArray);

     console.log(resolvedTmdbResults);
     dispatch(addGptMovies({gptApiResults: gptMovieResults, tmdbFetchApiResults: resolvedTmdbResults}))
     
  };
  return (
    <div>
      <div className="bg-black w-full h-screen">
        <div className="pl-10 pt-20 pb-7">
          <h1 className="text-white p-2 mb-4 font-semibold text-2xl">Confused about what to watch? Try our new AI search</h1>
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <input
              ref={gptInput}
              type="text"
              placeholder="Suggest me some funny bollywood movies.."
              className="w-4/12 p-2 mx-2 rounded-sm"
            />
            <button
              className="text-white bg-red-600 px-3 py-2 rounded-sm"
              onClick={handleGPTSearch}
            >
              GPT Search
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default GPTSearch;
