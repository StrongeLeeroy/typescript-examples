import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

/**
 * Sample Calendar class.
 * Takes in a user string and an array of type T or observable of type Array<T>.
 */
class Calendar<T = Date> {
    constructor(public user: string, public holidays: T[] | Observable<T[]>) {}
}

/**
 * Sample calendar class instance with an array of Dates.
 */
const myHolidays: Date[] = [
    new Date(2019, 1, 1),
    new Date(2019, 1, 2),
    new Date(2019, 1, 3),
    new Date(2019, 1, 4)
];
const myCalendar1 = new Calendar('Gorka', myHolidays);

/**
 * Sample calendar class instance with an Observable of type Array<Date>.
 */
const myHolidaysObservable: Observable<Date[]> = of(myHolidays);
const myCalendar2 = new Calendar('Gorka', myHolidaysObservable);

/**
 * Untyped getUnixDates method that will return an array of timestamps or an observable of
 * type number[].
 */
function getUnixDates(calendar: Calendar): number[] | Observable<number[]> {
    if (calendar.holidays instanceof Observable) {
        return calendar.holidays
            .pipe(
                map(dates => dates.map(d => d.getTime()))
            );
    } else {
        return calendar.holidays.map(d => d.getTime());
    }
}

/**
 * Uncomment the lines below and check for autocompletion options.
 */
const dates1 = getUnixDates(myCalendar1);
const dates2 = getUnixDates(myCalendar2);