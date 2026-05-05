//import { FormInput } from "./FormInput";
import styled from 'styled-components';
import { useContentStore } from '../../../store/contentStore'

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
  const { logInContent } = useContentStore()
  const { form } = logInContent;

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
        />
        <label htmlFor="worker">{form.workStatus.a}</label>
      </StyledCheckbox>

      <StyledCheckbox>
        <input 
          type="checkbox" 
          id="owner" 
          name="workStatus" 
          value="owner" 
        />
        <label htmlFor="owner">{form.workStatus.b}</label>
      </StyledCheckbox>
      
      <StyledCheckbox>
        <input 
          type="checkbox" 
          id="startUp" 
          name="workStatus" 
          value="startUp"
        />
        <label htmlFor="startUp">{form.workStatus.c}</label>
      </StyledCheckbox>

      <StyledCheckbox>
        <input 
          type="checkbox" 
          id="searching" 
          name="workStatus" 
          value="searching"
        />
        <label htmlFor="searching">{form.workStatus.d}</label>
      </StyledCheckbox>

      <StyledCheckbox>
        <input 
          type="checkbox" 
          id="workStatus" 
          name="workStatus" 
          value="other"
        /> 
        <label htmlFor="other">{form.workStatus.e}</label>
      </StyledCheckbox>

    </StyledFieldset>
  );
};