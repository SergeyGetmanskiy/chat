import { Paper, Stack, Typography, Button } from '@mui/material'
import { useForm, SubmitHandler, FieldValues } from "react-hook-form"

import Rings from '../../components/Rings/Rings'
import { TextFieldElement } from '../../components/Form-elements/TextFieldElement'
import { useNavigate } from 'react-router-dom';
import Background from '../../components/Background/Background';

const defaultValues = {
  username: "",
  password: "",
};

function Signin() {

  const navigate = useNavigate();

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
            <Button onClick={() => navigate('/signup')} color='secondary'>Зарегистрироваться</Button>
          </Paper>
        </Rings>
      </Stack>
    </Background>
  )
}

export default Signin
