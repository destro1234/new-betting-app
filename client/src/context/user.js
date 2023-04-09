import React from "react";

const UserContext = React.createContext();

function UserProvider({ children }) {
    // the value prop of the provider will be our context data
    // this value will be available to child components of this provider
    return <UserContext.Provider value={null}>{children}</UserContext.Provider>;
  }

  export { UserContext, UserProvider };