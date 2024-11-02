function Ex1(){
const now = new Date();
const day = now.getDate();
const dayOfWeek = now.getDay();
const monthIndex = now.getMonth();
const year = now.getFullYear();
const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const dayName = daysOfWeek[dayOfWeek]; 
const monthsOfYear = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const monthName = monthsOfYear[monthIndex];
return (
    <>
    <h1>Today: ${dayName}</h1>
    <h1>Date: ${day}</h1>
    <h1>Month: ${monthName}</h1>
    <h1>Year:${year}</h1>
    </>
)
}
export default Ex1;