import { create } from 'zustand'

const getInitialSignUpData = () => ({
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  city: null,
  justifyMembership: '',
  workStatus: {
    worker: false,
    owner: false,
    startUp: false,
    searching: false,
    other: false,
    otherText: ''
  },
  fieldErrors: {},
  submitError: '',
  isSuccess: false,
  isSubmitting: false
})

const getInitialLoginData = () => ({
  email: '',
  password: '',
  fieldErrors: {},
  submitError: '',
  isSubmitting: false
})

export const useFormStore = create((set) => ({

  //signup form state
  signUpData: getInitialSignUpData(),

  setSignUpField: (field, value) => 
    set((state) => ({
      signUpData: { ...state.signUpData, [field]: value}
    })),

  setSignUpFieldErrors: (fieldErrors) =>
    set((state) => ({
      signUpData: { ...state.signUpData, fieldErrors }
    })),

  clearSignUpFieldError: (field) =>
    set((state) => {
      if (!state.signUpData.fieldErrors[field]) {
        return state
      }

      const nextErrors = { ...state.signUpData.fieldErrors }
      delete nextErrors[field]

      return {
        signUpData: { ...state.signUpData, fieldErrors: nextErrors }
      }
    }),

  setSignUpSubmitError: (submitError, isSuccess = false) =>
    set((state) => ({
      signUpData: { ...state.signUpData, submitError, isSuccess }
    })),

  setWorkStatus: (value, checked) => 
    set((state) => ({
      signUpData: {
        ...state.signUpData, 
        workStatus: {...state.signUpData.workStatus, [value]: checked}
      }
    })),

  setOtherText: (text) => 
    set((state) => ({
      signUpData: {
        ...state.signUpData,
        workStatus: {...state.signUpData.workStatus, otherText: text}
      }
    })),

  setSignUpSubmitting: (isSubmitting) =>
    set((state) => ({
      signUpData: {...state.signUpData, isSubmitting}
    })),

  resetSignUp: () => set({ signUpData: getInitialSignUpData() }),

  //login form state
  loginData: getInitialLoginData(),

  setLoginField: (field, value) =>
    set((state) => ({
      loginData: {...state.loginData, [field]: value}
    })),

  setLoginSubmitError: (submitError) =>
    set((state) => ({
      loginData: {...state.loginData, submitError}
    })),

  setLoginFieldErrors: (fieldErrors) =>
    set((state) => ({
      loginData: {...state.loginData, fieldErrors}
    })),

  clearLoginFieldError: (field) =>
    set((state) => {
      if (!state.loginData.fieldErrors[field]) return state
      const nextErrors = { ...state.loginData.fieldErrors }
      delete nextErrors[field]
      return { loginData: { ...state.loginData, fieldErrors: nextErrors } }
    }),

  setLoginSubmitting: (isSubmitting) =>
    set((state) => ({
      loginData: {...state.loginData, isSubmitting}
    })),

  resetLogin: () => set({ loginData: getInitialLoginData()} )

}))