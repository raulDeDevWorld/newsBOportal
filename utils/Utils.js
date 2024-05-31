function getDayMonthYear (setUserDayMonthYear) {

    const months = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic']
    const days = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado']
    const date = new Date();
    
    return setUserDayMonthYear ? setUserDayMonthYear(`${date.getDate()}-${months[date.getMonth()]}-${date.getUTCFullYear()}`) : `${date.getDate()}-${months[date.getMonth()]}-${date.getUTCFullYear()}`
    
}

function formatDayMonthYear (dateDB) {

    const months = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12']
    // const days = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado']
    const date = new Date(dateDB);
    // return date.toLocaleDateString('en-us', { year:"numeric", month:"numeric", day: 'numeric'})
    return `${date.getUTCFullYear()}-${months[date.getMonth()]}-${date.getDate() < 9 ? `0${date.getDate()}`: date.getDate()}`
    
}
function getDate (setUserDate) {

    const date =new Date();
    
    return setUserDate ? setUserDate(`${date}`) : date

}


function getMonthAndYear (setUserMonthAndYear) {

    const months = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic']
    const date = new Date();
    
    return setUserMonthAndYear ? setUserMonthAndYear(`${months[date.getMonth()]}-${date.getUTCFullYear()}`) : `${months[date.getMonth()]}-${date.getUTCFullYear()}`
    
}

export {getDate, getDayMonthYear, getMonthAndYear, formatDayMonthYear}