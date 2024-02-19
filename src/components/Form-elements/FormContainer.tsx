import { useEffect } from "react"
import { Paper, Typography, Stack } from "@mui/material"
import { useFormState } from "react-hook-form"

import { FormProps } from "../../interfaces/FormProps";

function FormContainer({formName, control, setIsNextBtnActive, children}: FormProps) {
  const { isValid } = useFormState({control});
  useEffect(() => {
    if(isValid) {
      setIsNextBtnActive(true);
    } else {
      setIsNextBtnActive(false);
    }
  }, [isValid, setIsNextBtnActive])
  //useEffect(() => setIsValid(false), [])
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
