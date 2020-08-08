interface IValidInput {
  error: boolean
  message: string
}

export const validateInput = (title: string): IValidInput => {
  if (title.trim().length === 0) {
    return {
      error: true,
      message: 'Title can not be empty!',
    }
  } else if (Number(title)) {
    return {
      error: true,
      message: 'Title can not be a number!',
    }
  }
  return {
    error: false,
    message: '',
  }
}
