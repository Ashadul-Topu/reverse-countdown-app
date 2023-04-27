const setTime = "27 April 2023 2:25:00 PM";


document.getElementById('set-time').innerHTML = setTime;
const inputs = document.querySelectorAll('input')

const clock = () =>{
    const endDate = new Date(setTime) // convert setTime to Date object
    const newDate = new Date() // create new Date object

    // find difference between current (newDate) and set time (endDate) date and convert milliseconds to  seconds
    const differenceTime = (endDate - newDate) / 1000;

    if(differenceTime <0) return; // stop countdown minus value

    inputs[0].value = Math.floor(differenceTime / 3600 / 24) //first differenceTime divided by hours then divided by days 
    inputs[1].value = Math.floor((differenceTime / 3600) % 24) //first differenceTime divided by hours then modulus by days 
    inputs[2].value = Math.floor((differenceTime / 60) % 60 ) //first divided differenceTime by hours then modulus by minutes 
    inputs[3].value = (Math.floor(differenceTime % 60 ));

    // console.log(days);
    //console.log(differenceTime);
    // console.log(endDate);
    // console.log(newDate);
}

// note
// 1 day = 24 hours
// 1 hours = 60 minute
// 60 minutes = 3600 seconds

setInterval(() => {
    clock()
}, 1000);