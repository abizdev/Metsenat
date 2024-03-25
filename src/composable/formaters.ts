export const formatDate = (inputDateString: string): string => {
  const dateObj = new Date(inputDateString)

  const year: number = dateObj.getFullYear()
  const month: string = dateObj.getMonth() + 1 < 10 ? `0${dateObj.getMonth() + 1}` : `${dateObj.getMonth() + 1}`
  const day: string = dateObj.getDate() < 10 ? `0${dateObj.getDate()}` : `${dateObj.getDate()}`

  return `${day}.${month}.${year}`
}

export const formatPhone = (phone: string): string => {
  const numericString = phone.replace(/\D/g, '');
  const formatedString = numericString.replace(/^(\d{5})(\d{3})(\d{2})(\d{2})$/, '+$1 $2-$3-$4');

  return formatedString
}

export const formatSum = (sum: number) => {
  return sum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")
}