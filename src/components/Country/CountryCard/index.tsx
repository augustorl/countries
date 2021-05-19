import { Container, Flag, Content, Heading, Details, Info } from './styles';
type CountryCardProps = {
  data: {
    name: string;
    population: number;
    region: string;
    capital: string;
    flag: string;
    alpha3Code: string;
  };
};

export default function CountryCard({ data }: CountryCardProps) {
  return (
    <Container to={`country/${data.alpha3Code}`}>
      <Flag flag={data.flag} />
      <Content>
        <Heading>{data.name}</Heading>
        <Details>
          <Info>
            <span>Population: </span>
            {data.population.toLocaleString('en-US')}
          </Info>
          <Info>
            <span>Region: </span>
            {data.region}
          </Info>
          <Info>
            <span>Capital: </span>
            {data.capital}
          </Info>
        </Details>
      </Content>
    </Container>
  );
};

