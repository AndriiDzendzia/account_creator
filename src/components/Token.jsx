import { useMsal } from "@azure/msal-react";
import { useState } from "react";

const Token = () => {
    const [token, setToken] = useState();
    const { instance } = useMsal();

    const getToken = async () =>{
        var result = await instance.loginPopup({
            prompt: "select_account",
            scopes:[
            "openid",
            "offline_access",
            "profile",
            "api://SoftserveCarProjectApi/ApiAccess"],
        }).catch(e => console.error(e));
        setToken(result.accessToken);
        navigator.clipboard.writeText(result.accessToken);
    };

    return (
        <div>
            <button onClick={getToken}>Get Token</button>
            <p style={{lineBreak: "anywhere"}}>{token}</p>
        </div>);
}

export default Token;