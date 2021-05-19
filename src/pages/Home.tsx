import Navbar from "../components/Navbar"
import SearchInput from "../components/SearchInput";
import CustomSelect from "../components/CustomSelect";

import { Container } from'../styles/Home';
import CountryList from "../components/Country/CountryList";
const Home: React.FC = () => {
    return (
       <Container>
        <Navbar/>
        <div className="search-container">
            <SearchInput/>
            <CustomSelect />
        </div>
        <div>
            <CountryList/>
        </div>

       </Container>
    );
  };
  
  export default Home;
  