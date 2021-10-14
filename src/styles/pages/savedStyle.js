import styled from 'styled-components'

export const Header = styled.div`
  > .title {
    color: ${props => props.theme.colors.textWhite};
    font: 300 6rem Changa one, sans-serif;
    cursor: pointer;
  }

  > .subtitle {
    color: ${props => props.theme.colors.textWhite};
    font-size: 2rem;
    margin-top: 64px;
    margin-bottom: 24px;
  }
`
