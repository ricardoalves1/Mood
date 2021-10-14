import styled from 'styled-components'

export const Header = styled.div`
  > .title {
    font: 300 6rem Changa one, sans-serif;
    cursor: pointer;
  }

  > .subtitle {
    font-size: 2rem;
    margin-top: 64px;
    margin-bottom: 24px;
  }
`

export const CardInfo = styled.div`
  width: 100%;
  height: 100%;
  font-size: 18px;
  margin-top: 24px;
  line-height: 30px;

  a {
    font-weight: bold;

    &:hover {
      opacity: 0.9;
    }
  }
`
