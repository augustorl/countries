import { useContext } from 'react';
import CountryContext from '../../../context/CountryContext';
import FilterCountryContext from '../../../context/FilterCountryContext';
import { CardList } from './styles';
import CountryCard  from '../CountryCard';

const CountryList: React.FC = () => {
  const { countries } = useContext(CountryContext);
  const { name, region } = useContext(FilterCountryContext);

  const filterByName = (countries: any[]) => {
    if (name) {
      return countries.filter((country: { name: string; }) =>
        country.name.toLowerCase().includes(name.toLowerCase().trim())
      );
    } else {
      return countries;
    }
  };
  const filterByRegion = (countries: any[]) => {
    if (region) {
      return countries.filter((country: { region: string; }) => country.region === region);
    } else return countries;
  };

  return (
    <CardList>
      {filterByName(filterByRegion(countries)).map((item: any) => (
        <CountryCard key={item.alpha3Code} data={item} />
      ))}
    </CardList>
  );
};

export default CountryList;
