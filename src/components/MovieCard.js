import { MOVIE_PHOTO_URL } from "../utils/constants";

const MovieCard = ({ imageId }) => {
  // console.log(imageId);
  if(!imageId) return null;
  return (
    <div className="w-36">
      <img className="rounded-md" src={MOVIE_PHOTO_URL + imageId} alt="MovieImage" />
    </div>
  );
};

export default MovieCard;
