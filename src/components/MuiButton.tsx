import { Stack, Button, IconButton } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

const MuiButton = () => {
  return (
    // display of Stack default is flex
    <Stack spacing={4}>
      <Stack display='block' spacing={2} direction='row'>
        <Button variant='text' href='https://google.com'>
          Text
        </Button>
        <Button variant='contained'>Contained</Button>
        <Button variant='outlined'>Outlined</Button>
      </Stack>
      <Stack display='block' spacing={2} direction='row'>
        <Button variant='contained' color='primary'>
          Primary
        </Button>
        <Button variant='contained' color='secondary'>
          Secondary
        </Button>
        <Button variant='contained' color='error'>
          Error
        </Button>
        <Button variant='contained' color='warning'>
          Warning
        </Button>
        <Button variant='contained' color='info'>
          Info
        </Button>
        <Button variant='contained' color='success'>
          Success
        </Button>
      </Stack>
      <Stack display='block' spacing={2} direction='row'>
        <Button
          variant='contained'
          color='primary'
          disableElevation
          disableRipple
        >
          Primary
        </Button>
        <Button
          variant='contained'
          color='secondary'
          disableElevation
          disableRipple
        >
          Secondary
        </Button>
        <Button
          variant='contained'
          color='error'
          disableElevation
          disableRipple
        >
          Error
        </Button>
        <Button
          variant='contained'
          color='warning'
          disableElevation
          disableRipple
        >
          Warning
        </Button>
        <Button variant='contained' color='info' disableElevation disableRipple>
          Info
        </Button>
        <Button
          variant='contained'
          color='success'
          disableElevation
          disableRipple
        >
          Success
        </Button>
      </Stack>
      <Stack display='block' spacing={2} direction='row'>
        <Button variant='outlined' color='primary'>
          Primary
        </Button>
        <Button variant='outlined' color='secondary'>
          Secondary
        </Button>
        <Button variant='outlined' color='error'>
          Error
        </Button>
        <Button variant='outlined' color='warning'>
          Warning
        </Button>
        <Button variant='outlined' color='info'>
          Info
        </Button>
        <Button variant='outlined' color='success'>
          Success
        </Button>
      </Stack>
      <Stack display='block' spacing={2} direction='row'>
        <Button variant='text' color='primary'>
          Primary
        </Button>
        <Button variant='text' color='secondary'>
          Secondary
        </Button>
        <Button variant='text' color='error'>
          Error
        </Button>
        <Button variant='text' color='warning'>
          Warning
        </Button>
        <Button variant='text' color='info'>
          Info
        </Button>
        <Button variant='text' color='success'>
          Success
        </Button>
      </Stack>
      <Stack display='block' spacing={2} direction='row'>
        <Button variant='contained' size='small'>
          Small
        </Button>
        <Button variant='contained' size='medium'>
          Medium
        </Button>
        <Button variant='contained' size='large'>
          Large
        </Button>
      </Stack>
      <Stack display='block' spacing={2} direction='row'>
        <Button variant='contained' startIcon={<SendIcon />}>
          Incon Start
        </Button>
        <Button variant='contained' endIcon={<SendIcon />}>
          Icon End
        </Button>
      </Stack>
      <Stack display='block' spacing={2} direction='row'>
        <IconButton aria-label='send' size='small'>
          <SendIcon fontSize='small' />
        </IconButton>
        <IconButton aria-label='send' size='medium'>
          <SendIcon fontSize='medium' />
        </IconButton>
        <IconButton aria-label='send' size='large'>
          <SendIcon fontSize='large' />
        </IconButton>
      </Stack>
    </Stack>
  );
};

export default MuiButton;
