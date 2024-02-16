import {
  Stack,
  Typography,
  ToggleButton,
  ToggleButtonGroup,
} from '@mui/material';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import { useState } from 'react';

const MuiToogle = () => {
  const [formats, setFormats] = useState<string[]>([]);
  console.log({ formats });
  const handleFormatChange = (
    _event: React.MouseEvent<HTMLElement>,
    updatedFormats: string[]
  ) => {
    setFormats(updatedFormats);
  };

  return (
    <Stack spacing={4}>
      <Typography variant='h2'>Toogle Buttons</Typography>
      <Stack direction='row' display='block' spacing={2}>
        <ToggleButtonGroup
          aria-label='text formating'
          value={formats}
          onChange={handleFormatChange}
          size='small'
          color='success'
          orientation='vertical'
        >
          <ToggleButton value='bold' aria-label='bold'>
            <FormatBoldIcon />
          </ToggleButton>
          <ToggleButton value='italic' aria-label='italics'>
            <FormatItalicIcon />
          </ToggleButton>
          <ToggleButton value='underline' aria-label='underline'>
            <FormatUnderlinedIcon />
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>
    </Stack>
  );
};

export default MuiToogle;

// check the video to use defaul toogle behaviour
// https://www.youtube.com/watch?v=aOZv5mXMxWI&list=PLC3y8-rFHvwh-K9mDlrrcDywl7CeVL2rO&index=7
