export function timestamped(input, stampType) {
    const timestamp = stampType === 'date' ? new Date() : stampType === 'timestamp' ? Date.now() : null;

    return {
        value: input,
        type: typeof input,
        timestamp
    };
}

const test1 = timestamped(5, 'timestamp');
const test2 = timestamped('hello', 'date');
const test3 = timestamped(true, 'somethingInvalid');

/**
 * Check for intellisense options below.
 */

// test1

// test2

// test3