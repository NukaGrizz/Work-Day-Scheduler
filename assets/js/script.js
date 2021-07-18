var year = "";
var month = "";
var date = "";
var hour = "";
var monthText = "";
var weekDay = "";
var day = "";
var nineAmBlock = document.getElementById('9am-input');
var tenAmBlock = document.getElementById('10am-input');
var elevenAmBlock = document.getElementById('11am-input');
var twelvePmBlock = document.getElementById('12pm-input');
var onePmBlock = document.getElementById('1pm-input');
var twoPmBlock = document.getElementById('2pm-input');
var threePmBlock = document.getElementById('3pm-input');
var fourPmBlock = document.getElementById('4pm-input');
var fivePmBlock = document.getElementById('5pm-input');


var getTime = function() {

    year = dayjs().get('year');
    month = dayjs().get('month');
    date = dayjs().date();
    weekDay = dayjs().day();
    hour = dayjs().get('hour');

    console.log(year);
    console.log(month);
    console.log(day);
    console.log(hour);
    appendDate();
};

var appendDate = function() {
    var currentDate = document.getElementById('currentDay');

    switch (weekDay) {
        case 0:
            day = "Sunday";
            break;
        case 1:
            day = "Monday";
            break;
        case 2:
            day = "Tuesday";
            break;
        case 3:
            day = "Wednesday";
            break;
        case 4:
            day = "Thursday";
            break;
        case 5:
            day = "Friday";
            break;
        case 6:
            day = "Saturday";
            break;
    }

    switch (month) {
        case 0:
            monthText = "January";
            break;
        case 1:
            monthText = "Febuary";
            break;
        case 2:
            monthText = "March";
            break;
        case 3:
            monthText = "April";
            break;
        case 4:
            monthText = "May";
            break;
        case 5:
            monthText = "June";
            break;
        case 6:
            monthText = "July";
            break;
        case 7:
            monthText = "August";
            break;
        case 8:
            monthText = "September";
            break;
        case 9:
            monthText = "October";
            break;
        case 10:
            monthText = "November";
            break;
        case 11:
            monthText = "December";
            break;
    }

    console.log(monthText);
    console.log(day)
    currentDate.textContent = day + ", " + monthText + " " + date;
    schedulerHourColor()
};

