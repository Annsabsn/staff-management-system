import {
  Grid,
  Paper,
  Typography,
} from "@mui/material";

import {
  useEffect,
  useState,
} from "react";

import {
  fetchDashboardStats,
} from "../services/dashboardService";

const DashboardCards = () => {

  const [stats, setStats] = useState({
    totalEmployees: 0,
    activeProjects: 0,
    pendingAssignments: 0,
    approvalsDue: 0,
  });

  // FIXED POSITION
  // loadStats comes BEFORE useEffect

  const loadStats = async () => {

    const data =
      await fetchDashboardStats();

    setStats(data);

  };

  useEffect(() => {

    loadStats();

  }, []);

  const cards = [
    {
      title: "Total Employees",
      value: stats.totalEmployees,
    },
    {
      title: "Active Projects",
      value: stats.activeProjects,
    },
    {
      title: "Pending Assignments",
      value: stats.pendingAssignments,
    },
    {
      title: "Approvals Due",
      value: stats.approvalsDue,
    },
  ];

  return (

    <Grid container spacing={3}>

      {cards.map((card) => (

        <Grid
          item
          xs={12}
          sm={6}
          md={3}
          key={card.title}
        >

          <Paper
            sx={{
              backgroundColor: "#111827",
              padding: 3,
              borderRadius: "20px",
              color: "#E5E7EB",

              boxShadow:
              "0px 0px 15px rgba(96,165,250,0.15)",
            }}
          >

            <Typography
              sx={{
                color: "#94A3B8",
                fontSize: "14px",
              }}
            >
              {card.title}
            </Typography>

            <Typography
              variant="h4"
              sx={{
                fontWeight: "bold",
                mt: 1,
              }}
            >
              {card.value}
            </Typography>

          </Paper>

        </Grid>

      ))}

    </Grid>

  );
};

export default DashboardCards;