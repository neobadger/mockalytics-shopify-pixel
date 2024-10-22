// An array of event payloads that will be enrolled in Mockalytics.
import pixelEvents from './shopifyPixelEvents.js';

class Mockalytics {
  constructor() {
    /**
     * A dictionary of available events, computed from the shopifyPixelEvents.js dependency.
     * @type {Object}
     */
    this.events = pixelEvents.reduce((eventDict, payload) => {
      eventDict[payload.event.name] = payload.event;
      return eventDict;
    }, {});
  }

  /**
   * Subscribe to an event.
   * @param {string} eventName - The name of the event to subscribe to.
   * @param {Function} callbackFn - The callback function to execute when the event is triggered.
   * @returns {void}
   */
  subscribe(eventName, callbackFn) {
    const targetEvent = this.events[eventName];
    const payload = targetEvent
      ? targetEvent
      : { error: 404, message: 'No such event defined in Mockalytics.js' };

    callbackFn(payload);
  }
}

export const mockalytics = new Mockalytics();
