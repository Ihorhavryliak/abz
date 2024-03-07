const addStorage = async (name: string, value: any) => {
  localStorage.setItem(name, JSON.stringify(value))
}

const removeStorage = async (name: string) => {
  localStorage.removeItem(name)
}

const getStorage = (name: string) => {
  const data = localStorage.getItem(name)
  return data && JSON.parse(data)
}

const storage = {
  addStorage,
  removeStorage,
  getStorage,
}
export default storage
