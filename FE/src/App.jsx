import { useState } from 'react'

import './App.css'

import AuthPage from "./AuthPage"
import ChatsPage from "./ChatsPage"

function App(){
  const [user, setUSer] = useState(undefined)
  if(!user){
    return <AuthPage onAuth={(user) => setUSer(user)} />;
  }else{
    return <ChatsPage user={user}/>
  }
}
export default App