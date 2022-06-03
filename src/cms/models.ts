/* eslint-disable */
/* tslint:disable */

export interface Contact {
  phone: string;
  email: string;
}

export interface Address {
  address: string;
  postcode: string;
  city: string;
}

export interface Amap {
  name: string;
  schedule?: string;
}

export interface Membership {
  description: string;
  documentPath: any;
}

export interface Convention {
 }

export interface Statutes {
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
