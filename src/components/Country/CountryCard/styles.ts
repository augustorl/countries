import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled(Link)`
  position: relative;
  background-color: ${({ theme }) => theme.colors.backgroundSecondary};
  border-radius: 0.5rem;
  box-shadow: 0 0 0.7rem 0.2rem rgba(0, 0, 0, 0.0294384);
  transition: transform 0.2s, opacity 0.2s;

  &::after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    content: '';
    box-shadow: 0 2rem 2rem -1rem rgba(0, 0, 0, 0.15);
    border-radius: 0.2rem;
    opacity: 0;
    transition: opacity 0.2s;
  }

  &:hover {
    transform: translateY(-0.5rem);
    &::after {
      opacity: 1;
    }
  }
`;

export const Flag = styled.div.attrs<{ flag: string }>(({ flag }) => ({
    style: {
      backgroundImage: `url(${flag})`,
    },
  }))<{ flag: string }>`
    height: 16rem;
    border-radius: 0.5rem 0.5rem 0 0;
    overflow: hidden;
    background-color: ${({ theme }) => theme.colors.backgroundPrimary};
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
`;

export const Content = styled.div`
  padding: 2.4rem 2.4rem 4.6rem;
`;

export const Heading = styled.h4`
  margin-bottom: 1.6rem;
  font-weight: 800;
  font-size: 1.8rem;
  line-height: 2.6rem;
  color: ${({ theme }) => theme.colors.text};
`;

export const Details = styled.div`
  display: grid;
  gap: 0.8rem;
  color: ${({ theme }) => theme.colors.text};
`;

export const Info = styled.p`
  span {
    font-weight: 600;
  }
`;