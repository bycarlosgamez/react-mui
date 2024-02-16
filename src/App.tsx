import MuiButton from './components/MuiButton';
import MuiTypography from './components/MuiTypography';
import { Stack } from '@mui/material';
import './App.css';
import MuiToogle from './components/MuiToogle';
import MuiTextField from './components/MuiTextField';

const App = () => {
  return (
    <Stack spacing={12}>
      <MuiTypography />
      <MuiButton />
      <MuiToogle />
      <MuiTextField />
    </Stack>
  );
};

export default App;
