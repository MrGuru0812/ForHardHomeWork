'use strict'
                                        //Первая задача.
                                // Первый способ 
let lang = 'ru';

let weekDayRu = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
let weekDayEn = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

console.log('Первый способ');

let weekDay = function(lang) {


    if (lang === 'ru') {

        for (let i = 0; i < weekDayRu.length; i++) {
            
            console.log(weekDayRu[i]);

        };
    
    } else if (lang === 'en') {
    
        for (let i = 0; i < weekDayEn.length; i++) {
            
            console.log(weekDayEn[i]);

    
        };
    
    }

};

weekDay('en');
console.log('Второй способ');

let dayOfWeek = function(lang) {

switch (lang) {
    case 'ru':

        for (let i = 0; i < weekDayRu.length; i++) {
            
            
            console.log(weekDayRu[i]);
        };
        break;

    case 'en':

        for (let i = 0; i < weekDayEn.length; i++) {
            
            
            console.log(weekDayEn[i]);
    
        };

        break;
    }
};
dayOfWeek('ru');




console.log('Третий способ');

let daysWeeks = [
    ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
    ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
];

let language = (lang === 'ru') ? daysWeeks[0] : daysWeeks[1];
for (let i = 0; i < language.length; i++) {

    console.log(language[i]);
}



                                        //Вторая задача
let namePerson = 'Михаил';

let rank = (namePerson === 'Артем') ? console.log('директор') :
(namePerson === 'Максим') ? console.log('преподаватель') : console.log('студент');

console.log(rank);