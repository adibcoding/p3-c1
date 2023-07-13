export const dateConverter = (date) => {
    const newDate = new Date(date)
    return newDate.toDateString()
}