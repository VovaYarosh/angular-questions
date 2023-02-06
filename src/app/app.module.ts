import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { HighlighterPipe } from './pipes/highlighter.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { QuestionComponent } from './components/question/question.component';
import { QuestionsListComponent } from './components/questions-list/questions-list.component';
import { SearchComponent } from './components/search/search.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HighlighterPipe,
    FilterPipe,
    QuestionComponent,
    QuestionsListComponent,
    SearchComponent,
    HeaderComponent
  ],
	imports: [
		BrowserModule,
		FormsModule
	],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
