export interface LoginResponse {
    jwt:  string;
    user: User;
}

export interface User {
    id:          number;
    username:    string;
    email:       string;
    provider:    string;
    confirmed:   boolean;
    blocked:     boolean;
    createdAt:   Date;
    updatedAt:   Date;
    empId:       number;
    designation: string;
    admin:       boolean;
    imgUrl:      null;
}