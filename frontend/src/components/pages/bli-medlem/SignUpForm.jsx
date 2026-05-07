import styled from 'styled-components'
import { useContentStore } from '../../../store/contentStore'
import { Button } from '../../reusable/ui/Button'
import { FormInput } from "../../reusable/ui/FormInput"
import { Fieldset } from "../../reusable/ui/Fieldset"
import { CitySelector } from '../../reusable/ui/CitySelector'
import { useFormStore } from '../../../store/formStore'
import { validateSignUpField, validateSignUpForm } from '../../../logic/signUpValidation'

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

const StyledError = styled.p`
  margin-top: 6px;
  color: #b52a37;
  font-size: 0.85rem;
`

const StyledStatusMessage = styled.p`
  margin-top: 8px;
  color: ${({ $isSuccess }) => ($isSuccess ? '#19783a' : '#b52a37')};
`

export const SignUpForm = () => {
  const { logInContent } = useContentStore()
  const { form } = logInContent
  const {
    signUpData,
    setSignUpField,
    setSignUpFieldErrors,
    clearSignUpFieldError,
    setSignUpSubmitError,
    setSignUpSubmitting,
    resetSignUp
  } = useFormStore()

  const handleFieldChange = (field, value) => {
    setSignUpField(field, value)

    if (!signUpData.fieldErrors[field]) {
      return
    }

    const nextError = validateSignUpField(field, value)
    if (!nextError) {
      clearSignUpFieldError(field)
      return
    }

    setSignUpFieldErrors({ ...signUpData.fieldErrors, [field]: nextError })
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const validationErrors = validateSignUpForm(signUpData)
    if (Object.keys(validationErrors).length > 0) {
      setSignUpFieldErrors(validationErrors)
      setSignUpSubmitError('Kontrollera falten och forsok igen.', false)
      return
    }

    setSignUpFieldErrors({})
    setSignUpSubmitError('', false)
    setSignUpSubmitting(true)

    const successMessage = `Tack for att du blev medlem, ${signUpData.firstName.trim()}!`
    resetSignUp()
    setSignUpSubmitError(successMessage, true)
    setSignUpSubmitting(false)
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
        onChange={(event) => handleFieldChange('firstName', event.target.value)}
        label={form.firstName} />
      {signUpData.fieldErrors.firstName && <StyledError>{signUpData.fieldErrors.firstName}</StyledError>}
      <FormInput 
        variant="signup"
        type="text" 
        id="lastName" 
        name="lastName"
        required
        value={signUpData.lastName}
        placeholder={form.lastNamePlaceholder}
        onChange={(event) => handleFieldChange('lastName', event.target.value)}
        label={form.lastName} />
      {signUpData.fieldErrors.lastName && <StyledError>{signUpData.fieldErrors.lastName}</StyledError>}
      <FormInput 
        variant="signup"
        type="email" 
        id="email" 
        name="email" 
        required
        value={signUpData.email}
        placeholder={form.emailPlaceholder}
        onChange={(event) => handleFieldChange('email', event.target.value)}
        label={form.email} />
      {signUpData.fieldErrors.email && <StyledError>{signUpData.fieldErrors.email}</StyledError>}
      <FormInput 
        variant="signup"
        type="password" 
        id="password" 
        name="password" 
        required
        value={signUpData.password}
        placeholder={form.passwordPlaceholder}
        onChange={(event) => handleFieldChange('password', event.target.value)}
        label={form.password} />
      {signUpData.fieldErrors.password && <StyledError>{signUpData.fieldErrors.password}</StyledError>}
      <CitySelector 
        label={form.city} 
        id="city" 
        name="city"
        onChange={(option) => handleFieldChange('city', option)}
      />
      {signUpData.fieldErrors.city && <StyledError>{signUpData.fieldErrors.city}</StyledError>}
      <FormInput 
        variant="signup"
        type="textarea" 
        id="justifyMembership" 
        name="justifyMembership" 
        required
        value={signUpData.justifyMembership}
        onChange={(event) => handleFieldChange('justifyMembership', event.target.value)}
        label={form.justifyMembershipLabel} />
      {signUpData.fieldErrors.justifyMembership && <StyledError>{signUpData.fieldErrors.justifyMembership}</StyledError>}
      <Fieldset />
      {signUpData.fieldErrors.workStatus && <StyledError>{signUpData.fieldErrors.workStatus}</StyledError>}
      {signUpData.fieldErrors.otherText && <StyledError>{signUpData.fieldErrors.otherText}</StyledError>}
      {signUpData.submitError && (
        <StyledStatusMessage $isSuccess={signUpData.isSuccess}>{signUpData.submitError}</StyledStatusMessage>
      )}
      <Button
        type="submit"
        text={signUpData.isSubmitting ? "Skapar konto..." : form.button.signUp} 
        variant="loggaIn-login" disabled={signUpData.isSubmitting}/>
    </StyledForm>
  )
}