var schedulerHourColor = function() {
    nineAmBlock.classList.remove("present");
    nineAmBlock.classList.remove("past");
    nineAmBlock.classList.remove("future");
    tenAmBlock.classList.remove("present");
    tenAmBlock.classList.remove("past");
    tenAmBlock.classList.remove("future");
    elevenAmBlock.classList.remove("present");
    elevenAmBlock.classList.remove("past");
    elevenAmBlock.classList.remove("future");
    twelvePmBlock.classList.remove("present");
    twelvePmBlock.classList.remove("past");
    twelvePmBlock.classList.remove("future");
    onePmBlock.classList.remove("present");
    onePmBlock.classList.remove("past");
    onePmBlock.classList.remove("future");
    twoPmBlock.classList.remove("present");
    twoPmBlock.classList.remove("past");
    twoPmBlock.classList.remove("future");
    threePmBlock.classList.remove("present");
    threePmBlock.classList.remove("past");
    threePmBlock.classList.remove("future");
    fourPmBlock.classList.remove("present");
    fourPmBlock.classList.remove("past");
    fourPmBlock.classList.remove("future");
    fivePmBlock.classList.remove("present");
    fivePmBlock.classList.remove("past");
    fivePmBlock.classList.remove("future");

    switch (hour) {
        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
        case 8:
            nineAmBlock.classList.add("future");
            tenAmBlock.classList.add("future");
            elevenAmBlock.classList.add("future");
            twelvePmBlock.classList.add("future");
            onePmBlock.classList.add("future");
            twoPmBlock.classList.add("future");
            threePmBlock.classList.add("future");
            fourPmBlock.classList.add("future");
            fivePmBlock.classList.add("future");
            break;
        case 9:
            nineAmBlock.classList.add("present");
            tenAmBlock.classList.add("future");
            elevenAmBlock.classList.add("future");
            twelvePmBlock.classList.add("future");
            onePmBlock.classList.add("future");
            twoPmBlock.classList.add("future");
            threePmBlock.classList.add("future");
            fourPmBlock.classList.add("future");
            fivePmBlock.classList.add("future");
            break;
        case 10:
            nineAmBlock.classList.add("past");
            tenAmBlock.classList.add("present");
            elevenAmBlock.classList.add("future");
            twelvePmBlock.classList.add("future");
            onePmBlock.classList.add("future");
            twoPmBlock.classList.add("future");
            threePmBlock.classList.add("future");
            fourPmBlock.classList.add("future");
            fivePmBlock.classList.add("future");
            break;
        case 11:
            nineAmBlock.classList.add("past");
            tenAmBlock.classList.add("past");
            elevenAmBlock.classList.add("present");
            twelvePmBlock.classList.add("future");
            onePmBlock.classList.add("future");
            twoPmBlock.classList.add("future");
            threePmBlock.classList.add("future");
            fourPmBlock.classList.add("future");
            fivePmBlock.classList.add("future");
            break;
        case 12:
            nineAmBlock.classList.add("past");
            tenAmBlock.classList.add("past");
            elevenAmBlock.classList.add("past");
            twelvePmBlock.classList.add("present");
            onePmBlock.classList.add("future");
            twoPmBlock.classList.add("future");
            threePmBlock.classList.add("future");
            fourPmBlock.classList.add("future");
            fivePmBlock.classList.add("future");
            break;
        case 13:
            nineAmBlock.classList.add("past");
            tenAmBlock.classList.add("past");
            elevenAmBlock.classList.add("past");
            twelvePmBlock.classList.add("past");
            onePmBlock.classList.add("present");
            twoPmBlock.classList.add("future");
            threePmBlock.classList.add("future");
            fourPmBlock.classList.add("future");
            fivePmBlock.classList.add("future");
            break;
        case 14:
            nineAmBlock.classList.add("past");
            tenAmBlock.classList.add("past");
            elevenAmBlock.classList.add("past");
            twelvePmBlock.classList.add("past");
            onePmBlock.classList.add("past");
            twoPmBlock.classList.add("present");
            threePmBlock.classList.add("future");
            fourPmBlock.classList.add("future");
            fivePmBlock.classList.add("future");
            break;
        case 15:
            nineAmBlock.classList.add("past");
            tenAmBlock.classList.add("past");
            elevenAmBlock.classList.add("past");
            twelvePmBlock.classList.add("past");
            onePmBlock.classList.add("past");
            twoPmBlock.classList.add("past");
            threePmBlock.classList.add("present");
            fourPmBlock.classList.add("future");
            fivePmBlock.classList.add("future");
            break;
        case 16:
            nineAmBlock.classList.add("past");
            tenAmBlock.classList.add("past");
            elevenAmBlock.classList.add("past");
            twelvePmBlock.classList.add("past");
            onePmBlock.classList.add("past");
            twoPmBlock.classList.add("past");
            threePmBlock.classList.add("past");
            fourPmBlock.classList.add("present");
            fivePmBlock.classList.add("future");
            break;
        case 17:
            nineAmBlock.classList.add("past");
            tenAmBlock.classList.add("past");
            elevenAmBlock.classList.add("past");
            twelvePmBlock.classList.add("past");
            onePmBlock.classList.add("past");
            twoPmBlock.classList.add("past");
            threePmBlock.classList.add("past");
            fourPmBlock.classList.add("past");
            fivePmBlock.classList.add("present");
            break;
        case 18:
        case 19:
        case 20:
        case 21:
        case 22:
        case 23:
        case 24:
            nineAmBlock.classList.add("past");
            tenAmBlock.classList.add("past");
            elevenAmBlock.classList.add("past");
            twelvePmBlock.classList.add("past");
            onePmBlock.classList.add("past");
            twoPmBlock.classList.add("past");
            threePmBlock.classList.add("past");
            fourPmBlock.classList.add("past");
            fivePmBlock.classList.add("past");
            break;

    }

};

getTime();