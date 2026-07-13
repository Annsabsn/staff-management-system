import {
  Box,
  Typography,
  Grid,
  Paper,
  Avatar,
  Chip,
  TextField,
  MenuItem,
  Button,
} from "@mui/material";

import {
  useEffect,
  useState,
} from "react";

import {
  fetchHierarchy,
} from "../services/hierarchyService";

import EmployeeProfileModal
from "../components/EmployeeProfileModal";

const Hierarchy = () => {

  const [employees, setEmployees] =
    useState([]);

  const [selectedEmployee, setSelectedEmployee] =
    useState(null);

  const [open, setOpen] =
    useState(false);

  const [departmentFilter, setDepartmentFilter] =
    useState("All");

  const loadHierarchy = async () => {

    const data =
      await fetchHierarchy();

    setEmployees(data);

  };

  useEffect(() => {

    loadHierarchy();

  }, []);

  const filteredEmployees =
    employees.filter((employee: any) => {

      return (
        departmentFilter === "All" ||

        employee.department ===
        departmentFilter
      );

    });

  return (

    <Box>

      {/* Header */}

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 4,
          flexWrap: "wrap",
          gap: 2,
        }}
      >

        <Typography
          variant="h4"
          sx={{
            color: "#E5E7EB",
            fontWeight: "bold",
          }}
        >
          Organization Hierarchy
        </Typography>

        <Button variant="contained">
          Add Team Member
        </Button>

      </Box>

      {/* Filters */}

      <Box sx={{ mb: 4 }}>

        <TextField
          select
          value={departmentFilter}

          onChange={(e) =>
            setDepartmentFilter(
              e.target.value
            )
          }

          sx={{
            minWidth: "200px",
            backgroundColor: "#111827",
            borderRadius: "10px",

            input: {
              color: "#fff",
            },

            "& .MuiSvgIcon-root": {
              color: "#fff",
            },
          }}
        >

          <MenuItem value="All">
            All Departments
          </MenuItem>

          <MenuItem value="Management">
            Management
          </MenuItem>

          <MenuItem value="Engineering">
            Engineering
          </MenuItem>

          <MenuItem value="Frontend">
            Frontend
          </MenuItem>

          <MenuItem value="Backend">
            Backend
          </MenuItem>

          <MenuItem value="Design">
            Design
          </MenuItem>

        </TextField>

      </Box>

      {/* Analytics */}

      <Grid container spacing={3} mb={4}>

        <Grid item xs={12} md={3}>

          <Paper
            sx={{
              backgroundColor: "#111827",
              padding: 3,
              borderRadius: "20px",
              color: "#fff",
            }}
          >
            <Typography>Total Members</Typography>

            <Typography
              variant="h4"
              fontWeight="bold"
            >
              {employees.length}
            </Typography>

          </Paper>

        </Grid>

        <Grid item xs={12} md={3}>

          <Paper
            sx={{
              backgroundColor: "#111827",
              padding: 3,
              borderRadius: "20px",
              color: "#fff",
            }}
          >
            <Typography>Departments</Typography>

            <Typography
              variant="h4"
              fontWeight="bold"
            >
              5
            </Typography>

          </Paper>

        </Grid>

      </Grid>

      {/* Employee Cards */}

      <Grid container spacing={3}>

        {filteredEmployees.map((employee: any) => (

          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            key={employee.id}
          >

            <Paper
              onClick={() => {

                setSelectedEmployee(employee);

                setOpen(true);

              }}

              sx={{
                backgroundColor: "#111827",
                padding: 3,
                borderRadius: "20px",
                color: "#fff",
                cursor: "pointer",

                transition: "0.3s",

                "&:hover": {
                  transform:
                  "translateY(-5px)",
                },
              }}
            >

              <Box
                sx={{
                  display: "flex",
                  gap: 2,
                  alignItems: "center",
                  mb: 3,
                }}
              >

                <Avatar
                  sx={{
                    width: 60,
                    height: 60,
                    backgroundColor:
                    "#2563EB",
                  }}
                >
                  {employee.employee_name
                    .charAt(0)}
                </Avatar>

                <Box>

                  <Typography
                    variant="h6"
                    fontWeight="bold"
                  >
                    {employee.employee_name}
                  </Typography>

                  <Typography>
                    {employee.role}
                  </Typography>

                </Box>

              </Box>

              <Chip
                label={employee.department}

                sx={{
                  backgroundColor:
                  "#1E293B",

                  color: "#fff",
                }}
              />

              <Typography sx={{ mt: 2 }}>
                Permission:
                {" "}
                {employee.permission_role}
              </Typography>

              <Typography sx={{ mt: 1 }}>
                Status:
                {" "}
                <span
                  style={{
                    color:
                    employee.status ===
                    "Active"

                    ? "#22C55E"

                    : "#F59E0B",
                  }}
                >
                  {employee.status}
                </span>
              </Typography>

            </Paper>

          </Grid>

        ))}

      </Grid>

      {/* Profile Modal */}

      <EmployeeProfileModal
        open={open}
        handleClose={() => setOpen(false)}
        employee={selectedEmployee}
      />

    </Box>

  );
};

export default Hierarchy;