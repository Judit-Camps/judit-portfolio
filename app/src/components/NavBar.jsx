import { Link } from 'react-router-dom'
export default function NavBar() {
    return (
        <div className="fixed top-0 w-[100%] left-0 flex flex-row bg-black bg-opacity-20">
            <h2><Link to={'/'}>Judit Camps</Link></h2>

            <div>
                <h3><Link to={'/projectes'}>Projectes</Link></h3>
                <h3><Link to={'/contacte'}>Contacte</Link></h3>
            </div>

        </div>
    )
}