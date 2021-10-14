import styled from 'styled-components'

export const Loader = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  background: rgba(0, 0, 0, 0.5);
  font: 300 3.75rem Changa one, sans-serif;
  z-index: 999;

  > span {
    transform: translate(0, 50%) rotate(4deg);
    animation: bounce 3s ease-in-out infinite;
    display: inline-block;

    &:nth-child(2) {
      animation-delay: 200ms;
    }
    &:nth-child(3) {
      animation-delay: 400ms;
    }
    &:nth-child(4) {
      animation-delay: 600ms;
    }
    &:nth-child(5) {
      animation-delay: 800ms;
    }
    &:nth-child(6) {
      animation-delay: 1000ms;
    }
    &:nth-child(7) {
      animation-delay: 1200ms;
    }
    &:nth-child(8) {
      animation-delay: 1400ms;
    }
    &:nth-child(9) {
      animation-delay: 1600ms;
    }
    &:nth-child(10) {
      animation-delay: 1800ms;
    }
    &:nth-child(11) {
      animation-delay: 2000ms;
    }
    &:nth-child(12) {
      animation-delay: 2200ms;
    }
    &:nth-child(13) {
      animation-delay: 2400ms;
    }
  }

  @keyframes bounce {
    50% {
      transform: translate(0, 0) rotate(-4deg);
    }
  }
`
