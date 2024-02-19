import { useState } from 'react'
import { Paper, Stack, Typography } from '@mui/material'
import { useForm, SubmitHandler, Control, FieldValues, useFormState } from "react-hook-form"

import Background from '../../components/Background/Background'
import StepperElement from '../../components/StepperElement/StepperElement'
import Form1 from './Form1'
import Form2 from './Form2'
import Form3 from './Form3'
import Form4 from './Form4'

const defaultValues = {
  sex: "",
  firstName: "",
  age: "",
  country: "",
  city: "",
  hobby: "",
  username: "",
  password: "",
};

const steps = ['Кто ты ?', 'Где живешь ?', 'Твоё хобби', 'Никнейм и пароль'];
const forms = [Form1, Form2, Form3, Form4]

function Signup() {
  const [activeStep, setActiveStep] = useState(0);
  const { control, handleSubmit, reset } = useForm<FieldValues>({defaultValues: defaultValues, mode: 'onChange', reValidateMode: 'onSubmit'});
  const { isValid } = useFormState({control});
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
  }
  const renderForm = (step: number, control: Control<FieldValues>)  => {
    if(step <= steps.length) {
      const Form = forms[step - 1]
      return <Form formName={steps[step - 1]} control={control} />
    } else {
      return null
    }
  }

  return (
    <Background>
      <Stack sx={{position: 'relative', display: 'flex', height: '100%', alignItems: 'center', justifyContent: 'center', zIndex: 999}}>
        <Paper component={'form'} onSubmit={handleSubmit(onSubmit)} elevation={12} sx={{display: 'flex', flexDirection: 'column', rowGap: '10px', p: '30px'}}>
          <Typography align='center'>Регистрация</Typography>
          <StepperElement
            activeStep={activeStep}
            setActiveStep={setActiveStep}
            steps={steps}
            form={
              renderForm(activeStep + 1, control)
            }
            reset={reset}
            disabled={!isValid}
          />
        </Paper>
      </Stack>
    </Background>
  )
}

export default Signup
