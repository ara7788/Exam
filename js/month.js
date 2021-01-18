//Date and time vars
const now = new Date();
let day = now.getDate();
let month = now.getMonth();
let year = now.getFullYear();
const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const monthFullNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];
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
let dayDate = day + ' ' + monthNames[month] + ' ' + year;
let currentTime = hour + ':' + minutes + ':' + seconds;

$('.data-month-header').html(monthFullNames[month]);
$('.data-month-footer').html(currentTime);

//Month calendar creation

let headerFragment = document.createDocumentFragment();
let monthRow = document.getElementById('month-body');
let arrBodyHeaders = ["month-body-header", "month-body-menu"];

let headDayOfWeek = document.createDocumentFragment();
let menuDayOfWeek = document.createDocumentFragment();

for (let i = 0; i < arrBodyHeaders.length; i++) {
    let div = document.createElement('div');
    div.id = arrBodyHeaders[i];
    div.className = arrBodyHeaders[i];
    if (arrBodyHeaders[i].match('month-body-header')) {
        for (let j = 0; j < daysNames.length; j++) {
            let div = document.createElement('div');
            div.id = daysNames[j];
            div.className = "day-of-ww";
            div.innerText = daysNames[j];
            headDayOfWeek.appendChild(div);
        }
    } else {
        for (let h = 0; h < 31; h++) {
            let div = document.createElement('div');
            div.id = 'day-of-mm-' + h;
            div.className = "day-of-mm";
            div.innerText = parseInt(h) + 1;
            menuDayOfWeek.appendChild(div);
        }
    }
    headerFragment.appendChild(div);
}
monthRow.appendChild(headerFragment);

let x = document.getElementById('month-body-header');
console.log(x);
x.appendChild(headDayOfWeek);
let y = document.getElementById('month-body-menu');
console.log(y);
y.appendChild(menuDayOfWeek);
console.log(monthFullNames[month]);