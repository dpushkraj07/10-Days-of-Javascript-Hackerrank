function getDayName(dateString) {
    let days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    let dayName = new Date(dateString);
    let d = dayName.getDay();


    // Write your code here

    return days[d];
}
