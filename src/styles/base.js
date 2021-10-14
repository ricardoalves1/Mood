import styled from 'styled-components'

export const Container = styled.div`
  margin: 16px 100px;
  padding: 8px;

  @media screen and (max-width: 600px) {
    margin: 16px;
  }
`

export const Grid = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-gap: 36px;
  grid-template-columns: repeat(auto-fill, 250px);
  align-items: center;
  justify-content: center;
`

export const Card = styled.div`
  width: 250px;
  height: 300px;
  display: flex;
  flex-direction: column;
  border-radius: 10px;

  background: ${props => props.theme.colors.background};
  box-shadow: 0px 10px 20px 0px rgba(43, 43, 43, 0.1);

  > .image {
    width: 100%;
    height: 70%;
    overflow: hidden;
    border-radius: inherit;
    background-color: ${props => props.theme.colors.secondary};

    img {
      width: 100%;
      object-fit: cover;
    }
  }

  > .info {
    position: relative;
    flex: 1;
    padding: 10px;
    text-align: start;

    .title {
      font-size: 16px;
      font-weight: 500;
      color: ${props => props.theme.colors.textBlack};
    }

    .subtitle {
      font-size: 14px;
      margin-top: 6px;
      color: ${props => props.theme.colors.grey};
    }

    .link-icon {
      position: absolute;
      top: 8px;
      left: 100%;
      margin-left: -26px;
      color: ${props => props.theme.colors.textBlack};

      &:hover {
        opacity: 0.85;
      }
    }
  }
`
export const Button = styled.button`
  background: ${props => props.theme.colors.tertiary};
  color: ${props => props.theme.colors.textWhite};
  width: ${props => props.width || 'fit-content'};
  min-height: ${props => props.height || '45px'};
  font: 400 16px Roboto, sans-serif;

  margin: 8px;
  padding: 8px 32px;
  position: relative;

  border: none;
  border-radius: 10px;

  text-align: center;
  text-decoration: none;
  display: inline-block;

  &:hover {
    cursor: pointer;

    &::after {
      content: '';
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      border-radius: 10px;
      background: #f2f2f2;
      opacity: 0.05;
    }
  }

  &:active {
    &::after {
      content: '';
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      border-radius: 10px;
      background: #f2f2f2;
      opacity: 0.15;
    }
  }
`
