import { Paper, Stack, Typography, Button } from '@mui/material'
import { useForm, SubmitHandler, FieldValues } from "react-hook-form"

import Background from '../../components/Background/Background'
import Rings from '../../components/Rings/Rings'
import { TextFieldElement } from '../../components/Form-elements/TextFieldElement'

const defaultValues = {
  username: "",
  password: "",
};

function Signin() {

  const { control, handleSubmit } = useForm<FieldValues>({defaultValues: defaultValues});

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
  }

  return (
    <Background>
      <Stack sx={{display: 'flex', height: '100%', alignItems: 'center', justifyContent: 'center'}}>
        <Rings>
          <Paper component={'form'} onSubmit={handleSubmit(onSubmit)} elevation={12} sx={{display: 'flex', flexDirection: 'column', maxWidth: '300px', rowGap: '10px', p: '30px'}}>
              <Typography align='center' variant='h4'>
                Вход
              </Typography>
              <br />
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
                <br />
                <TextFieldElement
                  type='password'
                  name={'password'}
                  label={'Пароль'}
                  control={control}
                  required={true}
                  minLength={6}
                />
                <br />
                <Button type={'submit'} variant={'contained'} color={'secondary'}>
                  Войти
                </Button>
              </Stack>
            <br />
            <Typography align='center'>Ещё не зарегистрированы?</Typography>
            <Button href='/sign-up' color='secondary'>Зарегистрироваться</Button>
          </Paper>
        </Rings>
      </Stack>
    </Background>
  )
}

export default Signin
