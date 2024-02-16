import { Paper, Typography, Stack, Button } from "@mui/material"
import { TextFieldElement } from "../../components/Form-elements/TextFieldElement"
import { useForm, SubmitHandler, FieldValues } from "react-hook-form"

const defaultValues = {
  username: "",
  password: "",
};

function Form2() {
  const { control, handleSubmit } = useForm<FieldValues>({defaultValues: defaultValues});

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
  }
  return (
    <div>
      <Paper component={'form'} onSubmit={handleSubmit(onSubmit)} elevation={12} sx={{display: 'flex', flexDirection: 'column', maxWidth: '300px', rowGap: '10px', p: '30px'}}>
            <Typography align='center' variant='h4'>
              Форма 2
            </Typography>
            <Stack direction={'column'}>
              <TextFieldElement
                type='text'
                name={'username'}
                label={'Имя пользователя'}
                control={control}
                required={true}
                minLength={2}
                maxLength={25}
              />
              <TextFieldElement
                type='password'
                name={'password'}
                label={'Пароль'}
                control={control}
                required={true}
                minLength={6}
              />
              <Button type={'submit'} variant={'contained'} color={'secondary'}>
                Войти
              </Button>
            </Stack>
            <Typography align='center' sx={{mt: '10px'}}>Ещё не зарегистрированы?</Typography>
            <Button href='/signup' color='secondary'>Зарегистрироваться</Button>
          </Paper>
    </div>
  )
}

export default Form2
