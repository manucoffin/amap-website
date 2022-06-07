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

export interface Producer {
  id: any;
  lastname: string;
  firstname: string;
  biography: string;
  activity: string;
  address?: string;
  postcode?: string;
  city?: string;
  phone?: string;
  email?: string;
  photoUrl: string;
  contracts: string[];
}

export interface Contract {
  title: string;
  description: string;
  calendarLink: string;
  tutors: any[];
  photoUrl: string;
  documentPath: any;
}

export interface Article {
  title: string;
  date: string;
  photoUrl: string;
}

export interface Recipe {
  id: any;
  date: string;
  title: string;
  description: string;
  prepTime: string;
  cookTime: string;
  yields: string;
  ingredients: string[];
  instructions: string[];
  photoUrl: string;
}
