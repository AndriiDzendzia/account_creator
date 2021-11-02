import { useState } from "react";
import putUserData from "./GraphClient";


const AccountCreateForm = () => {
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [email, setEmail] = useState();
    const [location, setLocation] = useState("");
    const [position, setPosition] = useState("");
    const [password, setPassword] = useState("");

    const addAccount = async () => {
        const account = {
            givenName: name,
            surname: surname,
            officeLocation: location,
            jobTitle: position,
            password: password
        };

        console.log(account);

        try{
        const user = await putUserData(account);
        setEmail(user.userPrincipalName)
        }
        catch(error){
            console.log(error);
        }
    }

    return (
        <div className="App-add-account-form">
            <label>Name</label>
            <input placeholder="John" value={name} onChange={e => setName(e.target.value)} />
            <label>Surname</label>
            <input placeholder="Doe" value={surname} onChange={e => setSurname(e.target.value)} />
            <label>Location</label>
            <input placeholder="Lviv" value={location} onChange={e => setLocation(e.target.value)} />
            <label>Position</label>
            <input placeholder="QC" value={position} onChange={e => setPosition(e.target.value)} />
            <label>Password</label>
            <input placeholder="password" value={password} onChange={e => setPassword(e.target.value)} />
            <button onClick={addAccount}>Add account</button>
            {email &&
            (
                <div>
            <label>Your email</label>
            <input type="email" placeholder="jdoe@gmail.com" value={email} onChange={e => setEmail(e.target.value)} />
            </div>
            )
            }
        </div>
    );
};

export default AccountCreateForm;