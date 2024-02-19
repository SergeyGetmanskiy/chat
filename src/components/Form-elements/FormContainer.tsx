import { Paper, Typography, Stack } from "@mui/material"

import { FormProps } from "../../interfaces/FormProps";

function FormContainer({formName, children}: FormProps) {
  return (
    <div>
      <Paper elevation={2} sx={{display: 'flex', flexDirection: 'column', maxWidth: '300px', rowGap: '10px', p: '30px'}}>
        <Typography align='center' variant='h4'>{formName}</Typography>
        <Stack direction={'column'} gap={2}>
          {children}
        </Stack>
      </Paper>
    </div>
  )
}

export default FormContainer
