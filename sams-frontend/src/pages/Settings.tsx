import {
  Box,
  Typography,
  Paper,
  Switch,
  FormControlLabel,
  Divider,
} from '@mui/material';

const Settings = () => {

  return (
    <Box>

      <Typography
        variant="h4"
        sx={{
          color: '#E5E7EB',
          fontWeight: 'bold',
          mb: 4,
        }}
      >
        Settings
      </Typography>

      <Paper
        sx={{
          backgroundColor: '#111827',
          padding: 4,
          borderRadius: '20px',
          color: '#fff',
        }}
      >

        <FormControlLabel
          control={<Switch defaultChecked />}
          label="Enable Notifications"
        />

        <Divider sx={{ my: 3, borderColor: '#334155' }} />

        <FormControlLabel
          control={<Switch defaultChecked />}
          label="Enable Dark Mode"
        />

        <Divider sx={{ my: 3, borderColor: '#334155' }} />

        <FormControlLabel
          control={<Switch />}
          label="Email Alerts"
        />

      </Paper>

    </Box>
  );
};

export default Settings;
