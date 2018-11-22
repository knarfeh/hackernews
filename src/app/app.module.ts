import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { StoryFeedComponent } from './components/story-feed/story-feed.component';
import { HackernewsApiService } from './services/hackernews-api.service';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { StoryFeedItemComponent } from './components/story-feed-item/story-feed-item.component';
import { StoryFeedItemDetailComponent } from './components/story-feed-item-detail/story-feed-item-detail.component';
import { UserComponent } from './components/user/user.component';
import { CollapsibleListComponent } from './components/collapsible-list/collapsible-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    StoryFeedComponent,
    StoryFeedItemComponent,
    StoryFeedItemDetailComponent,
    UserComponent,
    CollapsibleListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [HackernewsApiService],
  bootstrap: [AppComponent]
})
export class AppModule {}
