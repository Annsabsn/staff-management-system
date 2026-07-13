import {
  Box,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";

import {
  MdDashboard,
  MdAccountTree,
  MdFolder,
  MdHistory,
  MdBarChart,
  MdSettings,
} from "react-icons/md";

import { useNavigate, useLocation } from "react-router-dom";

const menuItems = [
  {
    name: "Dashboard",
    icon: <MdDashboard />,
    path: "/",
  },
  {
    name: "Hierarchy",
    icon: <MdAccountTree />,
    path: "/hierarchy",
  },
  {
    name: "Projects",
    icon: <MdFolder />,
    path: "/projects",
  },
  {
    name: "Recent Modification",
    icon: <MdHistory />,
    path: "/recent",
  },
  {
    name: "Reports",
    icon: <MdBarChart />,
    path: "/reports",
  },
  {
    name: "Settings",
    icon: <MdSettings />,
    path: "/settings",
  },
];

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Box
      sx={{
        width: 260,
        height: "100vh",
        backgroundColor: "#0B1120",
        color: "#E5E7EB",
        padding: 2,
        position: "fixed",
        left: 0,
        top: 0,
      }}
    >
      <Typography
        variant="h5"
        sx={{
          fontWeight: "bold",
          mb: 5,
          textAlign: "center",
          color: "#60A5FA",
        }}
      >
        SAMS
      </Typography>

      <List>
        {menuItems.map((item) => {
          const active = location.pathname === item.path;

          return (
            <ListItemButton
              key={item.name}
              onClick={() => navigate(item.path)}
              sx={{
                mb: 1.5,
                borderRadius: "12px",
                backgroundColor: active
                  ? "#111827"
                  : "transparent",

                "&:hover": {
                  backgroundColor: "#111827",
                },

                boxShadow: active
                  ? "0px 0px 10px rgba(96,165,250,0.5)"
                  : "none",
              }}
            >
              <ListItemIcon
                sx={{
                  color: "#60A5FA",
                  minWidth: "40px",
                  fontSize: "24px",
                }}
              >
                {item.icon}
              </ListItemIcon>

              <ListItemText
                primary={item.name}
                primaryTypographyProps={{
                  fontSize: "15px",
                  fontWeight: 500,
                }}
              />
            </ListItemButton>
          );
        })}
      </List>
    </Box>
  );
};

export default Sidebar;