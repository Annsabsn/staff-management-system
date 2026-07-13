import {
  Box,
  Typography,
  Grid,
  Paper,
} from "@mui/material";

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

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

const COLORS = [
  "#2563EB",
  "#F59E0B",
  "#EF4444",
];

const Reports = () => {
  return (
    <Box>
      <Typography
        variant="h4"
        sx={{
          color: "#E5E7EB",
          fontWeight: "bold",
          mb: 4,
        }}
      >
        Reports & Analytics
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Paper
            sx={{
              backgroundColor: "#111827",
              p: 3,
              borderRadius: 3,
            }}
          >
            <Typography
              sx={{
                color: "#fff",
                mb: 3,
              }}
            >
              Project Status
            </Typography>

            <ResponsiveContainer
              width="100%"
              height={300}
            >
              <PieChart>
                <Pie
                  data={data}
                  dataKey="value"
                  outerRadius={100}
                >
                  {data.map((_, index) => (
                    <Cell
                      key={index}
                      fill={COLORS[index]}
                    />
                  ))}
                </Pie>

                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Reports;