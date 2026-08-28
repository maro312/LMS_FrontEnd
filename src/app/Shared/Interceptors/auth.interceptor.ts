import { HttpInterceptorFn } from '@angular/common/http';
import { inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const platformId = inject(PLATFORM_ID);
  
  if (isPlatformBrowser(platformId)) {
    const sessionId = localStorage.getItem('sessionId');
    if (sessionId) {
      const clonedReq = req.clone({
        headers: req.headers.set('sessionId', sessionId)
      });
      return next(clonedReq);
    }
  }

  return next(req);
};
