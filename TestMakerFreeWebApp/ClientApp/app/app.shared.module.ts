import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './components/app/app.component';
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { QuizListComponent } from "./components/quiz/quiz-list.component";
import { QuizComponent } from "./components/quiz/quiz.component";
import { AboutComponent } from "./components/about/about.component";
import { HomeComponent } from "./components/home/home.component";
import { PageNotFoundComponent } from "./components/pagenotfound/pagenotfound.component";
import { QuizEditComponent } from './components/quiz/quiz-edit.component';
import { LoginComponent } from './components/login/login.component';
import { QuestionListComponent } from "./components/question/question-list.component";
import { QuestionEditComponent } from "./components/question/question-edit.component";
import { AnswerListComponent } from './components/answer/answer-list.component';
import { AnswerEditComponent } from "./components/answer/answer-edit.component";
import { ResultListComponent } from './components/result/result-list.component';
import { ResultEditComponent } from './components/result/result-edit.component';
import { QuizSearchComponent } from './components/quiz/quiz-search.component';
import { AuthService } from './services/auth.service';

@NgModule({
    declarations: [
        AppComponent,
        NavMenuComponent,
        HomeComponent,
        QuizListComponent,
        QuizComponent,
        AboutComponent,
        PageNotFoundComponent,
        LoginComponent,
        QuizEditComponent,
        QuestionListComponent,
        QuestionEditComponent,
        AnswerListComponent,
        AnswerEditComponent,
        ResultListComponent,
        ResultEditComponent,
        QuizSearchComponent
    ],
    imports: [
        CommonModule,
        HttpClientModule,
        FormsModule, 
        ReactiveFormsModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'quiz/create', component: QuizEditComponent },
            { path: 'quiz/edit/:id', component: QuizEditComponent },
            { path: 'quiz/:id', component: QuizComponent },
            { path: 'question/create/:id', component: QuestionEditComponent },
            { path: 'question/edit/:id', component: QuestionEditComponent },
            { path: 'answer/create/:id', component: AnswerEditComponent },
            { path: 'answer/edit/:id', component: AnswerEditComponent },
            { path: 'result/create/:id', component: ResultEditComponent },
            { path: 'result/edit/:id', component: ResultEditComponent },
            { path: 'about', component: AboutComponent },
            { path: 'login', component: LoginComponent },
            { path: '**', component: PageNotFoundComponent }
        ])
    ],
    providers:[
        AuthService    
    ]
})
export class AppModuleShared {
}
