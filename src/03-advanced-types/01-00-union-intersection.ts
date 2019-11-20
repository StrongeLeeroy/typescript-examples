interface BasicCalendarConfig {
    uuid: string;
    name: string;
    description: string;
}

interface HolidayCalendarConfig {
    holidays: Array<Date>;
}

interface FinancialCalendarConfig {
    quotingDays: Array<Date>;
    exceptionDates: Array<Date>;
}

type CalendarType = BasicCalendarConfig & (HolidayCalendarConfig | FinancialCalendarConfig);


const myCalendar1: CalendarType = {
    uuid: '000-001',
    name: 'Calendar 1',
    description: 'Calendar description 1',
    holidays: []
};

const myCalendar2: CalendarType = {
    uuid: '000-002',
    name: 'Calendar 2',
    description: 'Calendar description 2',
    quotingDays: [],
    exceptionDates: []
};

/**
 * THIS EXAMPLE WILL SHOW AN ERROR
 * None of the intersection types is met so an error is shown.
 */
// const myCalendar3: CalendarType = {
//     uuid: '000-003',
//     name: 'Calendar 3',
//     description: 'Calendar description 3',
//     quotingDays: []
// };

/**
 * This example is valid as the intersection is met as both types are met.
 */
const myCalendar4: CalendarType = {
    uuid: '000-004',
    name: 'Calendar 4',
    description: 'Calendar description 4',
    holidays: [],
    quotingDays: [],
    exceptionDates: []
};
