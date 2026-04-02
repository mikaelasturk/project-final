// [x] Make components for inputfields?
// [ ] Connect form to backend
// [x] Connect form to content store

import styled from 'styled-components'
import { useContentStore } from '../../../store/contentStore'
import { Button } from '../../reusable/ui/Button'
import { FormInput } from "../../reusable/ui/FormInput"
//import { CardTitle } from '../components/reusable/typography/typography'

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 30px;
`

const StyledContentContainer = styled.div`

`



export const LogInForm = () => {
  const { logInContent } = useContentStore()
  const { form } = logInContent

  return (
    <StyledForm>
      <StyledContentContainer>
        <FormInput type="email" id="email" name="email" label={form.email} />
         <FormInput type="password" id="password" name="password" label={form.password} />
      </StyledContentContainer>
      <Button text={form.button.logIn} variant="loggaIn-login"/>
    </StyledForm>

  )
}

