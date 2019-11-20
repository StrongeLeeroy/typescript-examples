interface Calendar {
    uuid: string;
    name: string;
    descriptions?: string;
    holidays: Array<Date>;
    owner: string;
}

/**
 * Option A
 * Naive approach that requires high maintenance.
 */
interface PartialCalendarA {
    uuid?: string;
    name?: string;
    descriptions?: string;
    holidays?: Array<Date>;
    owner?: string;
}

/**
 * Option B
 * Extensible and low maintenance.
 */
type PartialCalendarB = {
    [K in keyof Calendar]?: Calendar[K];
}

/**
 * Option C
 * Same as Option B but using the new Partial<T> built-in type.
 */
type PartialCalendarC = Partial<Calendar>;