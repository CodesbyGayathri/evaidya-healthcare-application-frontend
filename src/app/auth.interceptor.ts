import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('jwtToken'); // Retrieve token from storage
    const excludedUrls = ['/patient/signup', '/authenticate']; // Add your login and signup URLs

    // Check if the URL is in the excluded list
    const isExcluded = excludedUrls.some(url => request.url.includes(url));

    if (token && !isExcluded) {
      // Clone the request and add the Authorization header
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log('Request with Authorization header:', request);
    } else {
      console.warn('No token found; request sent without Authorization header.');
    }
    return next.handle(request);
  }
}
