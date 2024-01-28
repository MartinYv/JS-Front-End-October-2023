function scheduleAppointments(input){

    let schedule = {};

    for (let row of input) {
        
        let tokens = row.split(" ");

        let day = tokens[0];
        let appointer = tokens[1];

        if (schedule.hasOwnProperty(day)) {
            console.log(`Conflict on ${day}!`);
        }
        else{
            schedule[day] = appointer;
            console.log(`Scheduled for ${day}`);
        }
    }

    for (let key in schedule) {
     console.log(`${key} -> ${schedule[key]}`);
    }
}


scheduleAppointments(['Monday Peter', 'Wednesday Bill', 'Monday Tim', 'Friday Tim']);