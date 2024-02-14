import { Stack, Typography } from '@mui/material';

const MuiTypography = () => {
  return (
    <Stack spacing={2}>
      <Typography variant='h1'>h1 Heading</Typography>
      <Typography variant='h2'>h2 Heading</Typography>
      <Typography variant='h3'>h3 Heading</Typography>
      <Typography variant='h4'>h4 Heading</Typography>
      <Typography variant='h5'>h5 Heading</Typography>
      <Typography variant='h6'>h6 Heading</Typography>

      <Typography variant='subtitle1'>Subtitle 1</Typography>
      <Typography variant='subtitle2'>Subtitle 2</Typography>

      <Typography variant='body1'>Body 1</Typography>
      <Typography variant='body2'>Body 2</Typography>

      <Typography variant='h4' component='h1' gutterBottom>
        h4 Heading as h1 component with margin on bottom
      </Typography>

      <Typography variant='h4' component='h1'>
        h4 Heading as h1 component{' '}
      </Typography>
    </Stack>
  );
};

export default MuiTypography;
