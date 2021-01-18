//Date and time vars
const now = new Date();
let day = now.getDate();
let month = now.getMonth();
let year = now.getFullYear();
let monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
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

//let scheduleOfDay = '';
//let scheduleName = '';

//Header and footer of page
//$('.data-day-header').html('<h1><b>' + dayDate + '</b></h1>');
$('.data-day-footer').html(currentTime);

let headMain = document.getElementById('day-header');

let divHeadLeftMonth = document.createElement('div');
divHeadLeftMonth.id = "nav-mm-left";
divHeadLeftMonth.className = "nav-mm-left";
divHeadLeftMonth.innerHTML = '<a href="https://google.com">&laquo;</a>';
headMain.appendChild(divHeadLeftMonth);

let divHeadLeftWeek = document.createElement('div');
divHeadLeftWeek.id = "nav-ww-left";
divHeadLeftWeek.className = "nav-ww-left";
divHeadLeftWeek.innerHTML = '<a href="https://google.com">&lsaquo;</a>';
headMain.appendChild(divHeadLeftWeek);

let divHeadLeftDay = document.createElement('div');
divHeadLeftDay.id = "nav-dd-left";
divHeadLeftDay.className = "nav-dd-left";
divHeadLeftDay.innerHTML = '<a href="https://google.com">&darr;</a>';
headMain.appendChild(divHeadLeftDay);

let divHeadCenter = document.createElement('div');
divHeadCenter.id = "header-date";
divHeadCenter.className = "header-date";
divHeadCenter.innerHTML = ' <h1><b><a href="https://google.com">' + dayDate + '</a></b></h1> ';
headMain.appendChild(divHeadCenter);

let divHeadRightDay = document.createElement('div');
divHeadRightDay.id = "nav-dd-right";
divHeadRightDay.className = "nav-dd-right";
divHeadRightDay.innerHTML = '<a href="https://google.com">&uarr;</a>';
headMain.appendChild(divHeadRightDay);

let divHeadRightWeek = document.createElement('div');
divHeadRightWeek.id = "nav-ww-right";
divHeadRightWeek.className = "nav-ww-right";
divHeadRightWeek.innerHTML = '<a href="https://google.com">&rsaquo;</a>';
headMain.appendChild(divHeadRightWeek);

let divHeadRightMonth = document.createElement('div');
divHeadRightMonth.id = "nav-mm-right";
divHeadRightMonth.className = "nav-mm-right";
divHeadRightMonth.innerHTML = '<a href="https://google.com">&raquo;</a>';
headMain.appendChild(divHeadRightMonth);

/*let mmA = document.createElement('a');
mmA.href = "https://google.com";
mmA.innerText = 'Month Back';
divHead.appendChild(mmA);*/
//document.getElementsByClassName('data-day-header').appendChild(divHead);



//HTML container
let dayFragment = document.createDocumentFragment();
for (let i = 0; i < 24; i++) {

    //Add row for hours and items
    let divRow = document.createElement('div');
    divRow.id = "day-row-" + i;
    divRow.className = "day-row";

    //Add hours to page
    let div = document.createElement('div');
    div.id = "day-hour-" + i;
    div.className = "day-col-hour";
    if (i < 10) {
        div.innerHTML = '0' + i + ':00';
    } else {
        div.innerHTML = i + ':00';
    }
    divRow.appendChild(div);

    //Add item of scheduler
    let div2 = document.createElement('div');
    div2.id = "day-schedule-" + i;
    div2.className = "day-col-schedule";

    //Add link to details of the item
    let a = document.createElement('a');
    a.href = "https://google.com"
    a.innerText = 'url_g' + i;
    div2.appendChild(a);
    divRow.appendChild(div2);

    dayFragment.appendChild(divRow);
}
document.getElementById('day-body').appendChild(dayFragment);