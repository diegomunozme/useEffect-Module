import React, { useState, useEffect } from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  //This useEffect hook is run initially when the app starts for the first time, 
  // and after every dependency change, which is none for this app.  
  useEffect(()=>{
    // This data fetching and storage is a side effect of the UI, which is why we use
    // use Effect
    const storedUserLoggedIn = localStorage.getItem('isLoggedIn');

    if(storedUserLoggedIn === '1'){
      setIsLoggedIn(true)
    }
  }, [])

  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways

    // Creates a key value pair in local storage
    localStorage.setItem('isLoggedIn', '1')
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    setIsLoggedIn(false);
  };

  return (
    <React.Fragment>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </React.Fragment>
  );
}

export default App;
