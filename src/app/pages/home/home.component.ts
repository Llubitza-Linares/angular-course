import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

import {Observable} from "rxjs";
import { environment } from '../../../environments/environment.prod';

@Injectable()
export class PublicationService {

  private url = environment.app.apiBaseUrl;

  constructor(private http: HttpClient) { }

  getAll(): Observable<any>{
    return this.http.get(`${this.url}/publications.json`)
  }

}