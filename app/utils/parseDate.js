export function getItemDate(date, type){
    let data = new Date(date)

    
    if(type === 'year') {
        let year = data.getFullYear()
        console.log("Month: ", year)
        return year; 
    } 
    else if(type === 'month') { 
        
        let month = data.getMonth()
        return month;
    }
    else if(type === 'day') {
        let day = data.getDate()
        return day;
    }  
    else if(type === 'hour') {
        let hour = data.getHours()
        return hour;
    }
    else if(type === 'minute') {
        let minute = data.getMinutes()
        return minute;
    }
}

export function getFullHour(date) {
    let data = new Date(date)
    let hour = data.getHours()
    let minute = data.getMinutes()
    return `${hour}:${minute}`
}

export function getFullYear(date) {
    let data = new Date(date)
    let year = data.getFullYear()
    let month = data.getMonth()
    let day = data.getDate()
    return `${year}/${month}/${day}`
}

export function getFullMonth(date) {
    let data = new Date(date)
    let month = data.getMonth()
    let day = data.getDate()
    return `${month}/${day}`
}

export function getFullDay(date) {
    let data = new Date(date)
    let day = data.getDate()
    let hour = data.getHours()
    let minute = data.getMinutes()
    return `${day} ${hour}:${minute}`
}


