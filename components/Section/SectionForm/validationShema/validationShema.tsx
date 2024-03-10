import * as yup from 'yup'

export const schema = yup
  .object({
    name: yup.string().required().min(2, 'Should be at least 2 characters').max(60, 'Should be at most 60 characters'),
    email: yup.string().required().email('Entered not valid email'),
    phone: yup
      .string()
      .required()
      .matches(/^\+380\d*$/, 'Phone number should start with the code of Ukraine +380')
      .min(13, 'Phone number should be at least 13 characters')
      .max(13, 'Phone number should be at least 13 characters'),
    position: yup.string().required('select your position'),
  })
  .shape({
    file: yup
      .mixed()
      .test('required', 'you need to provide a file', (value: FileList | any) => {
        return value && value?.length
      })
      .test('fileSize', 'The file is too large', (value: FileList | any) => {
        return value && value[0] && value[0].size <= 200000
      })
      .test('type', 'We only support jpeg', function (value: FileList | any) {
        return value && value[0] && value[0].type === 'image/jpeg'
      })
      .test('minSize', 'Minimum size should be 70x70px', async function (value: FileList | any) {
        if (value && value[0]) {
          const file = value[0]
          try {
            const dimensions = await getImageDimensions(file)
            if (dimensions.width >= 70 && dimensions.height >= 70) {
              return true
            } else {
              false
            }
          } catch (error) {
            false
          }
        }
        return false
      }),
  })

async function getImageDimensions(file: File): Promise<{ width: number; height: number }> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = (e) => {
      const img = new Image()
      img.onload = () => {
        resolve({ width: img.width, height: img.height })
      }
      img.src = e.target?.result as string
    }

    reader.onerror = (error) => {
      reject(error)
    }

    reader.readAsDataURL(file)
  })
}
