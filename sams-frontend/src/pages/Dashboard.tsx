import { Typography, Box } from "@mui/material";

import DashboardCards from "../components/DashboardCards";

import EmployeeTable from "../components/EmployeeTable";

import DashboardChart
from "../components/Charts/DashboardChart";

const Dashboard = () => {

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
        Dashboard
      </Typography>

      <DashboardCards />

      <EmployeeTable />

      <DashboardChart />

    </Box>
  );
};

export default Dashboard;