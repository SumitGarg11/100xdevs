import { RecoilRoot } from "recoil";
import AddMovie from "./components/AddMovie";
import MovieList from "./components/MovieList";

function App() {
  return (
    <RecoilRoot>
      <div>
        <h1>Movie Favorite List App</h1>
        <AddMovie />
        <MovieList />
      </div>
    </RecoilRoot>
  );
}

export default App;
