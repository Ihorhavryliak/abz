const addStorage = async (name: string, value: any) => {
  try {
    if (typeof window !== 'undefined') {
      localStorage.setItem(name, JSON.stringify(value))
    }
  } catch (error) {
    console.log(error)
  }
}

const removeStorage = async (name: string) => {
  try {
    if (typeof window !== 'undefined') {
      localStorage.removeItem(name)
    }
  } catch (error) {
    console.log(error)
  }
}

const getStorage = (name: string) => {
  try {
    if (typeof window !== 'undefined') {
      const data = localStorage.getItem(name)
      return data && JSON.parse(data)
    }
  } catch (error) {
    console.log(error)
  }
}

const storage = {
  addStorage,
  removeStorage,
  getStorage,
}
export default storage
