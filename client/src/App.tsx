import { useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const [socket, setSocket] = useState();
  const inputRef  = useRef(null);

  function sendMessage(){
    // send the msg 
    if(!socket){
      return
    }
    //@ts-ignore
    const message = inputRef.current.value
    socket.send(message)
  } 

  useEffect(() => {
    // make a connection
    const ws = new WebSocket("ws://localhost:8080");
    setSocket(ws);
    ws.onmessage = (e) => {
      alert(e.data)
    }
  }, [])


  return (
    <>
        <div>
          <input ref={inputRef} type="text" placeholder='Message...' />
          <button onClick={sendMessage}>Send</button>
        </div>
    </>
  )
}

export default App
