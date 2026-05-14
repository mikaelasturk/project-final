import styled from 'styled-components'

const StyledPageTitle = styled.h1`

${({ $variant, theme }) => $variant === "hero" && `
   
  @media(min-width: ${theme.breakpoints.desktop}) {
    font-size: 50px;
  }
`}
`

export const PageTitle = ({ text, variant }) => {
  return (
    <StyledPageTitle $variant={variant} >
      {text}
    </StyledPageTitle>
  )
}

