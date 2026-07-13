import { Box } from "@mui/material";
import Sidebar from "./Sidebar";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <Box sx={{ display: "flex" }}>
      <Sidebar />

      <Box
        sx={{
          marginLeft: "260px",
          width: "100%",
          minHeight: "100vh",
          backgroundColor: "#020617",
          padding: 3,
          color: "#E5E7EB",
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default Layout;