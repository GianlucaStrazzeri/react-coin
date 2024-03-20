import { Link, Outlet } from 'react-router-dom';

function Root() {
    return(
        <>
        <h1>Coins</h1>
        <nav>
        <Link to="/">Home</Link>
        <Link to="/coin">Coin</Link>
        <Link to="/favorites">Favorites</Link>
        </nav>
        <Outlet /> {/* outlet para renderizar las rutas hijas */}
        </>
    )
}

export default Root;