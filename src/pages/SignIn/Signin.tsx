import { Paper, Stack, TextField, Typography } from '@mui/material'
import Background from '../../components/Background/Background'
import Rings from '../../components/Rings/Rings'


function Signin() {
  return (
    <Background>
      <Stack sx={{display: 'flex', height: '100%', alignItems: 'center', justifyContent: 'center'}}>
        <Rings>
          <Paper elevation={12} sx={{display: 'flex', flexDirection: 'column', rowGap: '10px', p: '20px'}}>
            <Typography align='center' variant='h4'>
              Вход
            </Typography>
            <TextField
              id="userId"
              type='text'
              label="User name"
              size='small'
              required
            />
            <TextField
              id="userId"
              type='text'
              label="Password"
              size='small'
              required
            />
          </Paper>
        </Rings>
      </Stack>
    </Background>
  )
}

export default Signin
