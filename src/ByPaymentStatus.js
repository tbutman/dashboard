import React from "react";
import PieChart from "./PieChart";
import { formatCurrency, formatNumber, formatPercentage } from "./utils";

const ByPaymentStatus = ({
  byPaymentStatus,
  totalPaymentVolume,
  totalPaymentAmount
}) => {
  const pieData = byPaymentStatus.map(
    ({ paymentStatusDisplayName, totalPaymentVolume, ...other }) => ({
      name: paymentStatusDisplayName,
      value: totalPaymentVolume,
      totalPaymentVolume,
      ...other
    })
  );

  const getTooltipLabel = ({ active, payload }) => {
    if (!active) return;
    else {
      const { payload: data } = payload[0];
      const {
        totalPaymentVolume: statusTotalPaymentVolume,
        totalPaymentAmount: statusTotalPaymentAmount
      } = data;

      return (
        <div>
          <div>
            {`${formatNumber(
              statusTotalPaymentVolume
            )} Payments (${formatPercentage(
              statusTotalPaymentVolume / totalPaymentVolume
            )})`}
          </div>
          <div>
            {`${formatCurrency(
              statusTotalPaymentAmount
            )} Total Amount (${formatPercentage(
              statusTotalPaymentAmount / totalPaymentAmount
            )})`}
          </div>
        </div>
      );
    }
  };

  return (
    <div>
      <h3>By Payment Status</h3>
      <PieChart
        // containerProps={{
        //   style: { width: "100%", height: "200px", backgroundColor: "orange" }
        // }}
        chartProps={{
          height: 400,
          width: 800
        }}
        pieProps={{
          width: 800,
          data: pieData,
          label: ({ index }) => {
            return `${pieData[index].name} (${formatPercentage(
              pieData[index].value / totalPaymentVolume
            )})`;
          }
        }}
        data={pieData}
        tooltipProps={{
          content: getTooltipLabel
        }}
      />
    </div>
  );
};

export default ByPaymentStatus;
