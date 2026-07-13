import {
  Dialog,
  DialogTitle,
  DialogContent,
  Typography,
  Avatar,
  Box,
  Chip,
} from "@mui/material";

interface Props {
  open: boolean;
  handleClose: () => void;
  employee: any;
}

const EmployeeProfileModal = ({
  open,
  handleClose,
  employee,
}: Props) => {

  if (!employee) return null;

  return (

    <Dialog
      open={open}
      onClose={handleClose}
      fullWidth
      maxWidth="sm"
    >

      <DialogTitle>
        Employee Profile
      </DialogTitle>

      <DialogContent>

        <Box
          sx={{
            textAlign: "center",
            mt: 2,
          }}
        >

          <Avatar
            sx={{
              width: 100,
              height: 100,
              margin: "auto",
              backgroundColor: "#2563EB",
              fontSize: "40px",
            }}
          >
            {employee.employee_name?.charAt(0)}
          </Avatar>

          <Typography
            variant="h5"
            sx={{
              mt: 2,
              fontWeight: "bold",
            }}
          >
            {employee.employee_name}
          </Typography>

          <Typography sx={{ mt: 1 }}>
            {employee.role}
          </Typography>

          <Chip
            label={employee.department}
            sx={{
              mt: 2,
            }}
          />

          <Typography sx={{ mt: 3 }}>
            Email:
            {" "}
            {employee.email}
          </Typography>

          <Typography sx={{ mt: 1 }}>
            Phone:
            {" "}
            {employee.phone}
          </Typography>

          <Typography sx={{ mt: 1 }}>
            Permission:
            {" "}
            {employee.permission_role}
          </Typography>

          <Typography sx={{ mt: 1 }}>
            Status:
            {" "}
            {employee.status}
          </Typography>

        </Box>

      </DialogContent>

    </Dialog>

  );
};

export default EmployeeProfileModal;