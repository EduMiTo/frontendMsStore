import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IPainting } from '../interface/IPainting';
import { environment } from '../../environments/environment';
import { ISecundaryImages } from '../interface/isecundary-images';
import { Observable, map } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EmailService {

  private url = ""
  constructor(private http: HttpClient){}

    /*SendEmail(input: any) {
	return this.http.post(this.url, input).pipe(
		map(
		  (response) => {
		      if (response) {
			      return response
		      }
		  },
		  (error: any) => {
		      if (error) {
			return error
		      }
		   }
		)
	    )
    }*/
}
