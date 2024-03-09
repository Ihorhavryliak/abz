import { useEffect, useState } from 'react'

const useChangePositionLabel = () => {
  const [isFocus, setIsFocus] = useState(false)

  const handleFocus = () => {
    setIsFocus(!isFocus)
  }

  const handleClickOutside = (e: MouseEvent) => {
    const inputElement = document.getElementById('floating_outlined')

    if (inputElement && !inputElement.contains(e.target as Node)) {
      setIsFocus(false)
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleClickOutside)

    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [])

  return { handleFocus, isFocus }
}

export default useChangePositionLabel
