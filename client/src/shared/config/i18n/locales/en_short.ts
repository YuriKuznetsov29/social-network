export const en_short = {
    name: 'en-short', // имя String
    weekdays: 'Domingo_Lunes ...'.split('_'), // дни недели Array
    weekdaysShort: 'Sun_M'.split('_'), // НЕОБЯЗАТЕЛЬНО, короткое наименование дней недели Array, используйте первые три буквы, если это не предусмотрено
    weekdaysMin: 'Su_Mo'.split('_'), // НЕОБЯЗАТЕЛЬНО, минимальное наименование дней недели Array, используйте первые две буквы, если это не предусмотрено
    weekStart: 1, // НЕОБЯЗАТЕЛЬНО, установка начала недели. Если значение 1, понедельник будет началом недели, вместо воскресенья。
    yearStart: 4, // НЕОБЯЗАТЕЛЬНО, неделя, которая содержит значение 4-го января в качестве первой недели в году.
    months: 'Enero_Febrero ... '.split('_'), // месяцы Array
    monthsShort: 'Jan_F'.split('_'), // НЕОБЯЗАТЕЛЬНО, краткая запись наименования месяцев Array, используйте первые три буквы, если это не предусмотрено
    ordinal: (n: number) => `${n}º`, // ordinal Function (number) => return number + output
    formats: {
        // сокращенные имена параметров для локализации
        LTS: 'h:mm:ss A',
        LT: 'h:mm A',
        L: 'MM/DD/YYYY',
        LL: 'MMMM D, YYYY',
        LLL: 'MMMM D, YYYY h:mm A',
        LLLL: 'dddd, MMMM D, YYYY h:mm A',
        // нижний регистр/краткая запись, необязательные форматы для локализации
        l: 'D/M/YYYY',
        ll: 'D MMM, YYYY',
        lll: 'D MMM, YYYY h:mm A',
        llll: 'ddd, MMM D, YYYY h:mm A',
    },
    relativeTime: {
        // строковый формат относительного времени, оставьте %s %d в том же виде
        future: 'in %s', // например, "в 2 часа", %s был заменен на "2 часа"
        past: '%s ago',
        s: '%d s',
        m: '%d min',
        mm: '%d min',
        h: '%d h',
        hh: '%d h', // например, "2 часа" %d был заменен на "2"
        d: '%d d',
        dd: '%d d',
        M: '%d m',
        MM: '%d m',
        y: '%d y',
        yy: '%d y',
    },

    meridiem: (hour: number, minute: number, isLowercase: boolean) => {
        // НЕОБЯЗАТЕЛЬНО, AM/PM
        return hour > 12 ? 'PM' : 'AM'
    },
}
