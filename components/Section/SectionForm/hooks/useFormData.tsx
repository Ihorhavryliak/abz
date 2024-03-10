import { AppDispatch } from '@/redux/store'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useDispatch } from 'react-redux'

import { yupResolver } from '@hookform/resolvers/yup'
import { schema } from '../validationShema/validationShema'
import { fetchCreateUser, usersActions } from '@/redux/slice/UsersSlice'

export type ErrorUserFormType = {
  [key: string]: { message: string }
}
export type InputFieldNameType = {
  name?: string
  email?: string
  phone?: string
  file?: FileList | unknown | undefined
  position: string
}
export type InputFieldNameKeyType = keyof InputFieldNameType

export type DataInputType = {
  name: string
  type: string
  placeholder: string
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
    dispatch(fetchCreateUser(data))
  }

  const dataInput = [
    {
      name: 'name',
      type: 'text',
      label: 'Your name',
      placeholder: '',
    },
    {
      name: 'email',
      type: 'email',
      label: 'Email',
      placeholder: '',
    },
    {
      name: 'phone',
      type: 'text',
      label: 'Phone',
      placeholder: '',
    },
  ]
  const dataFileInput = [
    {
      name: 'file',
      type: 'file',
      label: 'Phone',
      placeholder: '',
    },
    {
      name: 'position',
      type: 'radio',
      label: '',
      placeholder: '',
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
