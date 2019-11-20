export enum StampType {
    timestamp = 'timestamp',
    date = 'date'
}

export interface StampedOutput<T, R> {
    value: T;
    type: string;
    timestamp: R;
}

export function timestamped<T>(input: T, stampType?: StampType.timestamp): StampedOutput<T, number>;
export function timestamped<T>(input: T, stampType?: StampType.date): StampedOutput<T, Date>;
export function timestamped<T>(input: T, stampType: StampType = StampType.timestamp): any {
    const timestamp = stampType === 'date' ? new Date() : stampType === 'timestamp' ? Date.now() : null;

    return {
        value: input,
        type: typeof input,
        timestamp
    };
}

/** TEST CASES **/
/**
 * Check for intellisense options and types below. (Ctrl + hover)
 */
const testTimestamp = timestamped('test1', StampType.timestamp);
const testTimestamp2 = timestamped(1, StampType.timestamp);
const testTimestamp3 = timestamped(true, StampType.timestamp);

const testDate = timestamped('test2', StampType.date);
const testDate2 = timestamped(2, StampType.date);
const testDate3 = timestamped(false, StampType.date);

const testNull = timestamped(2, null);
const testNull2 = timestamped(2, null);
const testNull3 = timestamped('test2', 'invalidOption'); // Invalid stampType input.


/** TYPE CHECK FUNCTIONS **/
/**
 * These functions are used to check for deep input types below.
 */
function checkTypeTimestamp<T>(input: StampedOutput<T, number>) {
    console.log(typeof input);
}

function checkTypeDate<T>(input: StampedOutput<T, Date>) {
    console.log(typeof input);
}


/** CHECK TEST RESULT **/

checkTypeTimestamp(testTimestamp);
checkTypeTimestamp(testDate); // Invalid input, expected timestamps, got dates

checkTypeDate(testTimestamp); // Invalid input, expected dates, got timestamps
checkTypeDate(testDate);