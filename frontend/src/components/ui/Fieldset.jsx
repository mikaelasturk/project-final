// [ ] TODO - Lägg till state och onChange för checkboxarna
// [ ] TODO - Lägg till props så att Fieldset kan återanvändas i EditProfile?

import styled from 'styled-components';
import { useContentStore, useFormStore } from '../../store';

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
  const { signUpData, setWorkStatus, setOtherText } = useFormStore()
  const { signuUpContent } = useContentStore()
  const { form } = signuUpContent;
  const { labels, placeholders } = form
  const { workStatus } = labels
  const { checkboxLabel } = workStatus
  


  return (
   <StyledFieldset>
    <legend>{workStatus.label}</legend>
    <p>{workStatus.desc}</p>

      <StyledCheckbox>
        <input 
          type="checkbox" 
          id="worker" 
          name="workStatus"
          value="worker"
          checked={signUpData.workStatus.worker}
          onChange={(event) => setWorkStatus(event.target.value, event.target.checked)}
        />
        <label htmlFor="worker">{checkboxLabel.worker}</label>
      </StyledCheckbox>

      <StyledCheckbox>
        <input 
          type="checkbox" 
          id="owner" 
          name="workStatus"
          value="owner"
          checked={signUpData.workStatus.owner}
          onChange={(event) => setWorkStatus(event.target.value, event.target.checked)}
        />
        <label htmlFor="owner">{checkboxLabel.owner}</label>
      </StyledCheckbox>
      
      <StyledCheckbox>
        <input 
          type="checkbox" 
          id="startUp" 
          name="workStatus"
          value="startUp"
          checked={signUpData.workStatus.startUp}
          onChange={(event) => setWorkStatus(event.target.value, event.target.checked)}
        />
        <label htmlFor="startUp">{checkboxLabel.startUp}</label>
      </StyledCheckbox>

      <StyledCheckbox>
        <input 
          type="checkbox" 
          id="searching" 
          name="workStatus"
          value="searching"
          checked={signUpData.workStatus.searching}
          onChange={(event) => setWorkStatus(event.target.value, event.target.checked)}
        />
        <label htmlFor="searching">{checkboxLabel.searching}</label>
      </StyledCheckbox>

      <StyledCheckbox>
        <input 
          type="checkbox" 
          id="other" 
          name="workStatus"
          value="other"
          checked={signUpData.workStatus.other}
          onChange={(event) => setWorkStatus(event.target.value, event.target.checked)}
        /> 
        <label htmlFor="other">{checkboxLabel.other}</label>
      </StyledCheckbox>

      {signUpData.workStatus.other && (
        <input
          type="text"
          placeholder={placeholders.workStatusOther}
          onChange={(event) => setOtherText(event.target.value)}
          value={signUpData.workStatus.otherText}
        />
      )}

    </StyledFieldset>
  );
};