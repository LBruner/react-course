import classes from './Header.module.css';
import {useDispatch, useSelector} from "react-redux";
import {authActions} from "../store/store";

const Header = () => {
  const dispatch = useDispatch();
  const {isLoggedIn} = useSelector((state) => state.auth);

  const onLogout = () =>{
    dispatch(authActions.logout())
  }
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      <nav>
        <ul>
          <li>
            <a href='/'>My Products</a>
          </li>
          <li>
            <a href='/'>My Sales</a>
          </li>
          <li>
            {isLoggedIn && <button onClick={onLogout}>Logout</button>}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
