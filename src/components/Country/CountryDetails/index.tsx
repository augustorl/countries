import CountryContext from "../../../context/CountryContext";
import { useContext } from 'react';

type CountryDetailsProps = {
    data: {
      name: string;
      nativeName: string;
      population: number;
      region: string;
      subregion: string;
      capital: string;
      topLevelDomain: string[];
      currencies: { name: string }[];
      languages: { name: string }[];
      borders: string[];
      flag: string;
    };
  };
export default function CountryDetails({ data }: CountryDetailsProps) {
  const { countries } = useContext(CountryContext);
  
  return (
      <>
        <h1></h1>
      </>
  );
};

