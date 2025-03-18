import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Contact} from '../model/contact.model';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  constructor(private http : HttpClient) { }

  public getAllContacts() : Observable<Array<Contact>>{
    return this.http.get<Array<Contact>>(`${environment.apiUrl}/contacts`);
  }
  /*public getAllContacts() : Observable<any[]>{
    return this.http.get<Array<Conctact>>(`${environment.apiUrl}/contacts`);
  }*/

  public getContactById(id: number): Observable<Contact> {
    return this.http.get<Contact>(`${environment.apiUrl}/contacts/${id}`);
  }
}
