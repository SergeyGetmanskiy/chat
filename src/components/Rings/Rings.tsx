import './Rings.css'

function Rings({children}) {

return (
  <div className='ring'>
    <i style={{"--clr":"#00ff0a"}} />
    <i style={{"--clr":"#ff0057"}} />
    <i style={{"--clr":"#fffd44"}} />
    {children}
  </div>
)
}

export default Rings
