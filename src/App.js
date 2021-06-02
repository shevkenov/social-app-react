import AuthApp from "./AuthApp";
import { useAuthUser } from "./context/auth-context";
import UnAuthApp from "./UnAuthApp";

export default function App() {
    const authUser = useAuthUser();

    console.log(authUser)
  
    if(authUser) return <AuthApp />;
    else return <UnAuthApp />
}
