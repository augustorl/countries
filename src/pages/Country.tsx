import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import CountryContext from '../context/CountryContext';



const Country: React.FC = () => {
  const { id }: { id: string } = useParams();
  const { countries } = useContext(CountryContext);

  const data = countries?.find((item: any) => item.alpha3Code === id);

  return (
    <>
      <CountryDetails data={data} />
    </>
  );
};

export default Country;
