import classes from './Auth.module.css';
import {useDispatch, useSelector} from "react-redux";
import {authActions} from "../store/store";

const Auth = () => {
    const dispatch = useDispatch();
    const {isLoggedIn} = useSelector((state) => state.auth);

    const onLoginHandler = () =>{
        dispatch(authActions.login())
    }
    
    const onSubmitHandler = (e) =>{
        e.preventDefault();
    } 
    
    return (<main className={classes.auth}>
            <section>
                <form onSubmit={onSubmitHandler}>
                    <div className={classes.control}>
                        <label htmlFor='email'>Email</label>
                        <input type='email' id='email'/>
                    </div>
                    <div className={classes.control}>
                        <label htmlFor='password'>Password</label>
                        <input type='password' id='password'/>
                    </div>
                    {!isLoggedIn && <button onClick={onLoginHandler}>Login</button>}
                </form>
            </section>
        </main>);
};

export default Auth;
