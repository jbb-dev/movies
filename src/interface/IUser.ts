export interface IUser {
    avatar: string;
    biography: string | null;
    birthdate: Date | null;
    city: string;
    email: string;
    firstname: string;
    id?: number;
    lastname: string;
    postalCode: string;
    password?: string | null;
}

