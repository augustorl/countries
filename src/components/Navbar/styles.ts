import styled from 'styled-components';

export const Container = styled.div`
    
    div {
        display: flex;
        justify-content: space-around;
        background-color: #fff;
        color: rgba(0,0,0, 0.7);
        height: 10vh;
        align-items: center;

        h5 {
            font-weight: 600;
        }
        p {
            margin: 0 0.5rem;
            font-size: 1.1rem;
        }        
    }
    @media(max-width: 360px) {
        p {
            display: none;
        }

        h5 {
            font-size: 1rem;
        }
                
    }
`;