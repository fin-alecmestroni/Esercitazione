import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { TodoModel } from 'src/app/shared/model/todo-model';


@Injectable({
    providedIn: 'root'
})

export class TodoService {

    constructor(
        private http: HttpClient
    ) { }


    public getAllTodoByUserId(user_id: number): Observable<TodoModel[]> {
        const url: string = environment.baseUrl + '/todo?id_user=' + user_id
        return this.http.get<TodoModel[]>(url);
    }


    public deleteTodoById(todo_id: number): Observable<any> {
        const url: string = environment.baseUrl + '/todo/' + todo_id;
        return this.http.delete<any>(url);
    }


    public createTodo(todo: TodoModel): Observable<TodoModel> {
        const url: string = environment.baseUrl + '/reservations/'
        return this.http.post<TodoModel>(url, todo)
    }


}
