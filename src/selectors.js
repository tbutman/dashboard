import { get } from "lodash/object";
import { find } from "lodash/collection";

export const selectDashboardData = ({ data, metadata }) => {
  return {
    totalPaymentAmount: get(data, "totalPaymentAmount"),
    totalPaymentVolume: get(data, "totalPaymentVolume"),
    totalCompletedAmount: find(
      get(data, "byPaymentStatus"),
      ({ paymentStatus }) => paymentStatus === "COMPLETE"
    ).totalPaymentAmount,
    totalCompletedVolume: find(
      get(data, "byPaymentStatus"),
      ({ paymentStatus }) => paymentStatus === "COMPLETE"
    ).totalPaymentVolume,
    byPaymentNetwork: get(data, "byPaymentNetwork"),
    byPaymentStatus: get(data, "byPaymentStatus")
  };
};
