import {
  Box,
  Typography,
  Paper,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

const logs = [
  "Employee Added",
  "Project Updated",
  "New Assignment Created",
  "Role Permission Changed",
];

const RecentModification = () => {

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
        Recent Modifications
      </Typography>

      <Paper
        sx={{
          backgroundColor: "#111827",
          borderRadius: "20px",
          padding: 3,
        }}
      >

        <List>

          {logs.map((log, index) => (

            <ListItem key={index}>

              <ListItemText
                primary={log}

                primaryTypographyProps={{
                  color: "#E5E7EB",
                }}
              />

            </ListItem>

          ))}

        </List>

      </Paper>

    </Box>

  );
};

export default RecentModification;