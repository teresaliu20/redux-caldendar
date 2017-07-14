import React from 'react';
import AppContainer from '../containers/AppContainer';
import { Provider } from 'react-redux';

const App = ({store}) => {
    return (
        <Provider store={store}>
            <div className="container">
                <div className="page-title-wrapper">
                <div className="page-title">
                    <h1 className="your-day">Your day</h1>
                    <h1 className="one-page"> One page.</h1>
                </div>
                </div>
                <AppContainer />
            </div>
        </Provider>
    )
}

export default App;