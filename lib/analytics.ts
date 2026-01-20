/**
 * Vercel Web Analytics initialization
 * This module handles the setup of Vercel Web Analytics for the application.
 * 
 * For more information, visit:
 * https://vercel.com/docs/analytics
 */

import { inject } from '@vercel/analytics';

/**
 * Initialize Vercel Web Analytics
 * This should be called once when the application starts
 */
export const initializeAnalytics = (): void => {
  // Inject the Vercel analytics script
  inject();
};
