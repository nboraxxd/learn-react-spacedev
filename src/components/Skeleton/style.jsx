import { styled } from 'styled-components'

export const SkeletonStyle = styled.span`
  display: inline-block;
  width: 100%;
  border-radius: 5px;
  background: linear-gradient(110deg, #ececec 8%, #f5f5f5 18%, #ececec 33%);
  background-size: 200% 100%;
  animation: 1.5s shine infinite;

  &.circle {
    border-radius: 100%;
  }

  @keyframes shine {
    to {
      background-position-x: -200%;
    }
  }
`
