import styled from 'styled-components'
import { useContentStore } from '../../../store/contentStore'
import { Button } from '../../reusable/ui/Button'
import { FormInput } from "../../reusable/ui/FormInput"
import { Fieldset } from "../../reusable/ui/Fieldset"
import { CitySelector } from '../../reusable/ui/CitySelector'
import { useFormStore } from '../../../store/formStore'


const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

//lägga till input firstname, lastname, city- auto search

export const SignUpForm = () => {
  const { logInContent } = useContentStore()
  const { form } = logInContent
  const { formData, setField, resetData } = useFormStore()

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(formData)
    resetData()
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <FormInput 
        variant="signup"
        type="text" 
        id="firstName" 
        name="firstName"
        required
        value={formData.firstName}
        placeholder={form.firstNamePlaceholder}
        onChange={(event) => setField('firstName', event.target.value)}
        label={form.firstName} />
      <FormInput 
        variant="signup"
        type="text" 
        id="lastName" 
        name="lastName"
        required
        value={formData.lastName}
        placeholder={form.lastNamePlaceholder}
        onChange={(event) => setField('lastName', event.target.value)}
        label={form.lastName} />
      <FormInput 
        variant="signup"
        type="email" 
        id="email" 
        name="email" 
        required
        value={formData.email}
        placeholder={form.emailPlaceholder}
        onChange={(event) => setField('email', event.target.value)}
        label={form.email} />
      <FormInput 
        variant="signup"
        type="password" 
        id="password" 
        name="password" 
        required
        value={formData.password}
        placeholder={form.passwordPlaceholder}
        onChange={(event) => setField('password', event.target.value)}
        label={form.password} />
      <CitySelector 
        label={form.city} 
        id="city" 
        name="city"
        required
      />
      <FormInput 
        variant="signup"
        type="textarea" 
        id="justifyMembership" 
        name="justifyMembership" 
        required
        value={formData.justifyMembership}
        onChange={(event) => setField('justifyMembership', event.target.value)}
        label={form.justifyMembershipLabel} />
      <Fieldset />
      <Button
        type="submit"
        text={form.button.signUp} 
        variant="loggaIn-login"/>
    </StyledForm>
  )
}