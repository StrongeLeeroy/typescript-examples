/**
 * Typed Calendar class with a holiday array of type T. This type will depend on the input
 * holiday array item type.
 */
class Calendar<T> {
    public holidays: Array<T> = [];

    constructor(public user: string, holidays: Array<T>) {
        this.holidays = holidays;
    }
}

/**
 * Sample calendar class with an array of dates.
 */
const myHolidayDates = [
    new Date(2019, 1, 1),
    new Date(2019, 1, 2),
    new Date(2019, 1, 3),
    new Date(2019, 1, 4)
];
const myCalendar1 = new Calendar('Gorka', myHolidayDates);

/**
 * Sample calendar class with an array of numbers (timestamps).
 */
const myHolidayTimestamps = [
    1548975600000,
    1549062000000,
    1549148400000,
    1549234800000
];
const myCalendar2 = new Calendar('Gorka', myHolidayTimestamps);

/**
 * Try to use the created Calendar instances below, you will notice we now get complete
 * intellisense support depending on the Calendar<T> class.
 * Uncomment the lines below and check for autocompletion options.
 */

// myCalendar1.holidays[0]

// myCalendar2.holidays[0]