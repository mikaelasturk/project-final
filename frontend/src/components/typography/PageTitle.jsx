import styled from 'styled-components'

const StyledPageTitle = styled.h1`
  ${({ $variant, theme }) => $variant === "hero" && `
    @media(min-width: ${theme.breakpoints.desktop}) {
      font-size: 50px;
    }
  `}

  ${({ $variant, theme }) => $variant === "konto" && `
    color: ${theme.konto.txtClrH1};
    text-transform: uppercase;
    letter-spacing: 10px;
    text-align: center;
    font-size: 28px;
    font-weight: 400;
    margin-bottom: 32px;
  `}
`

export const PageTitle = ({ text, variant }) => {
  return (
    <StyledPageTitle $variant={variant} >
      {text}
    </StyledPageTitle>
  )
}

