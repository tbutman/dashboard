import React from "react";
import Dashboard from "./Dashboard";
import { dashboardData } from "./data";

import "./styles.css";

export default () => {
  return <Dashboard data={dashboardData} />;
};
