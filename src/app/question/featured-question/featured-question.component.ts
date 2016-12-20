import { Component, OnInit } from '@angular/core';
import { QuestionService } from './../question.service';
import { QuestionModule } from './../question.module';
import  { QuestionInputComponent } from './question-input.component';
import { Question } from './../question.model';
import { ImageService } from './../../core/image/image.service';


@Component({
    moduleId: module.id,
    selector: 'featured-question',
    templateUrl: 'featured-question.component.html',
    styleUrls: ['featured-question.component.css'],
    providers: [ImageService]
})
export class FeaturedQuestionComponent implements OnInit {
    public FeaturedQuestion: Question = new Question(); // currently displayed question
    public Index: number = -1; // current position within list
    private QuestionList: Question[]; // full list of all featured questions



    constructor(
        private _qservice: QuestionService,
        private _imageservice: ImageService
    ) { }

    ngOnInit() {
        // get list of questions
        this.getFeaturedQuestions();

    }

     public getNextQuestion() {
        this.Index++;

         if (this.Index > this.QuestionList.length - 1) { this.Index = 0; }

         this.setQuestion();
    }

     public getPreviousQuestion() {
         this.Index--;
         if (this.Index < 0) { this.Index = this.QuestionList.length - 1; }

         this.setQuestion();

    }


    private setQuestion(idx?: number) {
        if (!idx) { idx = this.Index; }

        this.Index = idx;

        this.FeaturedQuestion = this.QuestionList[this.Index];
        this.changePageBackground();
    }

    private changePageBackground() {
        let base64Image: string;

        if (!this.FeaturedQuestion.imageURI) {
            this.FeaturedQuestion.imageURI = this._imageservice.getImage(this.FeaturedQuestion.keywords);
        }

        let htmlTags = document.getElementsByTagName('html');

        let ImageURL = this.FeaturedQuestion.imageURI + '?' + this.FeaturedQuestion.id;

        htmlTags[0].style.backgroundImage = 'url(' + ImageURL + ')';

    }

    /* 
     Private Methods
    */

    private getFeaturedQuestions() {
        this._qservice.getFeatured().subscribe((data) => {
            this.QuestionList = data;

            // set initial question to random one from the list
            this.setQuestion(Math.floor((Math.random() * this.QuestionList.length)));
        });
    }


}