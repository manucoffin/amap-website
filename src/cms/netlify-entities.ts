/* eslint-disable */
/* tslint:disable */

export interface Contact {
  phone1: string;
  phone2?: string;
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
  address?: string;
  postcode?: string;
  city?: string;
  phone?: string;
  email?: string;
  photoUrl: string;
}

export interface Article {
  title: string;
  author: string;
  date: string;
  abstract: string;
  photoUrl: string;
}

export interface Contract {
  title: string;
  description: string;
  calendarLink?: string;
  tutors: any[];
  photoUrl: string;
  documentPath: any;
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

export interface Recipe {
  id: any;
  title: string;
  description: string;
  author: string;
  date: string;
  prepTime: string;
  cookTime: string;
  yields: string;
  ingredients: string[];
  instructions: string[];
  photoUrl: string;
}
