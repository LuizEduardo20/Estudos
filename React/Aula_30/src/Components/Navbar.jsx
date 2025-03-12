import { Link } from 'react-router-dom'

export default function Navbar(){
    return(
        <>
        <div>
            <p>
            <Link to='/'>Home</Link>
            </p>
            <p>
            <Link to='/dashboard'>Dashboard</Link>
            </p>
            <p>
            <Link to='/contact'>Contact</Link>
            </p>
        </div>
        </>
    )
}