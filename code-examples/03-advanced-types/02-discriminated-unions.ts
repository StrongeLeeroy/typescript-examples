interface BaseCalendar {
    uuid: string;
    name: string;
}

interface HolidayCalendar extends BaseCalendar {
    type: 'HolidayCalendar';
    holidays: Array<Date>;
}

interface FinancialCalendar extends BaseCalendar {
    type: 'FinancialCalendar';
    holidays: Array<Date>;
}

type Calendar = HolidayCalendar | FinancialCalendar;


let myCalendar: Calendar;

/**
 * We get full intellisense support when writing switch case statements.
 */
switch (myCalendar.type) {
    case 'FinancialCalendar':
        // Do something
        break;
    case 'HolidayCalendar':
        // Do something else
        break;
}