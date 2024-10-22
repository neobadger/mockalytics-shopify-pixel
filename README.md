# Mocalytics | Shopify Pixel Mock Environment

Debugging Shopify Pixels scripts kinda sucks, particularly when using a tag management solution like Google Tag Manager. This is where Mocalytics comes to the rescue! This repo is designed to springboard your testing and validation process for Shopify Pixels, allowing you to debug them in a local development environment, eliminating the need to pepper your logic with endless `console.logs()` and unlocking the full capabilities of Google Tag Manager's debugger.

🚧 I am sure this goes without saying, but it is critical to still test your logic in your store before going live, as Shopify Pixels will run in a completely sandboxed environment (i.e. an `<iframe>`) that honours your store's consent management flow.

## Overview

This environment exposes a mock implementation of the Shopify Pixels analytics API via a fairly generic interface called `Mockalytics`. Out of the box, this interface allows you to subscribe to any Pixel-supported event and receive the corresponding event payload in your callback function (described below). The best bit is that you can also run tag management solutions that would otherwise be impossible (or, at best, irritating) to run in a real Pixel script.

The setup includes:

- `tests.js`: The main file where you can define custom test logic for pixels.
- `mockalytics.js`: A mock `analytics` constructor exposing a `subscribe` method, which you can use to subscribe to different events and validate payloads.
- `shopifyPixelEvents.js`: Contains event payloads that should match the exact object structure to those in Shopify. I recommend that you procure your own events directly from your own Shopify store (you can get this easily from the [Shopify Pixel Tester](https://help.shopify.com/en/manual/promoting-marketing/pixels/custom-pixels/testing#shopify-pixel-helper) console). This way you know that you are accessing the most production-aligned data.
- `index.html`: Simple HTML setup to import critical dependencies.

## How to Use

1. **Spin Up a Local Server**: This mock environment does not have any dependencies. Simply spin up a local server (e.g., using `python -m http.server` or any preferred way).
2. **Add/Modify Events**: Update the `shopifyPixelEvents.js` file to add additional event payloads. Duplicate the expected payload structure that Shopify sends.
3. **Define Test Logic**: Write your test logic in `tests.js`. Here, you can subscribe to specific events and validate their behavior.
4. **Run and Test**: Open `index.html` in your browser to initiate the mock environment, and use the console to debug and analyze event payloads.

## File Overview

### 1. `./lib/mockalytics.js`

This file provides the `Mockalytics` class, a mock implementation of Shopify's `analytics`. You can use the `subscribe` method to listen to pixel events like `checkout_completed`. Additional events can be enrolled by adding the JSON event data to the `/lib/shopifyPixelEvents.js` as described below, and they will be automatically available to Mockalytics without any modifications to this file.

Alternatively you add your events piecemeal by modifying the export approach to named exports in `/lib/shopifyPixelEvents.js` and them importing them explicitly in `./lib/mockalytics.js`, as depicted below:

```javascript
import { checkout_completed } from './shopifyPixelEvents.js';

class Mockalytics {
  constructor() {
    /**
     * A dictionary of available events.
     * @type {Object}
     */
    this.events = {
      checkout_completed: checkout_completed.event,
    };
  }

  // . . .
```

This approach can be used if you are needing to test responses that don't conform to the Shopify-specified event payload object structure.

### 2. `./lib/shopifyPixelEvents.js`

This file contains definitions for different Shopify events like `checkout_completed`. Events are structured to mimic real Shopify payloads, allowing you to thoroughly test your integration. Simply create a named export of the event payload you want to expose to your event, ideally using the name of the event exactly as specified in Shopify's events specification, and you are good to go (see below for more details).

### 3. `index.html`

This HTML file is primarily intended to facilitate the execution of the core dependencies in a web environment. You should not need to ever modify the content here, as you cannot influence the content that is loaded in the `iframe` that your Pixels logic is rendered into.

### 4. `tests.js`

This is the core of your test logic. Use `tests.js` to write test cases for the pixel events you're handling in your Shopify store. For example, you can add subscriptions to different events to verify that your GTM setup correctly responds to pixel actions.

```javascript
analytics.subscribe('checkout_completed', (event) =>
  console.log(JSON.stringify(event, null, ' '))
);
```

## Adding Events

To add more test events, edit the `shopifyPixelEvents.js` file. If you're replicating events, it's recommended to grab the payload JSON directly from your Shopify store to ensure accuracy, as sometimes Shopify's documentation can be a little inconsistent with what you actually see in the event payload -- least that what I have found.

```javascript
const cart_viewed = {
  // . . .
};

const checkout_completed = {
  // . . .
};

// Add any additional event objects to this array and
// they will be enrolled in the Mockalytics event list.
export default [checkout_completed, cart_viewed];
```

Refer to the official Shopify documentation for more details on possible pixel events: [Shopify Standard Events Documentation](https://shopify.dev/docs/api/web-pixels-api/standard-events).

## Running the Mock Environment

1. Clone or download this repository.
2. Serve the files using a local server.
3. Open `index.html` in your browser.
4. Check the browser console for event output and debugging information.

## Contributing

Feel free to fork and contribute. Any improvements are welcome, especially for expanding event coverage and improving mock functionality.

## License

This project is licensed under the MIT License.

---

Happy testing! 🎉
