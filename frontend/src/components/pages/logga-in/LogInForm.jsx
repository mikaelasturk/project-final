// [x] Make components for inputfields?
// [ ] Connect form to backend
// [x] Connect form to content store
// [ ] make the input field be used with enter to submit

import styled from 'styled-components'
import { useContentStore } from '../../../store/contentStore'
import { Button } from '../../reusable/ui/Button'
import { FormInput } from "../../reusable/ui/FormInput"
//import { CardTitle } from '../components/reusable/typography/typography'
import { API_URL } from '../../../../Constants'
import { useFormStore } from '../../../store/formStore'

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 30px;
`

const StyledContentContainer = styled.div`

`

const StyledError = styled.p`
  margin: 6px 0 0;
  color: #b52a37;
  font-size: 0.85rem;
`

const toLoginFieldErrors = (fieldErrors = {}) => {
  const errorMessages = {
    REQUIRED: 'Detta falt ar obligatoriskt'
  }

  return Object.fromEntries(
    Object.entries(fieldErrors).map(([field, code]) => [field, errorMessages[code] || code])
  )
}

export const LogInForm = ({ handleLogin }) => {
  const { logInContent } = useContentStore()
  const { form } = logInContent
  const {
    loginData,
    setLoginField,
    setLoginSubmitError,
    setLoginFieldErrors,
    clearLoginFieldError,
    setLoginSubmitting,
    resetLogin
  } = useFormStore()


  //göra en handleSubmit

  const handleSubmit = async (event) => {
    event.preventDefault()
    console.log("Submit klickad", loginData)

    setLoginSubmitError('')
    setLoginFieldErrors({})

    const localFieldErrors = {}
    if (!loginData.email.trim()) localFieldErrors.email = 'Detta falt ar obligatoriskt'
    if (!loginData.password.trim()) localFieldErrors.password = 'Detta falt ar obligatoriskt'

    if (Object.keys(localFieldErrors).length > 0) {
      setLoginFieldErrors(localFieldErrors)
      return
    }

    setLoginSubmitting(true)

      //fetch API med method POST
    try {
      const response = await fetch(`${API_URL}/users/login`, {
        method: "POST",
        body: JSON.stringify({
          email: loginData.email,
          password: loginData.password
        }),
        headers: {
          "Content-Type": "application/json"
        }
      })

      const data = await response.json()
       console.log("Login response status:", response.status)
       console.log("Login response data:", data)

      if (!response.ok) {
        if (data?.fieldErrors) {
          setLoginFieldErrors(toLoginFieldErrors(data.fieldErrors))
        } else {
          setLoginSubmitError(data?.message || "Invalid email or password")
        }
        return
      }
      console.log("Login lyckades, anropar handleLogin")

      //handledLogin som "skapas" i login page
      if (handleLogin) {
        handleLogin(data.response)
        resetLogin()
      }
    } catch (error) {
      const isNetworkError = error instanceof TypeError
      setLoginSubmitError(isNetworkError ? 'Kunde inte ansluta till servern. Forsok igen om en liten stund.' : 'Invalid email or password')
    } finally {
      setLoginSubmitting(false)
    }
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledContentContainer>
        <FormInput 
          variant="login"
          onChange={(event) => {
            setLoginField('email', event.target.value)
            clearLoginFieldError('email')
          }} 
          type="email" 
          id="email" 
          name="email"
          placeholder={form.emailPlaceholder}
          value={loginData.email}
          label={form.email}
          error={loginData.fieldErrors.email}
        />
        <FormInput 
          variant="login"
          onChange={(event) => {
            setLoginField('password', event.target.value)
            clearLoginFieldError('password')
          }} 
          type="password" 
          id="password" 
          name="password"
          placeholder={form.passwordPlaceholder}
          value={loginData.password}
          label={form.password}
          error={loginData.fieldErrors.password}
        />
      </StyledContentContainer>
      {loginData.submitError && <StyledError>{loginData.submitError}</StyledError>}
      <Button 
        type="submit" 
        // [ ] todo: lägga in Loggar in ... i content store
        text={loginData.isSubmitting ? "Loggar in..." : form.button.logIn}
        variant="loggaIn-login" disabled={loginData.isSubmitting}
      />
    </StyledForm>

  )
}

