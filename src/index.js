import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import './components/loader/loader.scss'
import './components/resume/resume.scss'
import './components/resume/resumeTitles.scss'
import './components/resume/Del/HorizontalDel.scss'
import './components/resume/jobs/MyJob.scss'
import './components/resume/skills/Skills.scss'
import App from './App';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { BrowserRouter } from 'react-router-dom';


ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>, document.getElementById('root')
);
