import { ReactNode } from 'react'
import './Rings.css'

function Rings({children}: {children: ReactNode}) {

return (
  <div className='ring'>
    {/*eslint-disable-next-line*/}
    <i style={{[--clr]:"#00ff0a"}} />
    {/*eslint-disable-next-line*/}
    <i style={{"--clr":"#ff0057"}} />
    {/*eslint-disable-next-line*/}
    <i style={{"--clr":"#fffd44"}} />
    {children}
  </div>
)
}

export default Rings
