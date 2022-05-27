import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { LoginModel } from 'src/app/shared/model/login-model';
import { UserModel } from 'src/app/shared/model/user-model';


@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(
    private http: HttpClient
  ) { }


  public loginUser(formInput: LoginModel): Observable<UserModel> {
    const url: string = environment.baseUrl + "/ControllerBE (GET MAPPING)"
    return this.http.post<UserModel>(url, formInput)
  }


  public registerUser(user: UserModel): Observable<any> {
    const url: string = environment.baseUrl + "/ControllerBE (GET MAPPING)"
    return this.http.post(url, user);
  }

  public deleteUser(user_id: number): Observable<any> {
    const url: string = environment.baseUrl + '/user/' + user_id;
    return this.http.delete<any>(url);
}


}
