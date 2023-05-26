/**
 * Lo que hace esta función es recibir un objeto con la información de un mentor y la zona horaria del estudiante, y devuelve un array con los rangos de tiempo disponibles para el estudiante.
 */

import moment from "moment-timezone";



function getAvailability(mentor, studentTimezone) {
    // Create an empty array to store the range of times
    const range = [];

    // Iterate through each day of availability
    mentor.availability.forEach(day => {
        // Iterate through each time range for the day
        day.time.forEach(time => {
            // Get the start time and end time for the range
            const startTime = moment.tz(`${day.day} ${time.from}`, "dddd HH:mm", mentor.timezone);
            const endTime = moment.tz(`${day.day} ${time.to}`, "dddd HH:mm", mentor.timezone);

            // Create a variable to store the current time
            let currentTime = startTime.clone();

            // Use a while loop to iterate through the range of times for the day
            while (currentTime.isBefore(endTime)) {
                // Add the interval to the current time to get the end time of the class
                const classEndTime = currentTime.clone().add(mentor.interval, "minutes");

                // Convert the current time to the student's timezone
                const studentStartTime = currentTime.clone().tz(studentTimezone);
                const studentEndTime = classEndTime.clone().tz(studentTimezone);

                // Add the converted time to the range array
                range.push(`${studentStartTime.format("dddd HH:mm")} - ${studentEndTime.format("HH:mm")}`);

                // Add the margin to the end time of the class to get the start time of the next class
                currentTime = classEndTime.clone().add(mentor.margin, "minutes");
            }
        });
    });

    return range;
}

export { getAvailability }

const mentor = {
    timezone: 'America/Cancun',
    interval: 30,
    margin: 15,
    availability: [
        {
            day: 'Monday',
            time: [
                { from: '09:00', to: '12:00' },
                { from: '13:00', to: '17:00' },
            ]
        },
        {
            day: 'Tuesday',
            time: [
                { from: '09:00', to: '12:00' },
                { from: '13:00', to: '17:00' },
            ]
        },
    ]
};

getAvailability(mentor, "America/Bogota")