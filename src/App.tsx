import React from 'react';
import './App.scss';
import Main from "./components/Main/Main";
import Banner from './components/Banner/Banner';
import Usage from './components/Usage/Usage'
import Improve from "./components/Improve/Improve";
import Donate from "./components/Donate/Donate";
import {AppProvider} from "./Context";
import CurrentUsage from "./components/CurrentUsage/CurrentUsage";

function App() {

    return (
        <AppProvider>
            <Main>
                <CurrentUsage/>
                <Banner/>
                <Usage/>
                <Improve/>
                <Donate/>
            </Main>
        </AppProvider>
    )
}

export default App;
