import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { _throw } from 'rxjs/observable/throw';

export class ErrorHandler {
  public static handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error.error.message} ${error.error.error.stack}`);
    }
    document.write(error.error.text)
    // return an observable with a user-facing error message
    return _throw(
      'Something bad happened; please try again later.');
  };
}
