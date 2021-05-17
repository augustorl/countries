import styled from 'styled-components';
import SearchIcon from '@material-ui/icons/Search';

export const Container = styled.div`
    max-width: 30vw;
   
    box-shadow: 0 0.2rem 0.9rem rgba(0, 0, 0, 0.0532439);

    form {
        background: ${({ theme }) => theme.colors.backgroundSecondary};
    }
    input {
        width: 100%;
        color: ${({ theme }) => theme.colors.input};
        background: transparent !important;
        border: 0;
        outline: none;

        &::placeholder {
        color: ${({ theme }) => theme.colors.input};
        }
    }
`;

export const Icon = styled(SearchIcon)`
  fill: ${({ theme }) => theme.colors.input}!important;
  width: 1.6rem;
  height: 1.6rem;

  @media (max-width: 720px) {
    width: 1.8rem;
    height: 1.8rem;
  }
`;