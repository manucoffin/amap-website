/* eslint-disable */
/* tslint:disable */

export interface Footer {
  address: string;
  postcode: string;
  city: string;
  schedule: string;
  phone: string;
  email: string;
}

export interface Membership {
  description: string;
  documentPath: any;
}

export interface Tutor {
  id: any;
  lastname: string;
  firstname: string;
  contact?: string;
}

export interface Contract {
  title: string;
  description: string;
  calendarLink: string;
  tutors: any[];
  imagePath: string;
  documentPath: any;
}

export interface Article {
  title: string;
  date: string;
  thumbnail: string;
}
