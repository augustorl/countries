import styled from 'styled-components';

export const Container = styled.div`
    
    div {
        display: flex;
        justify-content: space-around;
        background-color: ${({ theme }) => theme.colors.backgroundPrimary};
        color: ${({ theme }) => theme.colors.text};
        height: 10vh;
        align-items: center;

        button {
            border: none;
            display: flex;
            background: none;
            cursor: pointer;
            color: ${({ theme }) => theme.colors.text};
        }

        a {
            text-decoration: none;
            color: ${({ theme }) => theme.colors.text};
        }

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