import styled from 'styled-components'

const StyledInputContainer = styled.div`
  margin-top: 15px;
`

const StyledLabel = styled.label`
  display: block;
  color: ${({theme}) => theme.loggaIn.form.txtClr || 'var(--white)'};
  font-size: 15px;
  margin-bottom: 6px;
`


const StyledInput = styled.input`
  width: 100%;
  padding: 8px;
  border-radius: 3px;
  border: 2px solid transparent;
  appearance: none;
  -webkit-appearance: none;

  ${({ $variant, theme }) => $variant === "login" && `
    background: ${theme.loggaIn.form.inputBgClr};
    color: ${theme.loggaIn.form.inputTxtClr};
  `}

    ${({ $variant, theme }) => $variant === "signup" && `
    background: ${theme.signUp.form.inputBgClr};
    color: ${theme.signUp.form.inputTxtClr};
  `}

  &:focus,
  &:focus-visible {
    border: 2px solid #442E57;
    outline: 2px solid orange;
  }
`

const StyledTextarea = styled.textarea`
  height: 120px;
  resize: vertical;
  padding: 8px;
  width: 100%;
  border-radius: 3px;
  border: 2px solid transparent;
  appearance: none;
  -webkit-appearance: none;
  background: ${({theme}) => theme.signUp.form.inputBgClr};
  color: ${({theme}) => theme.signUp.form.inputTxtClr};

  &:focus,
  &:focus-visible {
    border: 2px solid #442E57;
    outline: 2px solid orange;
  }

`

const StyledError = styled.p`
  margin: 6px 0 0;
  color: #b52a37;
  font-size: 0.85rem;
`

export const FormInput = ({ type, id, name, label, value, onChange, variant, placeholder, error, ...rest }) => {

  return (
    <StyledInputContainer>
      <StyledLabel htmlFor={id}>{label}</StyledLabel>
      {type === 'textarea'
        ? <StyledTextarea id={id} name={name} value={value} onChange={onChange} placeholder={placeholder} {...rest} />
        : <StyledInput $variant={variant} type={type} id={id} name={name} value={value} onChange={onChange} placeholder={placeholder} {...rest} />
      }
      {error && <StyledError>{error}</StyledError>}
    </StyledInputContainer>
  )
}