//[x] todo: fixa setSignUpSubmitting för att knappen ska byta texten vid submitting läge, integrera med API fetch
//[x] todo: fixa resetSignUp för att funka med setSignUpSubmitting, integrera med API fetch


import styled from 'styled-components'
import { useContentStore, useFormStore } from '../../../store'
import { Button, FormInput, Fieldset, CitySelector } from '../../ui'
import { API_URL } from '../../../constants/Constants' 

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

export const SignUpForm = ({ handleSignUp }) => {
  const { signuUpContent } = useContentStore()
  const { form } = signuUpContent
  const { labels, placeholders, button } = form
  const { signUpData, setSignUpField, setSignUpSubmitting, resetSignUp, setSignUpError } = useFormStore()

  const handleSubmit = async (event) => {
    event.preventDefault()
    console.log("Submit klickad", signUpData)

    const { city, workStatus, ...payload } = signUpData

    const selectedWorkStatusOptions = Object.entries(workStatus)
      .filter(([key, value]) => value === true && key !== 'otherText')
      .map(([key]) => key)

    const requestBody = { 
      ...payload,
      cityValue: city.value,
      cityLabel: city.label,
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
        placeholder={placeholders.firstName}
        onChange={(event) => setSignUpField('firstName', event.target.value)}
        label={labels.firstName} />
      <FormInput 
        variant="signup"
        type="text" 
        id="lastName" 
        name="lastName"
        required
        value={signUpData.lastName}
        placeholder={placeholders.lastName}
        onChange={(event) => setSignUpField('lastName', event.target.value)}
        label={labels.lastName} />
      <FormInput 
        variant="signup"
        type="email" 
        id="email" 
        name="email" 
        required
        value={signUpData.email}
        placeholder={placeholders.email}
        onChange={(event) => setSignUpField('email', event.target.value)}
        label={labels.email} />
      <FormInput 
        variant="signup"
        type="password" 
        id="password" 
        name="password" 
        required
        value={signUpData.password}
        placeholder={placeholders.password}
        onChange={(event) => setSignUpField('password', event.target.value)}
        label={labels.password} />
      <CitySelector 
        label={labels.city} 
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
        label={labels.justifyMembership}
        placeholder={placeholders.justifyMembership} />
      <Fieldset />
      <Button
        type="submit"
        text={signUpData.isSubmitting ? button.textSubmitting : button.text} 
        variant="loggaIn-login" disabled={signUpData.isSubmitting}/>
    </StyledForm>
  )
}