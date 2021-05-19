import { createContext, useState } from 'react';

type FilterCountryContextProps = {
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  region: string;
  setRegion: React.Dispatch<React.SetStateAction<string>>;
};

const FilterCountryContext = createContext<Partial<FilterCountryContextProps>>({});

type FilterCountryProviderProps = {
  children: React.ReactNode;
}

export const FilterProvider: React.FC<FilterCountryProviderProps> = ({ children }) => {
  const [name, setName] = useState('');
  const [region, setRegion] = useState('');

  const contextValue = {
    name,
    region,
    setRegion,
    setName
  };

  return (
    <FilterCountryContext.Provider value={contextValue}>
      {children}
    </FilterCountryContext.Provider>
  );
};

export default FilterCountryContext;