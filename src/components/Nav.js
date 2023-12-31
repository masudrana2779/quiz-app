
import { Link } from 'react-router-dom'
import logo from '../assets/images/logo-bg.png'
import classes from '../styles/Nav.module.css'
const Nav = () => {
    return (
        <>
            <nav className={classes.nav}>
                <ul>
                    <li>
                        <Link to="/" className={classes.brand}>
                            <img src={logo} alt="Learn with Sumit Logo" />
                            <h3>Learn with Sumit</h3>
                        </Link>
                    </li>
                </ul>
                <div className={classes.account}>
                    <span className="material-icons-outlined" title="Account">
                        account_circle
                    </span>
                    <Link to="/signup">Signup</Link>
                    <Link to="/login">Login</Link>
                    {/* <span className="material-icons-outlined" title="Logout"> logout </span> */}
                </div>
            </nav>
        </>
    )
}

export default Nav