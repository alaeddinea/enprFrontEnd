

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ApiResponse } from './domain/api.response';


@Injectable({
  providedIn: 'root'
})
export class CrudGlobalService {

  baseUrl="http://192.168.100.70:8080/enprBackend/api/" ;
  constructor(private httpClient: HttpClient) {

  }
  createLigne(ojetUrl  :any, ojet :any):Observable<ApiResponse>{

   return this.httpClient.post<ApiResponse>(this.baseUrl+ojetUrl+"/add",ojet);
  }

  getlistEntity(ojetUrl :any):Observable<ApiResponse>
  {
  return this.httpClient.get<ApiResponse>(this.baseUrl+ojetUrl+"/all");
  }

  deleteLigne(ojetUrl: any,idOjet :any ):Observable<ApiResponse>
  {
  return this.httpClient.delete<ApiResponse>(this.baseUrl+ojetUrl+"/delete/"+idOjet);
  }
  getLigneById(ojetUrl: any,idOjet :any ):Observable<ApiResponse>{
  return this.httpClient.get<ApiResponse>(this.baseUrl+ojetUrl+"/getone/"+idOjet);
  }
  updateLigne(ojetUrl :any,ojet :any):Observable<ApiResponse>{

  return this.httpClient.put<ApiResponse>(this.baseUrl+ojetUrl+"/update",ojet);
  }
  findAllSonByMother(ojetUrl :any,idOjetMother :any ):Observable<ApiResponse>
  {
  return this.httpClient.get<ApiResponse>(this.baseUrl+ojetUrl+"/findAllSonByMother/"+idOjetMother);
  }
  findAllEleveBySection(ojetUrl :any,idOjetMother :any ):Observable<ApiResponse>
  {
  return this.httpClient.get<ApiResponse>(this.baseUrl+ojetUrl+"/findAllEleveBySection/"+idOjetMother);
  }
  findAllEleveByCompany(ojetUrl :any,idOjetMother :any ):Observable<ApiResponse>
  {
  return this.httpClient.get<ApiResponse>(this.baseUrl+ojetUrl+"/findAllEleveByCompany/"+idOjetMother);
  }
  findAllEleveByGroup(ojetUrl :any,idOjetMother :any ):Observable<ApiResponse>
  {
  return this.httpClient.get<ApiResponse>(this.baseUrl+ojetUrl+"/findAllEleveByGroup/"+idOjetMother);
  }
  findAllEleveBySession(ojetUrl :any,idOjetMother :any ):Observable<ApiResponse>
  {
  return this.httpClient.get<ApiResponse>(this.baseUrl+ojetUrl+"/findAllEleveBySession/"+idOjetMother);
  }

  findAllActiveSession(ojetUrl :any,etat :String ):Observable<ApiResponse>
  {
  return this.httpClient.get<ApiResponse>(this.baseUrl+ojetUrl+"/findAllActiveSession/"+etat);
  }
  findAllRendezvousbetween(ojetUrl :any,dateD :Date,dateF :Date ):Observable<ApiResponse>
  {
  return this.httpClient.get<ApiResponse>(this.baseUrl+ojetUrl+"/findAllRendezvousbetween/"+dateD+"/"+dateF);
  }
  getExcelRepo(ojetUrl :any,dateDebut :Date ):Observable<ApiResponse>
  {
  return this.httpClient.get<ApiResponse>(this.baseUrl+ojetUrl+ "/getExcelRepo/" + dateDebut);
  }
  report(ojetUrl: any,idOjet :any ):Observable<ApiResponse>{
    return this.httpClient.get<ApiResponse>(this.baseUrl+ojetUrl+"/report/"+idOjet);
    }

    exportPdf(objetUrl: any, idobjet: any): Observable<Blob> {
      return this.httpClient.get(this.baseUrl + objetUrl +"/export/pdf/" + idobjet, {responseType: 'blob'});
    }
  }

