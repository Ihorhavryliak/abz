import { formActions } from '@/redux/slice/FormSlice'
import { AppDispatch } from '@/redux/store'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useDispatch } from 'react-redux'

export type ErrorUserFormType = {
  [key: string]: { message: string }
}
export type inputFieldType = {
  nameCompany?: number
}
export type OptionsSelectType = {
  name: string
  value: string
}
export type DataInputType = {
  id: string
  name: string
  type: string
  placeholder: string
  value: string
  error: string
  validation: {
    required: string
    pattern?: undefined
  }
  optionsSelect?: OptionsSelectType
  label?: string
}

const useFormData = () => {
  const dispatch: AppDispatch = useDispatch()
  const {
    handleSubmit,
    formState: { errors },
    register,
    watch,
  trigger
  } = useForm()
  const errorData = errors as ErrorUserFormType

  const onSubmit: SubmitHandler<inputFieldType> = (data) => {
    dispatch(formActions.setData({ field: 'nameCompany', value: data.nameCompany }))
  }

  const dataInput = [
    {
      id: 'useFormData1',
      name: 'Your name',
      type: 'text',
      label: 'Your name',
      placeholder: '',
      value: '',
      error: '',
      validation: {
        required: 'Bitte geben Sie den Firmennamen ein.',
      },
    },
    {
      id: 'useFormData2',
      name: 'email',
      type: 'email',
      label: 'Email',
      placeholder: '',
      value: '',
      error: '',
      validation: {
        required: 'required',
      },
    },
    {
      id: 'useFormData3',
      name: 'phone',
      type: 'number',
      label: 'Phone',
      placeholder: '',
      value: '',
      error: '',
      validation: {
        required: 'required',
      },
    },
  ]

  return {
    dataInput,
    register,
    handleSubmit,
    errors: errorData,
    onSubmit,
    watch,
  }
}

export default useFormData
