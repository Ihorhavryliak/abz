export const transformValueSliderToNumber = (val: number) => {
  switch (val) {
    case 0:
      return 0
    case 25:
      return 2
    case 50:
      return 3
    case 75:
      return 4
    case 100:
      return 5
    default:
      return 1
  }
}
