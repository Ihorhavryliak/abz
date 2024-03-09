import { formActions } from '@/redux/slice/FormSlice'
import { AppDispatch } from '@/redux/store'
import { useForm, SubmitHandler, Resolver } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
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
const schema = yup
  .object({
    name: yup.string().required().min(2, 'Should be at least 2 characters').max(60, 'Should be at most 60 characters'),
    email: yup.string().required().email('Entered not valid email'),
    phone: yup
      .string()
      .required('Phone number is required')
      .matches(/^\+380\d*$/, 'Phone number should start with the code of Ukraine +380'),
  })
  .shape({
    file: yup
      .mixed()
      .test('required', 'You need to provide a file', (value: any) => {
        return value && value?.length
      })
      .test('fileSize', 'The file is too large', (value: any, context) => {
        return value && value[0] && value[0].size <= 200000
      })
      .test('type', 'We only support jpeg', function (value: any) {
        return value && value[0] && value[0].type === 'image/jpeg'
      }),
  })

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

  const onSubmit: SubmitHandler<inputFieldType> = (data) => {
    debugger
    dispatch(formActions.setData({ field: 'nameCompany', value: data.nameCompany }))
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
      validation: {
        required: 'required',
        minLength: {
          value: 2,
          message: 'Should be min 2 characters',
        },
        maxLength: {
          value: 60,
          message: 'Should be max 60 characters',
        },
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
        pattern: {
          value:
            /^(?:(?:"[^"]*"|[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+)@(?:\[(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-zA-Z0-9-]*\.[a-zA-Z]{2,}\])|(?:[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}))$/,
          message: 'Entered not valid email',
        },
      },
    },
    {
      id: 'useFormData3',
      name: 'phone',
      type: 'text',
      label: 'Phone',
      placeholder: '',
      value: '',
      error: '',
      validation: {
        required: 'required',
        pattern: {
          value: /^\+380\d*$/,
          message: 'Phone number, should start with code of Ukraine +380',
        },
      },
    },
    {
      id: 'useFormData3',
      name: 'file',
      type: 'file',
      label: 'Phone',
      placeholder: '',
      value: '',
      error: '',
      validation: {
        required: 'required',
        lessThan5MB: (file: File) => {
          debugger
          return file.size < 5000000 || 'Max 5MB'
        },
        acceptedFormats: (file: File) => ['image/jpeg'].includes(file.type) || 'Only JPEG',
        resolution: async (file: File) => {
          const image = new Image()
          image.src = URL.createObjectURL(file)

          return new Promise((resolve, reject) => {
            image.onload = () => {
              const width = image.width
              const height = image.height

              const isResolutionValid = width >= 70 && height >= 70
              resolve(isResolutionValid || 'Minimum resolution is 70x70px')
            }

            image.onerror = () => {
              reject('Failed to load the image. Please try again.')
            }
          })
        },
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
