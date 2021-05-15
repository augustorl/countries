import styled from 'styled-components';

export const Container = styled.div`

    header {
        box-shadow: 0px 1px 2px -0.5px rgba(0,0,0,0.2),0px 1.5px 3px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12);;
    }
    
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