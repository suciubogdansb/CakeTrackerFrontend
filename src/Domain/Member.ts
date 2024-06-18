export interface MemberCreate {
    firstName: string;
    lastName: string;
    birthDate: Date;
    country: string;
    city: string;
}

export interface Member extends MemberCreate {
    userId: string;
    daysTillBirthday: number;
}