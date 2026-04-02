import styled from "styled-components"

const StyledButton = styled.button`
  border-radius: 20px;
  border: none;
  display: flex;
  padding: 8px 30px;


  ${({ $variant, theme }) => $variant === "card" && `
    width: max-content;
    margin-top: 50px;
    align-self: center;
    justify-self: center;
    background: ${theme.omMedlemskap.buttons.väljMedlemskap.bgClr};
  `}

  ${({ $variant, theme }) => $variant === "omMedlemskap-login" && `
    background: ${theme.omMedlemskap.buttons.loggaIn.bgClr};
    justify-self: center;
  `}

  ${({ $variant, theme }) => $variant === "loggaIn-login" && `
    background: ${theme.loggaIn.buttons.loggaIn.bgClr};
    justify-content: center;
  `}

  ${({ $variant, theme}) => $variant === "go-back" && `
    display: inline;
    background: ${theme.loggaIn.buttons.gåTillbaka.bgClr};
    margin-left: 40px;
  `}
`

export const Button = ({ text, variant, ...props }) => {
  return (
    <StyledButton $variant={variant} {...props}>{text}</StyledButton>
  )
}