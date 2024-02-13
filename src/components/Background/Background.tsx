import React from 'react'
import { Container } from '@mui/material'

import { main } from '../../constants/constants';
import FireFlies from '../../components/FireFlies/FireFlies';

const {backgroundImage} = main;

const backgroundStyles = {
  height: '100vh',
  backgroundImage: `url(${backgroundImage})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
}

function Background({children}) {

  return (
    <Container maxWidth={'100vh'} disableGutters sx={{margin: 0, overflow: 'hidden'}}>
      <div style={backgroundStyles}>
        <div>
          <FireFlies />
        </div>
        {children}
      </div>
    </Container>
  )
}

export default Background
