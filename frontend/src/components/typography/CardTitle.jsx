import styled from 'styled-components'

const StyledCardTitle = styled.h2`
  margin: 0;

  ${({ $variant, theme }) => $variant === "om-medlemskap" && `
    
    @media(min-width: ${theme.breakpoints.tablet}) {
      font-size: 45px;
    }
  `}
`

export const CardTitle = ({ text, variant }) => {
  return (
    <StyledCardTitle $variant={variant}>
      {text}
    </StyledCardTitle>
  )
}

