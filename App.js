import './App.css';
import {signInWithPopup,FacebookAuthProvider} from 'firebase/auth';
import { authentication } from './FirebaseConfig';


function App() {

const signInWithFacebook = ()=>{
  const provider = new FacebookAuthProvider();
  signInWithPopup(authentication, provider)
  .then((re)=>{
    console.log(re);
  })

  .catch((err)=>{
    console.log(err.message);
  })

}

  return (
    
    <button onClick={signInWithFacebook}>Sign in with FB </button>
  );
}

export default App;
