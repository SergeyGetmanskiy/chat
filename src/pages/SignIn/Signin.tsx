import { Paper, Stack, Typography, Button } from '@mui/material'
import { FormContainer, TextFieldElement } from 'react-hook-form-mui'

import Background from '../../components/Background/Background'
import Rings from '../../components/Rings/Rings'


function Signin() {
  return (
    <Background>
      <Stack sx={{display: 'flex', height: '100%', alignItems: 'center', justifyContent: 'center'}}>
        <Rings>
          <Paper elevation={12} sx={{display: 'flex', flexDirection: 'column', rowGap: '10px', p: '30px'}}>
            <FormContainer>
              <Typography align='center' variant='h4'>
                Вход
              </Typography>
              <br />
              <Stack direction={'column'}>
                <TextFieldElement
                  name={'username'}
                  label={'Имя пользователя'}
                />
                <br />
                <TextFieldElement
                  name={'password'}
                  label={'Пароль'}
                />
                <br />
                <Button type={'submit'} variant={'contained'} color={'secondary'}>
                  Войти
                </Button>
              </Stack>
            </FormContainer>
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
