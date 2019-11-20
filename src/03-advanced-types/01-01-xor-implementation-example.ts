interface BasicConfig {
    uuid: string;
}

interface ConfigA {
    name: string;
}

interface ConfigB {
    age: number;
    birthday: Date;
}

type Not<T> = { [K in keyof T]?: never };

type XOR<R, T1, T2> = R & (T1 & Not<T2>) | R & (T2 & Not<T1>)

type Config = XOR<BasicConfig, ConfigA, ConfigB>;

const test1: Config = {
    uuid: 'test',
    age: 1,
    birthday: new Date(2019, 1, 1),
};

const test2: Config = {
    uuid: 'test',
    name: 'test'
};

/**
 * This example will show an error as the XOR does not accept both types being met.
 */
// const test3: Config = {
//     uuid: 'test',
//     age: 1,
//     birthday: new Date(2019, 1, 1),
//     name: 'test'
// };