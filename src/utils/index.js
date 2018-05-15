export const timeOut = (max = 600, min = 20) => {
  return Math.floor(Math.random() * (max - min + 1) + min)
}
