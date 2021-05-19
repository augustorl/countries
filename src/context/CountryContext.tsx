import axios from 'axios';
import { createContext, useEffect, useState } from 'react';

type ContextProps = {
  countries: any;
  setCountries: React.Dispatch<React.SetStateAction<any>>;
  error: string;
};

const CountryContext = createContext<Partial<ContextProps>>({});

type CountryProviderProps = {
  children: React.ReactNode;
}

export const CountryProvider: React.FC<CountryProviderProps> = ({
  children,
}) => {
  const [countries, setCountries] = useState([]);

  const [error, setError] = useState('');

  const getAllCountries = async () => {
    try {
      const { data } = await axios.get('https://restcountries.eu/rest/v2/all');
      setCountries(data);
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    getAllCountries();
  }, []);

  const contextValue = {
    countries,
    setCountries,
    error,
  };

  return (
    <CountryContext.Provider value={contextValue}>
      {children}
    </CountryContext.Provider>
  );
};

export default CountryContext;
