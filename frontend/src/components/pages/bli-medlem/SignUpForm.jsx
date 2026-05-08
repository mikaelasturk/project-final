import styled from 'styled-components'
import { useContentStore } from '../../../store/contentStore'
import { Button } from '../../reusable/ui/Button'
import { FormInput } from "../../reusable/ui/FormInput"
import { Fieldset } from "../../reusable/ui/Fieldset"
import { CitySelector } from '../../reusable/ui/CitySelector'
import { useFormStore } from '../../../store/formStore'
import { API_URL } from '../../../../Constants' 


const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

//lägga till input firstname, lastname, city- auto search

export const SignUpForm = () => {
  const { logInContent } = useContentStore()
  const { form } = logInContent
  const { signUpData, setSignUpField, setSignUpSubmitting, resetSignUp, setSignUpError } = useFormStore()

  //[ ] todo: fixa setSignUpSubmitting för att knappen ska byta texten vid submitting läge, integrera med API fetch
  //[ ] todo: fixa resetSignUp för att funka med setSignUpSubmitting, integrera med API fetch



  const handleSubmit = async (event) => {
    event.preventDefault()
    console.log("Submit klickad", signUpData)

    const { error, isSubmitting, city, workStatus, ...payload } = signUpData

    const selectedWorkStatusOptions = Object.entries(workStatus)
      .filter(([key, value]) => value === true && key !== 'otherText')
      .map(([key]) => key)

    const requestBody = { 
      ...payload,
      city: city.value,
      workStatus: selectedWorkStatusOptions,
      otherText: workStatus.other ? workStatus.otherText : ''
    }

    setSignUpError('')
    setSignUpSubmitting(true)

    try {
      const response = await fetch(`${API_URL}/users/signup`, {
        method: 'POST',
        body: JSON.stringify(requestBody),
        headers: {
          'Content-Type': 'application/json'   
        } 
     })

      const data = await response.json()
      console.log("Sign up response status:", response.status)
      console.log("Sign up response data:", data)
      
      if (!response.ok) {
        throw new Error(data?.message || "Sign up failed")
      }
      console.log("Sign up lyckades, anropar handleSignUp")

      if (handleSignUp) {
        handleSignUp(data.response)
        resetSignUp()
      }
    } catch (error) {
      setSignUpError(error.message || "Ett fel inträffade vid registrering")
    } finally {
      setSignUpSubmitting(false)
    }
    
  }


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
        required
      />
      <FormInput 
        variant="signup"
        type="textarea" 
        id="justifyMembership" 
        name="justifyMembership" 
        required
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