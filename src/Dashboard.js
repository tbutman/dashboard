import React from "react";
import ByPaymentNetwork from "./ByPaymentNetwork";
import ByPaymentStatus from "./ByPaymentStatus";
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

export default ({ data }) => {
  const dashboardData = selectDashboardData(data);

  return (
    <div>
      <Header {...dashboardData} />
      <ByPaymentStatus {...dashboardData} />
      <ByPaymentNetwork {...dashboardData} />
    </div>
  );
};
