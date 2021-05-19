import styled from 'styled-components';
import media from './mediaQueries';

export const Container = styled.div`
    margin: 0 auto;
    


    .search-container {
        margin-top: 3rem;
        display: flex;
        align-items: center;
        justify-content: space-around;
        
        .MuiFilledInput-underline::after,
        .MuiFilledInput-underline::before {
            border-bottom: none !important;
        }
        @media (${media.lg}) {
            margin-top: 4.8rem;
            margin-bottom: 4.5rem;
        }
    }

    .country-list {
        margin-top: 3rem;
    }
`;