monthName = {
    "Jan": "Jan",
    "Feb": "Feb",
    "Mar": "Mar",
    "Apr": "Apr",
    "May": "May",
    "Jun": "Jun",
    "Jul": "Jul",
    "Aug": "Aug",
    "Sep": "Sept",
    "Oct": "Oct",
    "Nov": "Nov",
    "Dec": "Dec"
}

daysOfTheWeek = {
    "Sun": "Sun",
    "Mon": "Mon",
    "Tue": "Tue",
    "Wed": "Wed",
    "Thu": "Thurs",
    "Fri": "Fri",
    "Sat": "Sat"
}

// get selected date

function selectedDate() {
    // create a date string that the date object understands
    with(document.dateValue) {
        dateStr = [dayMonth[dayMonth.selectedIndex].value,
            monthName[monthName.selectedIndex].value,
            yearSelect[yearSelect.selectedIndex].value
        ].join(" ");
    } // end of with

    res = new Date(dateStr + " 00:00:00");

    conceive = res.toUTCString().slice(0, 16);
    // console.log(conceive)
    // gestation 
    gestation = ((365 / 4) * 3) + 14;
    // console.log(gestation)
    res.setDate(gestation);
    birth = res.toUTCString().slice(0, 16);

    const eddResult = document.getElementById("edd-result");
    // generate a message
    str = "Your expected delivery date is " + birth
    // replace days of week and month names
    str = str.replace(conceive.slice(0, 3), daysOfTheWeek[conceive.slice(0, 3)]);
    str = str.replace(conceive.slice(8, 11), monthName[conceive.slice(8, 11)]);
    str = str.replace(birth.slice(0, 3), daysOfTheWeek[birth.slice(0, 3)]);
    str = str.replace(birth.slice(8, 11), monthName[birth.slice(8, 11)]);

    document.dateValue.outputMessage.innerHTML = str;
    eddResult.innerText = str;
}

const presentPageBody = document.querySelector('body');
const showEddForm = () => {
    const edd = document.getElementById("edd");
    const edd2 = document.getElementById("edd2")
    // console.log(edd)
    const dateForm = document.getElementById("date-form");
    edd.addEventListener('click', () => {
        dateForm.classList.toggle("due-date")
    });
    edd2.addEventListener('click', () => {
        dateForm.classList.toggle("due-date");
    })
}
if(presentPageBody.classList.contains("dash-body")){
    showEddForm();
}