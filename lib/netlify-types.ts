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

export interface Accueil {
  title: string;
  date: string;
}

export interface Adhérer {
  description: string;
  document_path: any;
}

export interface Contrats {
  id: any;
  title: string;
  description: string;
  image_path: string;
  document_path: any;
}

export interface Blog {
  title: string;
  date: string;
  thumbnail: string;
}
