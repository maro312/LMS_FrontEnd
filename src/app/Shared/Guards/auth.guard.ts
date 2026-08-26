import { inject, PLATFORM_ID } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const platformId = inject(PLATFORM_ID);

  if (isPlatformBrowser(platformId)) {
    const sessionId = localStorage.getItem('sessionId');
    if (sessionId) {
      return true; // Authenticated
    }
    // Not authenticated, redirect to auth page
    return router.createUrlTree(['/auth']);
  }
  
  // On the server (SSR), localStorage is not available. 
  // We return true here so the server can render the shell, and the client will 
  // immediately re-run this guard and redirect if needed when it hydrates.
  return true; 
};
