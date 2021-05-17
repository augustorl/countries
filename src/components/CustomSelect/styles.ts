import styled from 'styled-components';

export const Container = styled.div`

        .MuiSelect-root {
            color: ${({ theme }) => theme.colors.input};
            background: ${({ theme }) => theme.colors.backgroundSecondary};
            outline: none;
            cursor: pointer;
            
            width: 120px;
            padding: 1rem 2rem;
            border-color: ${({ theme }) => theme.colors.input};
            border-bottom: none;

            &:active,:focus {
                background: ${({ theme }) => theme.colors.backgroundSecondary};
            }
            &::placeholder {
            color: ${({ theme }) => theme.colors.input};
            }
        }        
    svg {
        fill: ${({ theme }) => theme.colors.input};
    }

    .MuiMenu-list,
    .MuiListItem-button {
        background: ${({ theme }) => theme.colors.backgroundSecondary};
    }
`;