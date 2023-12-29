export interface BookView {
    data: Data;
    meta?: Meta;
}

export interface Data {
    id:         number;
    attributes: Attributes;
}

export interface Attributes {
    title:       string;
    author:      string;
    createdAt:   Date;
    updatedAt:   Date;
    publishedAt: Date;
}

export interface Meta {
}