import styled from "styled-components"
import { FormInput } from "../../reusable/ui/FormInput"
import { CitySelector } from "../../reusable/ui/CitySelector"

const StyledForm = styled.form`

`

//[ ] implementera accountInfoForm när vi skapat patch för userData

// [ ] ändra till rätt funktioner, är nu kopierat från signupform
export const accountInfoForm = () => {
  return (
    <StyledForm onSubmit={handleSubmit}>
      <FormInput 
        variant="signup"
        type="text" 
        id="firstName" 
        name="firstName"
        required
        value={signUpData.firstName}
        placeholder={form.firstNamePlaceholder}
        onChange={(event) => setSignUpField('firstName', event.target.value)}
        label={form.firstName} />
      <FormInput 
        variant="signup"
        type="text" 
        id="lastName" 
        name="lastName"
        required
        value={signUpData.lastName}
        placeholder={form.lastNamePlaceholder}
        onChange={(event) => setSignUpField('lastName', event.target.value)}
        label={form.lastName} />
      <FormInput 
        variant="signup"
        type="email" 
        id="email" 
        name="email" 
        required
        value={signUpData.email}
        placeholder={form.emailPlaceholder}
        onChange={(event) => setSignUpField('email', event.target.value)}
        label={form.email} />
      <FormInput 
        variant="signup"
        type="password" 
        id="password" 
        name="password" 
        required
        value={signUpData.password}
        placeholder={form.passwordPlaceholder}
        onChange={(event) => setSignUpField('password', event.target.value)}
        label={form.password} />
      <CitySelector 
        label={form.city} 
        id="city" 
        name="city"
      />
      <FormInput 
        variant="signup"
        type="textarea" 
        id="justifyMembership" 
        name="justifyMembership" 
        value={signUpData.justifyMembership}
        onChange={(event) => setSignUpField('justifyMembership', event.target.value)}
        label={form.justifyMembershipLabel} />
      <Fieldset />
      <Button
        type="submit"
        text={signUpData.isSubmitting ? "Skapar konto..." : form.button.signUp} 
        variant="loggaIn-login" disabled={signUpData.isSubmitting}/>
    </StyledForm>
)
}