import { Stack, TextField, Typography, InputAdornment } from '@mui/material';
import { useState } from 'react';
import VisibilityIcon from '@mui/icons-material/Visibility';

const MuiTextField = () => {
  const [value, setValue] = useState('');

  return (
    <Stack spacing={4}>
      <Typography variant='h2'>Text Field</Typography>
      <Stack display='block' spacing={2} direction='row'>
        <TextField label='Name' variant='outlined' />
        <TextField label='Name' variant='filled' />
        <TextField label='Name' variant='standard' />
      </Stack>
      <Stack display='block' spacing={2} direction='row'>
        <TextField
          label='Secondary small'
          size='small'
          color='secondary'
          variant='outlined'
        />
      </Stack>
      <Stack display='block' spacing={2} direction='row'>
        <TextField label='Form Input' required />
        <TextField label='Helper Text' helperText='This is helper text.' />
        <TextField
          type='password'
          label='Password'
          helperText='Do not share you password'
        />
        <TextField
          type='password'
          label='Disabled'
          helperText='Do not share you password'
          disabled
        />
        <TextField label='Read Only' InputProps={{ readOnly: true }} />
      </Stack>
      <Stack display='block' spacing={2} direction='row'>
        <TextField
          label='Amount'
          InputProps={{
            startAdornment: <InputAdornment position='start'>$</InputAdornment>,
          }}
        />
        <TextField
          label='Weight'
          InputProps={{
            endAdornment: <InputAdornment position='end'>kg</InputAdornment>,
          }}
        />
        <TextField
          type='password'
          label='Password'
          helperText='Do not share you password'
          InputProps={{
            endAdornment: (
              <InputAdornment position='end'>
                <VisibilityIcon fontSize='small' />
              </InputAdornment>
            ),
          }}
        />
      </Stack>
      <Stack display='block' spacing={2} direction='row'>
        <TextField
          label='Form input'
          value={value}
          onChange={(e) => setValue(e.target.value)}
          required
          error={!value}
          helperText={!value ? 'Required' : 'Do not share your password'}
        />
      </Stack>
    </Stack>
  );
};

export default MuiTextField;
