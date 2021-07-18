var year = "";
var month = "";
var date = "";
var hour = "";
var min = "";
var sec = "";
var ms = "";
var monthText = "";
var dayText = "";


var getTime = function() {

    var year = dayjs().get('year');
    var month = dayjs().get('month');
    var date = dayjs().day();
    var hour = dayjs().get('hour');
    var min = dayjs().get('minute');
    var sec = dayjs().get('second');
    var ms = dayjs().get('millisecond');


    console.log(year);
    console.log(month);
    console.log(date);
    console.log(hour);
    console.log(min);
    console.log(sec);
    console.log(ms);
};

var appendDate = function() {
    var currentDate = document.getElementById('currentDay');
    

}

getTime();