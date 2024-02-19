import {useState, Fragment, Dispatch, SetStateAction, ReactNode} from 'react';
import {UseFormReset, FieldValues} from 'react-hook-form'
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/material';

interface StepperElementProps {
  activeStep: number;
  setActiveStep: Dispatch<SetStateAction<number>>;
  steps: string[];
  form: ReactNode;
  reset: UseFormReset<FieldValues>;
  disabled: boolean;
}

export default function StepperElement({activeStep, setActiveStep, steps, form, reset, disabled}: StepperElementProps) {

  const [skipped, setSkipped] = useState(new Set<number>());

  const isStepOptional = (step: number) => {
    return step === 1 || step === 2;
  };

  const isStepSkipped = (step: number) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
    reset();
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps: { completed?: boolean } = {};
          const labelProps: {
            optional?: React.ReactNode;
          } = {};
          if (!isStepOptional(index)) {
            labelProps.optional = (
              <Typography variant="caption">*</Typography>
            );
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps} >
              <StepLabel {...labelProps} sx={{'& .MuiStepLabel-labelContainer': {display: 'flex'},}}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <Fragment>
          <Stack sx={{display: 'flex', minHeight: '360px', pt: '20px', pb: '20px', alignItems: 'center', justifyContent: 'center'}}>
            <Button type='submit' color='secondary' variant='contained'>Зарегистрироваться</Button>
          </Stack>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick={handleReset}>Сброс</Button>
          </Box>
        </Fragment>
      ) : (
        <Fragment>
          <Stack sx={{display: 'flex', minHeight: '360px', pt: '20px', pb: '20px', alignItems: 'center', justifyContent: 'center'}} >
            {form}
          </Stack>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Назад
            </Button>
            <Box sx={{ flex: '1 1 auto' }} />
            {isStepOptional(activeStep) && (
              <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                Пропустить
              </Button>
            )}
            <Button onClick={handleNext} disabled={disabled}>
              Далее
            </Button>
          </Box>
        </Fragment>
      )}
    </Box>
  );
}
