// [ ] TODO - Lägg till state och onChange för checkboxarna
// [ ] TODO - Lägg till props så att Fieldset kan återanvändas i EditProfile?

//import { FormInput } from "./FormInput";
import styled from 'styled-components';
import { useContentStore } from '../../../store/contentStore'
import { useFormStore } from '../../../store/formStore';

const StyledFieldset = styled.fieldset`
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  justify-self: center;
  align-self: center;
  border: 1px solid #ccc;
  padding: 2px 30px 30px 30px;

  legend {
    font-size: 1.2em;
  }

  p {
    font-size: 0.8em; //funkar inte?
    margin-bottom: 15px;
  } 
`
const StyledCheckbox = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 10px;

  input[type="checkbox"] {
    display: flex;
    align-self: center;
    background: ${({theme}) => theme.signUp.form.inputBgClr};
    color: ${({theme}) => theme.loggaIn.form.inputTxtClr};
    /* width: 20px;
    height: 20px; */
    cursor: pointer;
  }

  label {
    font-size:;
    cursor: pointer;
  }
`


export const Fieldset = () => {
  const { signUpData, setWorkStatus, setOtherText, clearSignUpFieldError, setSignUpFieldErrors } = useFormStore()
  const { logInContent } = useContentStore()
  const { form } = logInContent;

  const handleWorkStatusChange = (event) => {
    const { value, checked } = event.target

    setWorkStatus(value, checked)

     if (checked) {
      clearSignUpFieldError('workStatus')
    }

    if (value === 'other' && !checked) {
      const hasOtherSelectedStatus = [
        signUpData.workStatus.worker,
        signUpData.workStatus.owner,
        signUpData.workStatus.startUp,
        signUpData.workStatus.searching
      ].some(Boolean)
      const nextFieldErrors = { ...signUpData.fieldErrors }

      delete nextFieldErrors.otherText

      setOtherText('')
      clearSignUpFieldError('otherText')

      if (!hasOtherSelectedStatus) {
        nextFieldErrors.workStatus = 'Välj minst ett alternativ.'
      }

      setSignUpFieldErrors(nextFieldErrors)
    }
  }


  return (
   <StyledFieldset>
      <legend>{form.workStatusLabel}</legend>
      <p>{form.workStatusDesc}</p>

      <StyledCheckbox>
        <input 
          type="checkbox" 
          id="worker" 
          name="workStatus"
          value="worker"
          checked={signUpData.workStatus.worker}
          onChange={handleWorkStatusChange}
        />
        <label htmlFor="worker">{form.workStatus.a}</label>
      </StyledCheckbox>

      <StyledCheckbox>
        <input 
          type="checkbox" 
          id="owner" 
          name="workStatus"
          value="owner"
          checked={signUpData.workStatus.owner}
          onChange={handleWorkStatusChange}
        />
        <label htmlFor="owner">{form.workStatus.b}</label>
      </StyledCheckbox>
      
      <StyledCheckbox>
        <input 
          type="checkbox" 
          id="startUp" 
          name="workStatus"
          value="startUp"
          checked={signUpData.workStatus.startUp}
          onChange={handleWorkStatusChange}
        />
        <label htmlFor="startUp">{form.workStatus.c}</label>
      </StyledCheckbox>

      <StyledCheckbox>
        <input 
          type="checkbox" 
          id="searching" 
          name="workStatus"
          value="searching"
          checked={signUpData.workStatus.searching}
          onChange={handleWorkStatusChange}
        />
        <label htmlFor="searching">{form.workStatus.d}</label>
      </StyledCheckbox>

      <StyledCheckbox>
        <input 
          type="checkbox" 
          id="other" 
          name="workStatus"
          value="other"
          checked={signUpData.workStatus.other}
          onChange={handleWorkStatusChange}
        /> 
        <label htmlFor="other">{form.workStatus.e}</label>
      </StyledCheckbox>

      {signUpData.workStatus.other && (
        <input
          type="text"
          placeholder="Beskriv din situation..."
          onChange={(event) => setOtherText(event.target.value)}
          value={signUpData.workStatus.otherText}
        />
      )}

    </StyledFieldset>
  );
};