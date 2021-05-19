import { useContext } from 'react';
import CountryContext from '../../../context/CountryContext';
import { CardList } from './styles';

const CountryList: React.FC = () => {
  const { countries } = useContext(CountryContext);

  return (
    <CardList>
        {countries && (
            <h1>ola</h1>
        )}
    </CardList>
  );
};

export default CountryList;
