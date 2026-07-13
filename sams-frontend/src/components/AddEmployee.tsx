import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  Button,
  Box,
  MenuItem,
} from "@mui/material";

import { useState } from "react";

import { addEmployee } from "../services/employeeService";

interface Props {
  open: boolean;
  handleClose: () => void;
  refreshEmployees: () => void;
}

const AddEmployee = ({
  open,
  handleClose,
  refreshEmployees,
}: Props) => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
    status: "Active",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {

    try {

      await addEmployee(formData);

      refreshEmployees();

      handleClose();

      setFormData({
        name: "",
        email: "",
        role: "",
        status: "Active",
      });

    } catch (error) {

      console.error("Failed to add employee:", error);

      alert("Failed to add employee.");

    }

  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      fullWidth
    >
      <DialogTitle>
        Add Employee
      </DialogTitle>

      <DialogContent>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            mt: 2,
          }}
        >

          <TextField
            label="Employee Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />

          <TextField
            label="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />

          <TextField
            label="Role"
            name="role"
            value={formData.role}
            onChange={handleChange}
          />

          <TextField
            select
            label="Status"
            name="status"
            value={formData.status}
            onChange={handleChange}
          >
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

          <Button
            variant="contained"
            onClick={handleSubmit}
          >
            Save Employee
          </Button>

        </Box>

      </DialogContent>

    </Dialog>
  );
};

export default AddEmployee;