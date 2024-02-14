import { ReactNode } from 'react'
import './Rings.css'

function Rings({children}: {children: ReactNode}) {

return (
  <div className='ring'>
    {/* @ts-expect-error --clr variable does not exist in type 'Properties<string | number, string & {}>' */}
    <i style={{"--clr":"#00ff0a"}} />
    {/* @ts-expect-error --clr variable does not exist in type 'Properties<string | number, string & {}>' */}
    <i style={{"--clr":"#ff0057"}} />
    {/* @ts-expect-error --clr variable does not exist in type 'Properties<string | number, string & {}>' */}
    <i style={{"--clr":"#fffd44"}} />
    {children}
  </div>
)
}

export default Rings
