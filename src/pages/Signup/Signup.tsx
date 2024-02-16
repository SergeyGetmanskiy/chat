import { useState } from 'react'
import { Paper, Stack, Typography } from '@mui/material'
//import { useForm, SubmitHandler, FieldValues } from "react-hook-form"

import Background from '../../components/Background/Background'
import StepperElement from '../../components/StepperElement/StepperElement'
// import { TextFieldElement } from '../../components/Form-elements/TextFieldElement'
import Form1 from './Form1'
import Form2 from './Form2'
import Form3 from './Form3'
import Form4 from './Form4'

/*
const defaultValues = {
  username: "",
  password: "",
}; */

const steps = ['Кто ты ?', 'Где живешь ?', 'Твоё хобби', 'Придумай никнейм'];

function Signup() {
  const [activeStep, setActiveStep] = useState(0);

  /* const { control, handleSubmit } = useForm<FieldValues>({defaultValues: defaultValues});

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
  } */
  const renderForm = (step) => {
    if (step === 1) {
      return <Form1 />
    } else if (step === 2) {
      return <Form2 />
    } else if (step === 3) {
      return <Form3 />
    } else if (step === 4) {
      return <Form4 />
    } else {
      return null
    }
  }

  return (
    <Background>
      <Stack sx={{position: 'relative', display: 'flex', height: '100%', alignItems: 'center', justifyContent: 'center', zIndex: 999}}>
        <Paper component={'form'} elevation={12} sx={{display: 'flex', flexDirection: 'column', rowGap: '10px', p: '30px'}}>
          <Typography align='center'>Регистрация</Typography>
          <StepperElement
            activeStep={activeStep}
            setActiveStep={setActiveStep}
            steps={steps}
            form={
              renderForm(activeStep + 1)
            }
          />
        </Paper>
      </Stack>
    </Background>
  )
}

export default Signup
