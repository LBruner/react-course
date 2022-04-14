import Counter from "./Components/Counter";
import Header from "./Components/Header";
import Auth from "./Components/Auth";
import {useSelector} from "react-redux";
import UserProfile from "./Components/UserProfile";

const App = () => {
    const {isLoggedIn} = useSelector(state => state.auth)
    return (
        <>
            <Header/>
            <Auth/>
            <Counter/>
            {isLoggedIn && <UserProfile/>}
        </>
    );
}

export default App;
