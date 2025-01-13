import { useRecoilState } from "recoil";
import { inputMovieAtom, movieAtom } from "../store/atom/movieAtom";

const AddMovie = () => {
  const [inputValue, setInputValue] = useRecoilState(inputMovieAtom);
  const [favoriteMovie, setFavoriteMovie] = useRecoilState(movieAtom);

  const addMovie = () => {
    if (inputValue.trim()) {
      setFavoriteMovie((previewMovie) => [...previewMovie, inputValue]);
      setInputValue("");
    }
  };
  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Enter Your Favorite Movie "
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={addMovie}>Add Favorite Movie</button>
      </div>
    </>
  );
};
export default AddMovie;
