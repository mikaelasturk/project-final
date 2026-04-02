import styled from 'styled-components'
import { useContentStore } from '../../../store/contentStore'
import { Button } from '../../reusable/ui/Button'
import { FormInput } from "../../reusable/ui/FormInput"

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 30px;
`

const StyledContentContainer = styled.div`

`



export const SignUpForm = () => {
  const { logInContent } = useContentStore()
  const { form } = logInContent

  return (
    <StyledForm>
      <StyledContentContainer>
        <FormInput type="name" id="name" name="name" label={form.name} />
        <FormInput type="email" id="email" name="email" label={form.email} />
         <FormInput type="password" id="password" name="password" label={form.password} />
      </StyledContentContainer>
      <Button text={form.button.signUp} variant="loggaIn-login"/>
    </StyledForm>

  )
}