import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';

import gql from 'graphql-tag';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const GET_QUOTES = gql`
  {
    quotes {
      quotes {
        _id
        quote
        author
      }
    }
  }
`;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'frontend';

  quotes: Observable<any> = new Observable<any>();

  constructor(private apollo: Apollo) {}

  ngOnInit() {
    this.quotes = this.apollo
      .watchQuery({ query: GET_QUOTES })
      .valueChanges.pipe(
        map((result: any) => {
          console.log(result.data.quotes.quotes);
          return result.data.quotes.quotes;
        })
      );
  }

  create(quote: string , author: string) {
    console.log(quote, author);
  }
  
}
