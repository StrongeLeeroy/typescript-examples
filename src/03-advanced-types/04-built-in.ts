/**
 * Record
 * Object key/value definition.
 */
interface Calendar {
    uuid: string;
    holidays: Array<Date>;
}

let myCalendar: Calendar;

class ViewerSelection {
    public calendars: Record<string, Calendar> = {
        hello: myCalendar
    };
    public readonly: boolean = false;
}

/**
 * Required
 * Require previously optional properties.
 */
type User = {
    username: string;
    email: string;
    birthday?: Date;
};

type UserRequired = Required<User>;

const gorka: UserRequired = {
    username: 'gorka.hernandez',
    email: 'gorka.hernandez@enverus.com',
    birthday: new Date(1991, 10, 4)
};

/**
 * Pick
 * Pick properties from an existing interface.
 */
interface ApplicationUser {
    username: string;
    email: string;
    firstname: string;
    lastname: string;
    birthday?: Date;
}

type MinimalUser = Pick<ApplicationUser, 'username' | 'email'>

const gorka2: MinimalUser = {
    username: 'gorka.hernandez',
    email: 'gorka.hernandez@enverus.com',

};