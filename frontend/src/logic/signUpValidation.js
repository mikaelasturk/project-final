const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const PASSWORD_REGEX = /^(?=.*[A-ZÅÄÖ])(?=.*[a-zåäö])(?=.*\d).{8,}$/
const WORK_STATUS_KEYS = ['worker', 'owner', 'startUp', 'searching', 'other']

const hasSelectedWorkStatus = (workStatus = {}) =>
  WORK_STATUS_KEYS.some((key) => Boolean(workStatus?.[key]))

const validators = {
  firstName: (value) => {
    const trimmed = String(value || '').trim()
    if (!trimmed) return 'Fyll i ditt förnamn!'
    return trimmed.length >= 2 ? '' : 'Förnamnet måste vara minst 2 tecken.'
  },
  lastName: (value) => {
    const trimmed = String(value || '').trim()
    if (!trimmed) return 'Fyll i ditt efternamn!'
    return trimmed.length >= 2 ? '' : 'Efternamnet måste vara minst 2 tecken.'
  },
  email: (value) => {
    const emailValue = String(value || '').trim()
    if (!emailValue) return 'Fyll i din e-postadress!'
    return EMAIL_REGEX.test(emailValue) ? '' : 'Ange en giltig e-postadress.'
  },
  password: (value) => {
    const passwordValue = String(value || '')
    if (!passwordValue) return 'Fyll i ditt lösenord!'
    if (passwordValue.length < 8) return 'Lösenordet måste vara minst 8 tecken.'
    if (!PASSWORD_REGEX.test(passwordValue)) return 'Lösenordet måste innehålla minst en siffra, en stor bokstav och en liten bokstav.'
    return ''
  },
  city: (value) => value ? '' : 'Välj din stad!',
  workStatus: (value) => hasSelectedWorkStatus(value) ? '' : 'Välj minst ett alternativ.',
  justifyMembership: (value) => {
    const trimmed = String(value || '').trim()
    if (!trimmed) return 'Fyll i din motivering!'
    return trimmed.length >= 10 ? '' : 'Motiveringen måste vara minst 10 tecken.'
  }
}

export const validateSignUpField = (field, value) => validators[field]?.(value) || ''

export const validateSignUpForm = (signUpData) => {
  const errors = Object.entries(validators).reduce((collectedErrors, [field, validate]) => {
    const message = validate(signUpData[field])
    if (message) {
      collectedErrors[field] = message
    }
    return collectedErrors
  }, {})

  if (signUpData?.workStatus?.other && !String(signUpData?.workStatus?.otherText || '').trim()) {
    errors.otherText = 'Fyll i annat.'
  }

  return errors
}