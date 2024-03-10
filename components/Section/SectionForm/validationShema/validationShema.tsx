import * as yup from 'yup'

export const schema = yup
  .object({
    name: yup.string().required().min(2, 'Should be at least 2 characters').max(60, 'Should be at most 60 characters'),
    email: yup.string().required().email('Entered not valid email'),
    phone: yup
      .string()
      .required()
      .matches(/^\+380\d*$/, 'Phone number should start with the code of Ukraine +380'),
    position: yup.string().required('select your position'),
  })
  .shape({
    file: yup
      .mixed()
      .test('required', 'you need to provide a file', (value: any) => {
        return value && value?.length
      })
      .test('fileSize', 'The file is too large', (value: any, context) => {
        return value && value[0] && value[0].size <= 200000
      })
      .test('type', 'We only support jpeg', function (value: any) {
        return value && value[0] && value[0].type === 'image/jpeg'
      }),
  })
