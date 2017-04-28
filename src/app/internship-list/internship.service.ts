import { Injectable } from '@angular/core';
import { Http, Response, JsonpModule, Headers } from '@angular/http';

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
      const headers = new Headers({'Content-Type': 'application/json'});
      return this.http.post(this.internshipUrl, 
        intern,
        {headers: headers});
    }
    
    // return this.http.post('https://udemy-ng-http.firebaseio.com/data.json',
    //   servers,
    //   {headers: headers});

    put(intern : any){
      return this.http.put('http://angular2api2.azurewebsites.net/api/internships/' + intern._id, {} )
    }

    delete(id : string){
      const headers = new Headers({
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Origin': '*', 
        'Access-Control-Allow-Methods' : 'GET, DELETE, POST, PUT'
      });
      console.log(headers);
      return this.http.delete('http://angular2api2.azurewebsites.net/api/internships/' + id);
    }

}
