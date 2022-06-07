import { useEffect } from 'react';
import './App.css';
import { jwt_decode } from 'jwt-decode';

const google = window.google

function handleCallbackResponse(response){
  console.log("Encoded JWT ID token: " + response.credential);
  var userObject = jwt_decode(response.credentioal);
  console.log(userObject);
}

function App() {
  useEffect(() => {
    google.accounts.id.initialize({
      client_id: "21428835099-a8fqt4osoj9mvsthj694bdalik339mu2.apps.googleusercontent.com",
      callback: handleCallbackResponse
    });
  
    google.accounts.id.renderButton(
      document.getElementById("signInDiv"),
      {theme: "outline", size: "large"}
    );
  }, []);
  
  return (
    <div className="App">
      <div id="signInDiv"></div>
    </div>
  );
}

export default App;
