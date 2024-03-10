import { formActions } from '@/redux/slice/FormSlice'
import { AppDispatch } from '@/redux/store'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useDispatch } from 'react-redux'

import { yupResolver } from '@hookform/resolvers/yup'
import { schema } from '../validationShema/validationShema'

export type ErrorUserFormType = {
  [key: string]: { message: string }
}
export type InputFieldNameType = {
  name?: string
  email?: string
  phone?: string
  file?: File | unknown | undefined
}
export type InputFieldNameKeyType = keyof InputFieldNameType

export type DataInputType = {
  id: string
  name: string
  type: string
  placeholder: string
  value: string
  error: string
  label?: string
}

const useFormData = () => {
  const dispatch: AppDispatch = useDispatch()
  const resolver = yupResolver(schema)
  const {
    handleSubmit,
    formState: { errors },
    register,
    watch,
  } = useForm({ resolver })
  const errorData = errors as ErrorUserFormType

  const onSubmit: SubmitHandler<InputFieldNameType> = (data) => {
    dispatch(formActions.setData({ field: 'nameCompany', value: data.name }))
  }

  const dataInput = [
    {
      id: 'useFormData1',
      name: 'name',
      type: 'text',
      label: 'Your name',
      placeholder: '',
      value: '',
      error: '',
    },
    {
      id: 'useFormData2',
      name: 'email',
      type: 'email',
      label: 'Email',
      placeholder: '',
      value: '',
      error: '',
    },
    {
      id: 'useFormData3',
      name: 'phone',
      type: 'text',
      label: 'Phone',
      placeholder: '',
      value: '',
      error: '',
    },
  ]
  const dataFileInput = [
    {
      id: 'useFormData3',
      name: 'file',
      type: 'file',
      label: 'Phone',
      placeholder: '',
      value: '',
      error: '',
    },
  ]
  return {
    dataInput,
    dataFileInput,
    register,
    handleSubmit,
    error: errorData,
    onSubmit,
    watch,
  }
}

export default useFormData
