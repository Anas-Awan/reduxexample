import React, { Component } from 'react'
import Posts from './component/Posts';
import PostForm from './component/PostForm';
import { Provider } from 'react-redux';
import store from './store';

class App extends Component {
    render() {
        return (
            <div>
                <Provider store={store}>
                    <PostForm />
                    <hr />
                    <Posts />
                </Provider>
            </div>
        )
    }
}

export default App
