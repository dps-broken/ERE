import { useState } from 'react';
// import ImageContent from './components/ImageContent';
import Form from './components/Form';
import NewUser from './components/NewUser';
import './App.css';

export default function App() {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <>
      <div className='appMainContainer'>
        {isSignUp ? (
          <NewUser onSignIn={() => setIsSignUp(false)} />
        ) : (
          <Form onRegister={() => setIsSignUp(true)} />
        )}
        {/* <ImageContent/> */}
      </div>
    </>
  );
}