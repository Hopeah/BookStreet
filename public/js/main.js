//Getting today's date for a feed
let todayDate = new Date().toDateString()
const todayDayString = todayDate.split(' ')[0]
const todayMonth = todayDate.split(' ')[1]
const todayDay = todayDate.split(' ')[2]
const todayYear = todayDate.split(' ')[3]

document.getElementById("todayDate").innerHTML = `${todayMonth} ${todayDay}, ${todayYear}`