import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerModule } from 'ngx-spinner';

import { AppComponent } from './app.component';
import { BookListComponent } from './components/book-list/book-list.component';
import { BookService } from './services/book.service';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { BookCotegoryComponent } from './components/book-cotegory/book-cotegory.component';
import { SearchComponent } from './components/search/search.component';
import { BookDetailsComponent } from './components/book-details/book-details.component';
import { JwPaginationComponent } from 'jw-angular-pagination';
import { CartStatusComponent } from './components/cart-status/cart-status.component';


const routes: Routes = [
  { path: 'books/:id', component: BookDetailsComponent },
  { path: 'books', component: BookListComponent },
  { path: 'search/:keyword', component: BookListComponent },
  { path: 'category/:id', component: BookListComponent },
  { path: '', redirectTo: '/books', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    PageNotFoundComponent,
    BookCotegoryComponent,
    SearchComponent,
    BookDetailsComponent,
    JwPaginationComponent,
    CartStatusComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    NgxSpinnerModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    BookService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
