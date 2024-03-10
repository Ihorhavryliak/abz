import { UserType, userApi } from '@/api/userApi'

const getAllUsers = async () => {
  let page = 1
  let successRequest = true
  let createData = [] as UserType[]

  while (successRequest) {
    const response = await userApi.get(page, 100)
    const usersResponse = response.users || []
    createData = [...createData, ...usersResponse]
    if (response.page === page) {
      successRequest = false
      break
    }
    page++
  }

  return createData.sort((a, b) => b.registration_timestamp - a.registration_timestamp)
}

export default getAllUsers
