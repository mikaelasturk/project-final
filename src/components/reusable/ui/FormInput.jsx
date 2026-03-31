import styled from 'styled-components'

const StyledInputContainer = styled.div`
  margin-top: 15px;
`


const StyledInput = styled.input`
  background: ${({theme}) => theme.loggaIn.form.inputBgClr};
  color: ${({theme}) => theme.loggaIn.form.inputTxtClr};
  width: 100%;
  height: 35px;
  border-radius: 3px;
  border: none;
`

export const FormInput = ({ type, id, name, label, value, onChange }) => {

  return (
    <StyledInputContainer>
      <label htmlFor={id}>{label}
        <StyledInput type={type} id={id} name={name} value={value} onChange={onChange} />
      </label>
    </StyledInputContainer>
  )
}