import Navbar from "../components/Navbar"
import SearchInput from "../components/SearchInput";

const Home: React.FC = () => {
    return (
       <>
        <Navbar/>
        <div>
            <SearchInput/>
            <select  defaultValue={"default"} placeholder="">
                <option value="default" disabled hidden>Filter by region</option>
                <option value="africa">Africa</option>
                <option value="america">America</option>
                <option value="asia">Asia</option>
                <option value="europe">Europe</option>
                <option value="oceania">Oceania</option>
            </select>
        </div>
       </>
    );
  };
  
  export default Home;
  