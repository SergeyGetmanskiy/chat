import { ReactNode } from 'react'
import './Rings.css'

interface CssVariable extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  [--clr]: string,
}

function Rings({children}: {children: ReactNode}) {

return (
  <div className='ring'>
    <i style={{[--clr]:"#00ff0a"}} />
    <i style={{"--clr":"#ff0057"}} />
    <i style={{"--clr":"#fffd44"}} />
    {children}
  </div>
)
}

export default Rings
