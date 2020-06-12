import React, { PureComponent } from "react";
import { PieChart, Pie, Tooltip, Cell, ResponsiveContainer } from "recharts";

export default class Example extends PureComponent {
  render() {
    const {
      containerProps,
      chartProps,
      pieProps,
      tooltipProps,
      colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"]
    } = this.props;

    return (
      <div style={{ backgroundColor: "lightgray" }} {...containerProps}>
        {/* <ResponsiveContainer> */}
        <PieChart {...chartProps}>
          {/* <Legend /> */}
          <Pie
            dataKey="value"
            isAnimationActive={true}
            cx={200}
            cy={200}
            outerRadius={80}
            fill="#8884d8"
            {...pieProps}
          >
            {pieProps.data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={colors[index % colors.length]}
              />
            ))}
          </Pie>
          <Tooltip {...tooltipProps} />
        </PieChart>
        {/* </ResponsiveContainer> */}
      </div>
    );
  }
}
