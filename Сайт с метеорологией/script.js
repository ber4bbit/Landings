// Script for get info about current date

const currentFullDate = new Date();
const monthNames = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
  "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"
];
const daysOfWeekNames = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];

// Script for render current date into DOM

const targetArrayToRenderDate = document.getElementsByClassName('weekDay-container');

Object.values(targetArrayToRenderDate).map(element => {
    
    const dayName = document.createElement('p');
    dayName.classList = 'styledText styledText-weekDay';
    dayName.innerHTML = `${ daysOfWeekNames[currentFullDate.getDay()] }`;

    const dateName = document.createElement('p');
    dateName.classList = 'styledText styledText-dateOfDay';
    dateName.innerHTML = `${ monthNames[currentFullDate.getMonth()] } ${ currentFullDate.getDate() }`;

    element.append(dayName);
    element.append(dateName);

    currentFullDate.setDate(currentFullDate.getDate() + 1);
});

// Script for API request

let url = "https://aqicn.org/city/tomsk/?token=a9e94a0d88ebd67378d4f5ce362a7183d40e79f4";

fetch(url)
.then (response => response.json())