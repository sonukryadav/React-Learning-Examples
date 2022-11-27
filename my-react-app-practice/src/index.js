import React from 'react';
import ReactDOM from 'react-dom/client';
import AllContent from './Components/AllContent/AllContent';
import { Provider } from 'react-redux';
import { ChakraProvider } from '@chakra-ui/react'
import { store } from './Components/Random&w3/React-Redux/ReduxStore/store'
import {BrowserRouter } from 'react-router-dom'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        {/* <ChakraProvider> */}
            <Provider store={store}>
                <AllContent  />
            </Provider>
       {/* </ChakraProvider> */}
    </BrowserRouter>
    
    
);