import UserContext from "./UserContext";
import { useState } from "react";

const UserContextProvider = ({children}) => {  // children (just a generic name), whatever comes as props, just pass ahead
    const [user, setUser] = useState(null);

    return (
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider;