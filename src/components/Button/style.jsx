import { styled } from 'styled-components'

export const ButtonStyle = styled.button`
  &:disabled {
    pointer-events: default;
    opacity: 0.7;
  }
`
