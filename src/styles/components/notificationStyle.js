import styled from 'styled-components'

export const Notification = styled.div`
  position: fixed;
  bottom: 5%;
  left: 50%;
  width: 400px;
  min-height: 50px;
  margin-left: -200px;
  padding: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: ${props =>
    props.error ? props.theme.colors.error : props.theme.colors.success};
  border-radius: 10px;
  transform-origin: right;
  animation: notify 3s ease-in-out backwards;

  @keyframes notify {
    0% {
      bottom: -20%;
    }
    10% {
      bottom: 5%;
    }
  }
`
