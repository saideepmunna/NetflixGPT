import Footer from "./Footer";
import GPTSearch from "./GPTSearch";
import GptMoviesContainer from "./GptMoviesContainer";

const NetflixGPT = () => {
  return (
    <div>
        <div className="bg-black">
        <GPTSearch/>
        <GptMoviesContainer/>
        <Footer/>
        </div>
        
    </div>
  )
}

export default NetflixGPT;