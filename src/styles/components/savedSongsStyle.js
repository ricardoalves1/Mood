import styled from 'styled-components'

export const Playlist = styled.div`
  margin-bottom: 64px;

  > .info {
    padding: 0px 8px;
    font-size: 1.175rem;

    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-bottom: 8px;
    align-items: center;

    > .image-weather {
      display: flex;
      justify-self: end;
      align-items: center;

      img {
        width: 100px;
        height: 50px;
        object-fit: contain;
      }
    }
  }
`
