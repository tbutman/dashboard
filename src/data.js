export const dashboardData = {
  data: {
    totalPaymentVolume: 448147,
    totalPaymentAmount: 9615958.61,
    byPaymentStatus: [
      {
        paymentStatus: "ACTION_REQUIRED",
        paymentStatusDisplayName: "Action Required",
        totalPaymentVolume: 40740,
        totalPaymentAmount: 737912
      },
      {
        paymentStatus: "COMPLETE",
        paymentStatusDisplayName: "Complete",
        totalPaymentVolume: 325925,
        totalPaymentAmount: 7407184.61
      },
      {
        paymentStatus: "PENDING_ACCEPTANCE",
        paymentStatusDisplayName: "Awaiting Acceptance",
        totalPaymentVolume: 81482,
        totalPaymentAmount: 1470862
      }
    ],
    byPaymentNetwork: [
      {
        paymentNetworkId: "AMAZON_BALANCE",
        paymentNetworkDisplayName: "Amazon Balance",
        totalPaidAmount: 2366008.82,
        totalPaidVolume: 106247,
        minSinglePaymentAmount: 17.99,
        maxSinglePaymentAmount: 215.88,
        latestPaidAt: "2020-05-12 17:30:42.753368"
      },
      {
        paymentNetworkId: "EGIFT_BLACKHAWK_BESTBUY",
        paymentNetworkDisplayName: "BestBuy",
        totalPaidAmount: 74856.39,
        totalPaidVolume: 3259,
        minSinglePaymentAmount: 17.99,
        maxSinglePaymentAmount: 125.93,
        latestPaidAt: "2020-05-12 17:25:00.355031"
      },
      {
        paymentNetworkId: "EGIFT_BLACKHAWK_TARGET",
        paymentNetworkDisplayName: "Target",
        totalPaidAmount: 613207.14,
        totalPaidVolume: 28281,
        minSinglePaymentAmount: 17.99,
        maxSinglePaymentAmount: 89.95,
        latestPaidAt: "2020-05-12 17:31:01.794070"
      },
      {
        paymentNetworkId: "PAYPAL_PAYOUTS",
        paymentNetworkDisplayName: "PayPal",
        totalPaidAmount: 2894914.82,
        totalPaidVolume: 124976,
        minSinglePaymentAmount: 17.99,
        maxSinglePaymentAmount: 593.67,
        latestPaidAt: "2020-05-12 17:31:23.439150"
      },
      {
        paymentNetworkId: "VIRTUALDEBITCARD_BLACKHAWK_MASTERCARD",
        paymentNetworkDisplayName: "Virtual Debit MasterCard",
        totalPaidAmount: 1458197.44,
        totalPaidVolume: 63162,
        minSinglePaymentAmount: 17.99,
        maxSinglePaymentAmount: 143.92,
        latestPaidAt: "2020-05-12 17:28:47.163813"
      }
    ]
  }
};
