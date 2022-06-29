import React from 'react';
import GlobalStyles from '../styles/GlobalStyles';
import Header from './header/Header';
import Main from './main/Main';

const App = () => {
    return (
        <>
            <GlobalStyles/>
            <Header/>
            <Main/>
        </>
    );
};

export default App;