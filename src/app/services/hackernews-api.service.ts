import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { map, tap, flatMap } from 'rxjs/operators';

@Injectable()
export class HackernewsApiService {
  private cacheFeed: string[];
  private cacheFeedSize: number;
  constructor(private _api: HttpClient) {}

  getFeed(feedType): Observable<any> {
    return this._api
      .get(`https://hacker-news.firebaseio.com/v0/${feedType}.json`)
      .pipe(tap(data => ((this.cacheFeed = data), (this.cacheFeedSize = data.length))));
  }

  getFeedItem(itemId): Observable<any> {
    return this._api.get(`https://hacker-news.firebaseio.com/v0/item/${itemId}.json`);
  }

  getFeedItemInRange(feedType, startCount, endCount): Observable<any> {
    return this.getFeed(feedType)
      .pipe(map(data => data.slice(startCount - 1, Math.min(startCount + 29, this.cacheFeedSize))))
      .pipe(flatMap(data => from(data)))
      .pipe(flatMap(data => this.getFeedItem(data)))
      .pipe(
        map(data => ({
          item: data,
          feedCount: this.cacheFeedSize
        }))
      );
  }

  getUser(userId): Observable<any> {
    return this._api.get(`https://hacker-news.firebaseio.com/v0/user/${userId}.json`);
  }

  getCommentTree(commentId): Observable<any> {
    return this._api.get(`https://hacker-news.firebaseio.com/v0/item/${commentId}.json`);
  }
}
