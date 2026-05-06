import styled from "styled-components"
import { useContentStore } from '../../../store/contentStore'
import Select from "react-select"
import swedishCities from "../../../data/swedishCities.json"
import { useMemo } from 'react'
import { useFormStore } from "../../../store/formStore"

// [ ] TODO: styla Select-komponenten så att den matchar resten av formuläret, t.ex. genom att ändra bakgrundsfärg, kantfärg och textfärg. Använd gärna props för att göra det enkelt att anpassa stilen. Ljuslila bakgrund på option?

const StyledLabel = styled.label`
  display: block;
  color: ${({theme}) => theme.signUp.form.txtClr || 'var(--white)'};
  font-size: 15px;
  margin-top: 15px;
`

// Klass	Vad det är
// __placeholder	Platshållartexten
// __single-value	Det valda värdet som visas
// __input-container	Wrappern runt textinputen
// __input	Själva input-elementet
// __dropdown-indicator	Pilen/ikonen till höger
// __indicator-separator	Strecket bredvid pilen
// __clear-indicator	X-knappen (om isClearable)
// __menu-list	Listan inuti menyn (scrollbar)
// __no-options-message	Texten när inga alternativ matchar
// __value-container	Wrappern runt det valda värdet

const StyledSelect = styled(Select)`
  & .select__control {
    appearance: none;
    -webkit-appearance: none;
    background: ${({theme}) => theme.signUp.form.inputBgClr};
    border: none;
    padding: 2px;
    border-radius: 3px;
    box-shadow: none;
  }

  & .select__control--is-focused {
    border-color: red;
    box-shadow: none;
  }

  & .select__menu {
    z-index: 10;
    background: ${({theme}) => theme.signUp.form.inputBgClr};
  }

  & .select__option {
    width: 100%;
    padding: 8px;
    padding-left: 14px;
    border-radius: 3px;
    border: none;
    background: ${({theme}) => theme.signUp.form.inputBgClr};
    color: ${({theme}) => theme.signUp.form.inputTxtClr};
  }

  & .select__option--is-focused {
    background: ${({theme}) => theme.signUp.form.inputBgClrHover};
    color: ${({theme}) => theme.signUp.form.inputTxtClrHover};
  }

  & .select__option--is-selected {
    background: ${({theme}) => theme.signUp.form.inputBgColorSelected};
    color: ${({theme}) => theme.signUp.form.inputTxtColorSelected};
  }
`

export const CitySelector = ({ label, id, name }) => {
  const { formData, setField } = useFormStore()
  const { logInContent } = useContentStore()
  const { form } = logInContent
  const cityOptions = useMemo(() => swedishCities, [])


  return (
    <>
      <StyledLabel htmlFor={id}>{label}</StyledLabel>
      <StyledSelect
        classNamePrefix="select"
        inputId={id}
        name={name}
        options={cityOptions}
        value={formData.city}
        onChange={(option) => setField('city', option)}
        placeholder={form.cityPlaceholder}
        isSearchable={true}
        isClearable={true}
        menuPlacement='auto'
        backspaceRemovesValue={true}
      />
    </>
  )
}