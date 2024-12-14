import Title from "./Title";
import SearchBar from "./SearchBar";

export default function Homepage() {


  return (
    <>
      <div className="bg-blue-950 min-h-screen flex flex-col items-center justify-center">
        <Title titleText="registra" />
        <SearchBar />
      </div>
    </>
  );
}
