import styled from 'styled-components'
import { useContentStore } from '../../../store/contentStore'
import { Button } from '../../reusable/ui/Button'
import { FormInput } from "../../reusable/ui/FormInput"
import { Fieldset } from "../../reusable/ui/Fieldset"
import { CitySelector } from '../../reusable/ui/CitySelector'


const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

//lägga till input firstname, lastname, city- auto search

export const SignUpForm = () => {
  const { logInContent } = useContentStore()
  const { form } = logInContent

  return (
    <StyledForm>
      <FormInput 
      variant="signup"
      type="text" 
      id="firstName" 
      name="firstName"
      placeholder={form.firstNamePlaceholder}
      label={form.firstName} />
      <FormInput 
      variant="signup"
      type="text" 
      id="lastName" 
      name="lastName"
      placeholder={form.lastNamePlaceholder}
      label={form.lastName} />
      <FormInput 
      variant="signup"
      type="email" 
      id="email" 
      name="email" 
      placeholder={form.emailPlaceholder}
      label={form.email} />
      <FormInput 
      variant="signup"
      type="password" 
      id="password" 
      name="password" 
      placeholder={form.passwordPlaceholder}
      label={form.password} />
      <CitySelector 
      label={form.city} 
      id="city" 
      name="city" />
      <FormInput 
      variant="signup"
      type="textarea" 
      id="justifyMembership" 
      name="justifyMembership" 
      label={form.justifyMembershipLabel} />
      <Fieldset />
      <Button 
      text={form.button.signUp} 
      variant="loggaIn-login"/>
    </StyledForm>

  )
}