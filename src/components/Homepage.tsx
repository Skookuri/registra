import Title from "./Title";
import SearchBar from "./SearchBar";

export default function Homepage() {


  return (
    <>
      <div className="bg-blue-950 min-h-screen flex flex-col justify-center">
        <div className="flex flex-col place-content-evenly items-center">
        <Title titleText="registra" />
        <SearchBar />
        </div>
      </div>
    </>
  );
}
