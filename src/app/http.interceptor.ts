import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError} from 'rxjs/operators';

import { CustomError } from './classes/error';
import { ErrorDialogService } from './error-handler-dialog/error-handler-dialog.service';

@Injectable()
export class CustomHttpInterceptor implements HttpInterceptor {

  constructor(public _errorDialogService: ErrorDialogService) {}

  intercept(request: HttpRequest<any> , next: HttpHandler): Observable<HttpEvent<any>> {

    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        const msg = error && error.error.reason ? error.error.reason : 'Server response error, try again later.';
        const customError = new CustomError(msg, error.status);

        this._errorDialogService.openDialog(customError);
        return throwError(customError);
      }));
  }
}
