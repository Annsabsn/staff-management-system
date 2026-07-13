import {
  Box,
  Paper,
  Typography,
  TextField,
  MenuItem,
  Button,
} from "@mui/material";

import { DataGrid } from "@mui/x-data-grid";

import { useEffect, useState } from "react";

import { CSVLink } from "react-csv";

import AddEmployee from "./AddEmployee";

import { fetchEmployees } from "../services/employeeService";

const columns = [
  {
    field: "id",
    headerName: "ID",
    width: 90,
  },
  {
    field: "name",
    headerName: "Employee Name",
    width: 220,
  },
  {
    field: "email",
    headerName: "Email",
    width: 250,
  },
  {
    field: "role",
    headerName: "Role",
    width: 220,
  },
  {
    field: "status",
    headerName: "Status",
    width: 150,
  },
];

const EmployeeTable = () => {

  const [employees, setEmployees] = useState([]);

  const [search, setSearch] = useState("");

  const [statusFilter, setStatusFilter] =
    useState("All");

  const [open, setOpen] =
    useState(false);

  const loadEmployees = async () => {

    const data = await fetchEmployees();

    setEmployees(data);

  };

  useEffect(() => {

    loadEmployees();

  }, []);

  const filteredEmployees =
    employees.filter((employee: any) => {

      const matchesSearch =
        employee.name
          .toLowerCase()
          .includes(search.toLowerCase());

      const matchesStatus =
        statusFilter === "All" ||
        employee.status === statusFilter;

      return matchesSearch && matchesStatus;

    });

  return (

    <>

      <Paper
        sx={{
          backgroundColor: "#111827",
          padding: 3,
          borderRadius: "20px",
          mt: 4,
        }}
      >

        {/* Header */}

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 3,
            flexWrap: "wrap",
            gap: 2,
          }}
        >

          <Typography
            variant="h6"
            sx={{
              color: "#E5E7EB",
              fontWeight: "bold",
            }}
          >
            Employees
          </Typography>

          <Button
            variant="contained"
            onClick={() => setOpen(true)}

            sx={{
              backgroundColor: "#2563EB",
              borderRadius: "10px",
            }}
          >
            Add Employee
          </Button>

        </Box>

        {/* Search + Filter + Export */}

        <Box
          sx={{
            display: "flex",
            gap: 2,
            mb: 3,
            flexWrap: "wrap",
          }}
        >

          {/* Search */}

          <TextField
            fullWidth
            placeholder="Search Employee..."
            value={search}

            onChange={(e) =>
              setSearch(e.target.value)
            }

            sx={{
              backgroundColor: "#1E293B",
              borderRadius: "10px",
              flex: 1,

              input: {
                color: "#E5E7EB",
              },
            }}
          />

          {/* Filter */}

          <TextField
            select
            value={statusFilter}

            onChange={(e) =>
              setStatusFilter(e.target.value)
            }

            sx={{
              backgroundColor: "#1E293B",
              borderRadius: "10px",
              minWidth: "160px",

              input: {
                color: "#E5E7EB",
              },

              "& .MuiSvgIcon-root": {
                color: "#E5E7EB",
              },
            }}
          >

            <MenuItem value="All">
              All
            </MenuItem>

            <MenuItem value="Active">
              Active
            </MenuItem>

            <MenuItem value="Pending">
              Pending
            </MenuItem>

            <MenuItem value="Delayed">
              Delayed
            </MenuItem>

          </TextField>

          {/* Export CSV */}

          <CSVLink
            data={filteredEmployees}
            filename={"employees.csv"}

            style={{
              textDecoration: "none",
            }}
          >

            <Button
              variant="contained"

              sx={{
                backgroundColor: "#2563EB",
                borderRadius: "10px",
                height: "56px",
              }}
            >
              Export CSV
            </Button>

          </CSVLink>

        </Box>

        {/* Data Table */}

        <Box sx={{ height: 450 }}>

          <DataGrid
            rows={filteredEmployees}
            columns={columns}
            pageSizeOptions={[5]}

            sx={{

              border: "none",

              color: "#E5E7EB",

              backgroundColor: "#111827",

              "& .MuiDataGrid-columnHeaders": {

                backgroundColor: "#1E293B",

                color: "#E5E7EB",

                borderBottom:
                  "1px solid #334155",

                fontSize: "15px",

                fontWeight: "bold",
              },

              "& .MuiDataGrid-columnHeaderTitle": {

                color: "#E5E7EB",

                fontWeight: "bold",
              },

              "& .MuiDataGrid-row": {

                backgroundColor: "#111827",

                color: "#E5E7EB",
              },

              "& .MuiDataGrid-cell": {

                borderColor: "#1E293B",

                color: "#E5E7EB",
              },

              "& .MuiDataGrid-footerContainer": {

                backgroundColor: "#111827",

                color: "#E5E7EB",

                borderTop:
                  "1px solid #334155",
              },

              "& .MuiTablePagination-root": {

                color: "#E5E7EB",
              },

              "& .MuiSvgIcon-root": {

                color: "#E5E7EB",
              },

              "& .Mui-selected": {

                backgroundColor:
                  "#1E293B !important",
              },

              "& .MuiDataGrid-cell:focus": {

                outline: "none",
              },

              "& .MuiDataGrid-columnHeader:focus": {

                outline: "none",
              },

            }}
          />

        </Box>

      </Paper>

      {/* Add Employee Modal */}

      <AddEmployee
        open={open}
        handleClose={() => setOpen(false)}
        refreshEmployees={loadEmployees}
      />

    </>

  );
};

export default EmployeeTable;