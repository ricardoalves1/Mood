import styled from 'styled-components'

export const Header = styled.div`
  > .title {
    color: ${props => props.theme.colors.textWhite};
    font: 300 6rem Changa one, sans-serif;
    margin: -20px 0px 24px 0px;
  }

  > .title-2 {
    color: ${props => props.theme.colors.textWhite};
    font: 300 3.75rem Changa one, sans-serif;
  }

  > .subtitle {
    color: ${props => props.theme.colors.textWhite};
    font-size: 1.2rem;
  }
`

export const Box = styled.div`
  position: relative;
  width: 100%;
  height: 60vh;
  display: grid;
  margin-top: 100px;
  font-size: 2.125rem;

  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -o-user-select: none;
  user-select: none;

  > div {
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    text-align: center;
    color: ${props => props.theme.colors.textWhite};
    border-radius: 10px;
    margin: 0px 16px;
    cursor: pointer;
    gap: 40px;

    svg {
      margin: 0 auto;
    }

    &:hover {
      background-color: rgba(255, 255, 255, 0.1);
    }
  }

  .playlist-icon {
    fill: ${props => props.theme.colors.textWhite};
    width: 100px;
    height: 100px;
  }

  @media screen and (max-width: 600px) {
    > div {
      margin: 16px 0px;
    }

    &::after {
      content: '';
      position: absolute;
      width: 100%;
      top: 50%;
      border-bottom: 3px solid ${props => props.theme.colors.textWhite};
      box-sizing: border-box;
    }

    grid-template-rows: 1fr 1fr;
  }

  @media screen and (min-width: 600px) {
    &::after {
      content: '';
      position: absolute;
      height: 100%;
      left: 50%;
      border-left: 3px solid ${props => props.theme.colors.textWhite};
      box-sizing: border-box;
    }

    grid-template-columns: 1fr 1fr;
  }
`
