// [x] Make components for inputfields?
// [x] Connect form to backend
// [x] Connect form to content store
// [ ] Bugg: se till att submit med enter funkar

import styled from 'styled-components'
import { useContentStore, useFormStore } from '../../../store'
import { Button, FormInput } from '../../ui'
import { API_URL } from '../../../constants/Constants'

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 30px;
`

const StyledContentContainer = styled.div``

export const LogInForm = ({ handleLogin }) => {
  const { logInContent } = useContentStore()
  const { form } = logInContent
  const { labels, placeholders, button } = form
  const { loginData, setLoginField, setLoginError, setLoginSubmitting, resetLogin } = useFormStore()

  const handleSubmit = async (event) => {
    event.preventDefault()
    console.log("Submit klickad", loginData)

    if (!loginData.email || !loginData.password) {
      setLoginError("Please fill in all fields")
      // [ ] setError kopplat till backend error response?
      return
    }

    setLoginError('')
    setLoginSubmitting(true)

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
        throw new Error(data?.message || "Login failed")
      }
      console.log("Login lyckades, anropar handleLogin")

      if (handleLogin) {
        handleLogin(data.response)
        resetLogin()
      }
    } catch (error) {
      // [ ] Error response från backend (?)
      setLoginError(error.message || "Invalid email or password")
    } finally {
      setLoginSubmitting(false)
    }
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledContentContainer>
        <FormInput 
          onChange={(event) => setLoginField('email', event.target.value)} 
          type="email" 
          id="email" 
          name="email"
          placeholder={placeholders.email}
          value={loginData.email}
          label={labels.email} 
        />
        <FormInput 
          onChange={(event) => setLoginField('password', event.target.value)} 
          type="password" 
          id="password" 
          name="password"
          placeholder={placeholders.password}
          value={loginData.password}
          label={labels.password} 
        />
      </StyledContentContainer>
      {loginData.error && <p>{loginData.error}</p>}
      <Button 
        type="submit" 
        // [x] todo: lägga in Loggar in ... i content store
        text={loginData.isSubmitting ? button.textSubmitting : button.text}
        variant="loggaIn-login" disabled={loginData.isSubmitting}
      />
    </StyledForm>

  )
}

