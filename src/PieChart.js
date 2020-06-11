import React, { PureComponent } from "react";
import { PieChart, Pie, Tooltip } from "recharts";

const CustomTooltip = ({ active, payload, label, data }) => {
  if (active) {
    return <div>{`${data.total} : ${payload[0].value}`}</div>;
  }

  return null;
};

export default class Example extends PureComponent {
  render() {
    const { data, getTooltipLabel } = this.props;

    return (
      <PieChart width={600} height={400}>
        <Pie
          dataKey="value"
          isAnimationActive={false}
          data={data}
          cx={200}
          cy={200}
          outerRadius={80}
          fill="#8884d8"
          label={({ index }) => data[index].name}
        />
        <Tooltip
          content={({ active, payload, label, data }) =>
            getTooltipLabel({ active, payload, label, data })
          }
        />
      </PieChart>
    );
  }
}
