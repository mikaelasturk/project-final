// [x] Make components for inputfields?
// [ ] Connect form to backend
// [x] Connect form to content store

import styled from 'styled-components'
import { useContentStore } from '../../../store/contentStore'
import { Button } from '../../reusable/ui/Button'
import { FormInput } from "../../reusable/ui/FormInput"
//import { CardTitle } from '../components/reusable/typography/typography'
import { API_URL } from '../../../../Constants'
import { useState } from 'react'

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 30px;
`

const StyledContentContainer = styled.div`

`

export const LogInForm = ({ handleLogin }) => {
  const { logInContent } = useContentStore()
  const { form } = logInContent

  //göra en useState för formData

  const [ formData, setFormData ] = useState({
    email: '',
    password: ''
  })

  const [ error, setError ] = useState('')
  const [ isSubmitting, setIsSubmitting ] = useState(false)

  //göra en handleSubmit

  const handleSubmit = async (event) => {
    event.preventDefault()
    console.log("Submit klickad", formData)

    if (!formData.email || !formData.password) {
      setError("Please fill in all fields")
      // setError kopplat till backend error response?
      return
    }

    setError('')
    setIsSubmitting(true)

      //fetch API med method POST
    try {
      const response = await fetch(`${API_URL}/users/login`, {
        method: "POST",
        body: JSON.stringify({
          email: formData.email,
          password: formData.password
        }),
        headers: {
          "Content-Type": "application/json"
        }
      })

      const data = await response.json()
       console.log("Login response status:", response.status)
       console.log("Login response data:", data)

      if (!response.ok) {
        //lägga in error response från backend
        throw new Error(data?.message || "Login failed")
      }
      console.log("Login lyckades, anropar handleLogin")

      //handledLogin som "skapas" i login page
      if (handleLogin) {
        handleLogin(data.response)
      }
    } catch (error) {
      // Error response från backend (?)
      setError(error.message || "Invalid email or password")
    } finally {
      setIsSubmitting(false)
    }
  }
  //handlechange för inputfält
  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value}))
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledContentContainer>
        <FormInput 
        onChange={handleChange} 
        type="email" 
        id="email" 
        name="email"
        placeholder={form.emailPlaceholder}
        value={formData.email}
        label={form.email} />
        <FormInput 
        onChange={handleChange} 
        type="password" 
        id="password" 
        name="password"
        placeholder={form.passwordPlaceholder}
        value={formData.password}
        label={form.password} />
      </StyledContentContainer>
      {error && <p>{error}</p>}
      <Button type="submit" 
      text={isSubmitting ? "Loggar in..." : form.button.logIn}
      variant="loggaIn-login" disabled={isSubmitting}/>
    </StyledForm>

  )
}

