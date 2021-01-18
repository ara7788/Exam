//Date and time vars
const now = new Date();
let dayOfWeek = now.getDay();
let dayOfMonth = now.getDate();
let month = now.getMonth();
let year = now.getFullYear();


const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const monthFullNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const daysNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const daysFullNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

let hour = now.getHours();
if (hour < 10) {
    hour = "0" + hour;
}
let minutes = now.getMinutes();
if (minutes < 10) {
    minutes = "0" + minutes;
}
let seconds = now.getSeconds();
if (seconds < 10) {
    seconds = "0" + seconds;
}
let dayDate = dayOfMonth + ' ' + monthNames[month] + ' ' + year;
let currentTime = hour + ':' + minutes + ':' + seconds;

$('.data-week-header').html(dayDate);
$('.data-week-footer').html(currentTime);


let y = document.createDocumentFragment();
let weekBody = document.getElementById('week-body');
let x1 = document.createDocumentFragment();
let x2 = document.createDocumentFragment();

for (let i = 0; i < daysFullNames.length; i++) {
    let div = document.createElement('div');
    div.id = 'week-body-day-row-' + i;
    div.className = 'week-body-day-row';
    //div.innerText = i;

    let divx1 = document.createElement('div');
    divx1.id = 'week-body-day-name-' + i;
    divx1.className = 'week-body-day-name';
    divx1.innerText = daysFullNames[i];

    let divx2 = document.createElement('div');
    divx2.id = 'week-body-day-schedule-' + i;
    divx2.className = 'week-day-schedule-list';
    divx2.innerText = 1;

    div.appendChild(divx1);
    div.appendChild(divx2);
    y.appendChild(div);

}
weekBody.appendChild(y);