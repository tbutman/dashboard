import React from "react";
import { selectDashboardData } from "./selectors";
import { formatCurrency, formatNumber, formatPercentage } from "./utils";

const Header = ({
  totalPaymentAmount,
  totalPaymentVolume,
  totalCompletedAmount,
  totalCompletedVolume
}) => {
  return (
    <div>
      <h3>Program Summary</h3>
      <div>{`Total # of Payments: ${formatNumber(totalPaymentVolume)}`}</div>
      <div>{`Total # Completed: ${formatNumber(
        totalCompletedVolume
      )} (${formatPercentage(
        totalCompletedVolume / totalPaymentVolume
      )} complete)`}</div>
      <div>{`Total Payment Amount: ${formatCurrency(totalPaymentAmount)}`}</div>
      <div>{`Total Completed Amount: ${formatCurrency(
        totalCompletedAmount
      )} (${formatPercentage(
        totalCompletedAmount / totalPaymentAmount
      )} complete)`}</div>
    </div>
  );
};

const ByPaymentNetwork = () => {
  return (
    <div>
      <h3>By Payment Network</h3>
    </div>
  );
};

export default ({ data }) => {
  const dashboardData = selectDashboardData(data);

  return (
    <div>
      <Header {...dashboardData} />
      <ByPaymentNetwork {...dashboardData} />
    </div>
  );
};
