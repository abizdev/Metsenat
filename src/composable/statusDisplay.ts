export const statusDisplay = (status: string) => {
  const statusVariants = {
    default: 'text-slate-500',
    "Yangi": 'text-sky-500',
    "Moderatsiyada": 'text-orange-500',
    "Tasdiqlangan": 'text-lime-500',
  }

  return statusVariants[status]
}