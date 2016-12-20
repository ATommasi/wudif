import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Question } from './question.model';
import {Observable} from 'rxjs/Rx'; import 'rxjs/add/operator/map';


@Injectable()
export class QuestionService {
    private endpointURI = './app/question/question.data.json';

    constructor(private http: Http) {

    }

    // Gets a random question
    getRandom(): Observable<Question> {
        return  this.http.get(this.endpointURI)
          .map(res => {
              let data = res.json();
              let randomIndex = Math.floor((Math.random() * data.length));
              return data[randomIndex];

        });

    }

    // gets questions determined to be 'featured'
    getFeatured(): Observable<Question[]> {
        return  this.http.get(this.endpointURI)
          .map(res => {
              let data = res.json();
                return data;

        });

    }

    getQuestion(id: number): Question {
        return new Question();
     }

}