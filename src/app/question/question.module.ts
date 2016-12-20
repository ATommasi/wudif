import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FeaturedQuestionComponent } from './featured-question/featured-question.component';
import { QuestionInputComponent } from './featured-question/question-input.component';
import { QuestionService } from './question.service';
import  { CoreModule } from './../core/core.module';





@NgModule({
    imports: [BrowserModule, CoreModule, CommonModule],
    exports: [FeaturedQuestionComponent],
    declarations: [ QuestionInputComponent,     FeaturedQuestionComponent],
    providers: [QuestionService],
})
export class QuestionModule {

}
