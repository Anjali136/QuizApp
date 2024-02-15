import { AuthLogin} from "../../components/auth/login";
import { Navbar } from "../../components/Navbar/Navbar";
import { Fragment } from "react";
export const Login=()=>{
return(
    <Fragment>
        <Navbar route="login"/>
        <AuthLogin/>
    </Fragment>
)
}