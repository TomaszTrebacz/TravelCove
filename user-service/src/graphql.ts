
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class CreateUserInput {
    email: string;
    firstName: string;
    lastName: string;
    password: string;
}

export class LoginInput {
    email: string;
    password: string;
}

export class UpdateUserInput {
    id: string;
    firstName: string;
    lastName: string;
}

export class LoginResponse {
    user: User;
    token: string;
}

export abstract class IMutation {
    abstract registerUser(createUserInput?: CreateUserInput): User | Promise<User>;

    abstract updateUser(updateUserInput?: UpdateUserInput): boolean | Promise<boolean>;

    abstract deleteUser(id?: string): boolean | Promise<boolean>;
}

export class User {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
    password: string;
    role: string;
    created: Date;
    updated: Date;
}

export abstract class IQuery {
    abstract users(): User[] | Promise<User[]>;

    abstract user(id: string): User | Promise<User>;

    abstract login(loginCredentials?: LoginInput): LoginResponse | Promise<LoginResponse>;
}
