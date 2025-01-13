import { useRecoilValue } from "recoil";
import { movieAtom } from "../store/atom/movieAtom";

const MovieList = () => {
  const favoriteMovie = useRecoilValue(movieAtom);

  return (
    <>
      <div>
        <h1>Favorite Movie List</h1>
        <ul>
          {favoriteMovie.map((movie, index) => (
            <li key={index}>{movie}</li>
          ))}
        </ul>
      </div>
    </>
  );
};
export default MovieList;
