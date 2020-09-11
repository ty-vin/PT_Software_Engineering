import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { AverageRatingComponent } from './average-rating/average-rating.component';
import { SentimentAnalysisComponent } from './sentiment-analysis/sentiment-analysis.component';
import { WebsiteVisitorsComponent } from './website-visitors/website-visitors.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ReviewsComponent,
    AverageRatingComponent,
    SentimentAnalysisComponent,
    WebsiteVisitorsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
