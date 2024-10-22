const checkout_completed = {
  type: 'Event',
  pixelUid: {
    id: '12345678',
    type: 'CUSTOM',
  },
  event: {
    id: '11111111-2222-3333-4444-555555555555',
    name: 'checkout_completed',
    data: {
      checkout: {
        attributes: [],
        discountApplications: [
          {
            allocationMethod: 'ACROSS',
            targetSelection: 'ALL',
            targetType: 'LINE_ITEM',
            title: 'WELCOME-TEA-DISCOUNT',
            type: 'DISCOUNT_CODE',
            value: {
              percentage: 15,
            },
          },
        ],
        lineItems: [
          {
            discountAllocations: [
              {
                amount: {
                  amount: 5,
                  currencyCode: 'USD',
                },
                discountApplication: {
                  allocationMethod: 'ACROSS',
                  targetSelection: 'ALL',
                  targetType: 'LINE_ITEM',
                  title: 'WELCOME-TEA-DISCOUNT',
                  type: 'DISCOUNT_CODE',
                  value: {
                    percentage: 15,
                  },
                },
              },
            ],
            quantity: 3,
            id: 'neostore_line_item_id_123',
            title: 'Green Tea Sampler Pack',
            variant: {
              price: {
                amount: 15,
                currencyCode: 'USD',
              },
              product: {
                title: 'Green Tea Sampler Pack',
                vendor: 'NeoStore',
                id: 'neostore_product_id_456',
                untranslatedTitle: 'Green Tea Sampler Pack',
                url: '/products/green-tea-sampler-pack',
                type: 'Tea',
              },
              id: 'neostore_variant_id_789',
              image: {
                src: 'https://neostore.com/images/green-tea-sampler.jpg',
              },
              sku: 'NEOSTORE-GREEN-1234',
              title: 'Green Tea Sampler - 100g',
              untranslatedTitle: 'Green Tea Sampler - 100g',
            },
          },
        ],
        totalTax: {
          amount: 2,
          currencyCode: 'USD',
        },
        transactions: [],
        billingAddress: {
          address1: '16 Tea Leaf Avenue',
          address2: null,
          city: 'Brewtown',
          country: 'Tealand',
          countryCode: 'TL',
          firstName: 'Jane',
          lastName: 'Smith',
          phone: '9876543210',
          province: 'Teasylvania',
          provinceCode: 'TS',
          zip: '67890',
        },
        currencyCode: 'USD',
        email: 'jane.smith@neostore.com',
        order: {
          customer: {
            id: 'neostore_customer_id_000',
            isFirstOrder: true,
          },
          id: 'neostore_order_id_999',
        },
        phone: null,
        shippingAddress: {
          address1: '16 Tea Leaf Avenue',
          address2: null,
          city: 'Brewtown',
          country: 'Tealand',
          countryCode: 'TL',
          firstName: 'Jane',
          lastName: 'Smith',
          phone: '9876543210',
          province: 'Teasylvania',
          provinceCode: 'TS',
          zip: '67890',
        },
        shippingLine: {
          price: {
            amount: 5,
            currencyCode: 'USD',
          },
        },
        subtotalPrice: {
          amount: 45,
          currencyCode: 'USD',
        },
        token: 'neostore_token_abcdefg1234567',
        totalPrice: {
          amount: 52,
          currencyCode: 'USD',
        },
      },
    },
    type: 'standard',
    timestamp: '2024-10-21T04:41:14.105Z',
    context: '...',
    clientId: 'neostore_client_id_abcdefg',
  },
  eventNameAsSubscribed: 'checkout_completed',
  subscriptionId: 'neostore_subscription_id_12345',
  status: 'SUCCESS',
  error: {},
};

// Add any additional event objects to this array and
// they will be enrolled in the Mockalytics event list.
export default [checkout_completed];
