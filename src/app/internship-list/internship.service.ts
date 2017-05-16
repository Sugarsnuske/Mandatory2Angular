import { Injectable } from '@angular/core';
import { 
  Http, 
  Response, 
  JsonpModule, 
  Headers, 
  HttpModule, 
  RequestOptions, 
  RequestOptionsArgs 
} from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class InternshipService {
    private internshipUrl = 'http://angular2api2.azurewebsites.net/api/internships/';

    constructor(private http: Http){}

    get(){
      return this.http.get(this.internshipUrl)
      .map((res:Response) => res.json());
      
    }

    post(intern : any){
      const headers = new Headers({
        'Content-Type': 'application/json'
      });
      return this.http.post(this.internshipUrl, 
        intern,
        {headers: headers});
    }

    put(intern : any){
      return this.http.put(this.internshipUrl + intern._id, intern );
    }

    delete(id : string){
      return this.http.delete(this.internshipUrl + id);
    }

    

}
