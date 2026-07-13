import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

import {
  Paper,
  Typography,
} from "@mui/material";

const data = [
  {
    name: "Active",
    value: 12,
  },
  {
    name: "Pending",
    value: 5,
  },
  {
    name: "Delayed",
    value: 2,
  },
];

const DashboardChart = () => {

  return (

    <Paper
      sx={{
        backgroundColor: "#111827",
        padding: 3,
        borderRadius: "20px",
        mt: 4,
      }}
    >

      <Typography
        variant="h6"
        sx={{
          color: "#E5E7EB",
          fontWeight: "bold",
          mb: 3,
        }}
      >
        Project Analytics
      </Typography>

      <ResponsiveContainer
        width="100%"
        height={300}
      >

        <BarChart data={data}>

          <CartesianGrid
            strokeDasharray="3 3"
          />

          <XAxis dataKey="name" />

          <YAxis />

          <Tooltip />

          <Bar
            dataKey="value"
            fill="#2563EB"
            radius={[10, 10, 0, 0]}
          />

        </BarChart>

      </ResponsiveContainer>

    </Paper>

  );
};

export default DashboardChart;