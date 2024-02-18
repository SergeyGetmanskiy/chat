import { Paper, Typography, Stack } from "@mui/material"
import { useFormState } from "react-hook-form"
import { useEffect } from "react"

function FormContainer({formName, control, setIsValid, children}) {
  const { isValid } = useFormState({control});
  useEffect(() => {
    if(isValid) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [isValid, setIsValid])
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
