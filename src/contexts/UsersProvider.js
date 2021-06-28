import React, { useContext, useState } from 'react'


const UsersContext = React.createContext()

export function useUser() {
  return useContext(UsersContext)
}

export function UserProvider({ children }) {
  const [user, setUser] = useState({});
  
  
  return (
    <UsersContext.Provider value={{ user, setUser }}>
      {children}
    </UsersContext.Provider>
  )
}
