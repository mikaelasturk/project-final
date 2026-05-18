// Safari overrides the text color of buttons by default, put in color fixes here // check together

import styled from "styled-components"

const StyledButton = styled.button`
  border-radius: 20px;
  border: none;
  display: flex;
  padding: 8px 30px;
  cursor: pointer;
  appearance: none;
  -webkit-appearance: none;
  -webkit-text-fill-color: currentColor;

  ${({ $variant, theme }) => $variant === "card" && `
    width: max-content;
    margin-top: 50px;
    align-self: center;
    justify-self: center;
    background: ${theme.omMedlemskap.buttons.väljMedlemskap.bgClr};
    color: ${theme.omMedlemskap.buttons.väljMedlemskap.txtClr};
  `}

  ${({ $variant, theme }) => $variant === "omMedlemskap-login" && `
    background: ${theme.omMedlemskap.buttons.loggaIn.bgClr};
    justify-self: center;
    color: ${theme.omMedlemskap.buttons.loggaIn.txtClr};
  `}

  ${({ $variant, theme }) => $variant === "loggaIn-login" && `
    background: ${theme.loggaIn.buttons.loggaIn.bgClr};
    justify-content: center;
    color: ${theme.loggaIn.buttons.loggaIn.txtClr};
  `}

  ${({ $variant, theme}) => $variant === "go-back" && `
    display: inline;
    background: ${theme.loggaIn.buttons.gåTillbaka.bgClr};
    margin-left: 40px;
    color: ${theme.loggaIn.buttons.gåTillbaka.txtClr};
  `}

  ${({ $variant, theme }) => $variant === "event" && `
    background: ${theme.konto.mainPage.events.cards.button.bgClr};
    color: ${theme.konto.mainPage.events.cards.button.txtClr};
    font-size: 15px;
    padding: 8px 14px;
  `}
`

export const Button = ({ text, variant, ...props }) => {
  return (
    <StyledButton $variant={variant} {...props}>{text}</StyledButton>
  )
}