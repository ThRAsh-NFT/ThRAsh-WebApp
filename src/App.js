import React, { useEffect, useState } from "react";
import GlobalStyles from "./styles/GlobalStyles"
import { ThemeProvider } from 'styled-components'
import { light } from "./styles/Themes"

import Main from './components/Main'
import { ClimbingBoxLoader } from "react-spinners"; //react spinner when loading
import { SpinnerInfinity } from 'spinners-react';//react spinner


function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // when the component is loading, the loading screen is displayed for 5 seconds
    setTimeout(() => {
      setLoading(false);
    }, 7000);
  }, []);

  return (

    <div>
      {
        loading ? // If loading is true
          <div style={{ textAlign: 'center', backgroundColor: "black", display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100vh' }}>
            <ClimbingBoxLoader color={'white'} loading={loading} size={23} />
          </div>
          : // If loading is true
          <>
            <Main />
          </>

      }

    </div>


  );
}

export default App;
