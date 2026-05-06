import { create } from 'zustand'

const getInitialFormData = () => ({
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
  }
})

export const useFormStore = create((set) => ({
  formData: getInitialFormData(),

  setField: (field, value) => 
    set((state) => ({
      formData: { ...state.formData, [field]: value}
    })),

  setWorkStatus: (value, checked) => 
    set((state) => ({
      formData: {
        ...state.formData, 
        workStatus: {...state.formData.workStatus, [value]: checked}
      }
    })),

  setOtherText: (text) => 
    set((state) => ({
      formData: {
        ...state.formData,
        workStatus: {...state.formData.workStatus, otherText: text}
      }
    })),
    
  resetData: () => set({ formData: getInitialFormData() }),
}))