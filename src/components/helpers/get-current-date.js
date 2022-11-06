export function getCurrentDate() {
    const currentDate = new Date()

    const dayFix = currentDate.getDate() < 10 ? `0${currentDate.getDate()}` : currentDate.getDate()
    const monthFix = currentDate.getMonth() < 10 ? `0${currentDate.getMonth()}` : currentDate.getMonth()

    const date = `${dayFix}/${monthFix + 1}/${currentDate.getFullYear()}`

    return date
}