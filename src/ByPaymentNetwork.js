import React from "react";
import PieChart from "./PieChart";
import { formatCurrency, formatNumber, formatPercentage } from "./utils";

const ByPaymentNetwork = ({
  byPaymentNetwork,
  totalCompletedVolume,
  totalCompletedAmount
}) => {
  const pieData = byPaymentNetwork.map(
    ({ paymentNetworkDisplayName, totalPaidVolume, ...other }) => ({
      name: paymentNetworkDisplayName,
      value: totalPaidVolume,
      totalPaidVolume,
      ...other
    })
  );

  const getTooltipLabel = ({ active, payload }) => {
    if (!active) return;
    else {
      const { payload: data } = payload[0];
      const {
        totalPaidVolume: networkTotalPaidVolume,
        totalPaidAmount: networkTotalPaidAmount
      } = data;

      return (
        <div>
          <div>
            {`${formatNumber(
              networkTotalPaidVolume
            )} Payments (${formatPercentage(
              networkTotalPaidVolume / totalCompletedVolume
            )})`}
          </div>
          <div>
            {`${formatCurrency(
              networkTotalPaidAmount
            )} Total Paid (${formatPercentage(
              networkTotalPaidAmount / totalCompletedAmount
            )})`}
          </div>
        </div>
      );
    }
  };

  return (
    <div>
      <h3>By Payment Network</h3>
      <PieChart
        // containerProps={{
        //   style: { width: "100%", height: "100%" }
        // }}
        chartProps={{
          height: 400,
          width: 800
        }}
        pieProps={{
          data: pieData,
          label: ({ index }) => pieData[index].name
        }}
        tooltipProps={{
          content: getTooltipLabel
        }}
      />
    </div>
  );
};

export default ByPaymentNetwork;
