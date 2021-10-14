import styled from 'styled-components'

export const Header = styled.div`
  > .title {
    color: ${props => props.theme.colors.textWhite};
    font: 300 6rem Changa one, sans-serif;
    cursor: pointer;
  }

  > .label {
    color: ${props => props.theme.colors.textWhite};
    font-size: 2rem;
    margin-top: 64px;
    margin-bottom: 24px;
  }

  > .input {
    display: flex;
    align-items: center;

    > .city {
      width: 460px;
      max-width: 75%;
      height: 45px;
      border: 0;
      outline: 0;
      padding: 8px 16px;
      border-radius: 10px;
      font-size: 16px;
    }
  }

  > .weather-result {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 5%;
    right: 100px;

    color: ${props => props.theme.colors.textWhite};
    font-size: 1.75rem;
    text-align: center;
    text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);

    > .image-weather {
      width: 250px;
      height: 200px;
      margin-bottom: 24px;
      z-index: -1;
    }
  }

  @media screen and (max-width: 600px) {
    > .input {
      flex-direction: column;

      .city {
        max-width: 100%;
      }

      button {
        width: 100%;
      }
    }

    > .weather-result {
      position: relative;
      right: 0;
      margin-top: 24px;
      align-items: center;
      justify-content: center;
    }
  }

  @media screen and (max-width: 1024px) {
    > .weather-result .image-weather {
      width: 200px;
      height: 150px;
      margin-bottom: 32px;
    }
  }
`
export const ListInfo = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  margin-top: 64px;
  gap: 24px;

  > .info {
    color: ${props => props.theme.colors.textWhite};
    font-size: 2rem;
  }

  > button {
    justify-self: end;
  }

  .song-list {
    grid-column-start: 1;
    grid-column-end: 3;
  }

  @media screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    text-align: center;
  }
`
