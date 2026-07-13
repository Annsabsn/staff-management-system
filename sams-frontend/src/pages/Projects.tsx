import {
  Box,
  Typography,
  Grid,
  Paper,
  LinearProgress,
  Chip,
  Button,
} from "@mui/material";

const projects = [
  {
    title: "Core Kernel 2.0",
    progress: 80,
    status: "Active",
  },
  {
    title: "Cloud Migration",
    progress: 45,
    status: "Pending",
  },
  {
    title: "Admin Dashboard",
    progress: 95,
    status: "Completed",
  },
];

const Projects = () => {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 4,
        }}
      >
        <Typography
          variant="h4"
          sx={{
            color: "#E5E7EB",
            fontWeight: "bold",
          }}
        >
          Projects
        </Typography>

        <Button variant="contained">Add Project</Button>
      </Box>

      <Grid container spacing={3}>
        {projects.map((project) => (
          <Grid item xs={12} md={4} key={project.title}>
            <Paper
              sx={{
                backgroundColor: "#111827",
                p: 3,
                borderRadius: 3,
                color: "#fff",
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",
                }}
              >
                {project.title}
              </Typography>

              <Chip
                label={project.status}
                color="primary"
                sx={{ mt: 2 }}
              />

              <Typography
                sx={{
                  mt: 3,
                  mb: 1,
                }}
              >
                Progress
              </Typography>

              <LinearProgress
                variant="determinate"
                value={project.progress}
              />

              <Typography
                sx={{
                  mt: 1,
                }}
              >
                {project.progress}% Completed
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Projects;