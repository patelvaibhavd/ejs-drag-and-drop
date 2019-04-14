import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
    providedIn:'root'
})
export class DisplayOptionService{
    BaseUrl:String = "../assets/dbaccess/";

    constructor(private http:HttpClient){

    }
    public getDicimaltoDisplay(params):Observable<any>{
        return this.http.get(this.BaseUrl+"/decimaltodisplay.json",{params:params});
    }
}