import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { useState } from 'react';
import { Container } from './styles';

export default function CustomSelect() {
  const [country, setCountry] = useState('');

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setCountry(event.target.value as string);
  };
    return (
        <Container>
        <FormControl variant="filled" >
        <Select
          value={country}
          onChange={handleChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem value="" disabled>
            Filter by region
          </MenuItem>
          <MenuItem value={'Africa'}>Africa</MenuItem>
          <MenuItem value={'america'}>America</MenuItem>
          <MenuItem value={'asia'}>Asia</MenuItem>
          <MenuItem value={'europe'}>Europe</MenuItem>
          <MenuItem value={'oceania'}>Oceania</MenuItem>
        </Select>
      </FormControl>
        </Container>
    )
}