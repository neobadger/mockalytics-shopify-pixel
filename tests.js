// Import as analytics for Shopify-native namespace compatibility.
// Remove before moving to your Shopify Pixels environment.
import { mockalytics as analytics } from './lib/mockalytics.js';

// Add you test logic here.
analytics.subscribe('checkout_completed', (event) =>
  console.log(JSON.stringify(event, null, ' '))
);
