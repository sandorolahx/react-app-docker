import React from 'react';
import Routing from './layout/Routing';
import 'reflect-metadata';
import { Provider } from 'inversify-react';
import container from './di/container';

const App = () => {
    return (
        <Provider container={container}>
            <Routing />
        </Provider>
    )
}

export default App
