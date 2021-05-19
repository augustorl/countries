import Navbar from "../components/Navbar"
import SearchInput from "../components/SearchInput";
import CustomSelect from "../components/CustomSelect";
import { FilterProvider }from '../context/FilterCountryContext';

import { Container } from'../styles/Home';
import CountryList from "../components/Country/CountryList";
const Home: React.FC = () => {
    return (
    <FilterProvider>
             <Container>
        <Navbar/>
        <div className="search-container">
            <SearchInput/>
            <CustomSelect />
        </div>
        <div className="country-list">
            <CountryList/>
        </div>
      </Container>
    </FilterProvider>
    );
  };
  
  export default Home;
  