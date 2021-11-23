import { Container } from '@mui/material';
import React, { useState } from 'react'
import { Route, Switch } from 'react-router';
import { Navbar } from './components/navbar/Navbar';
import { LoginContext } from './Context/LoginContext';
import { Cash } from './pages/Cash';
import { LoginPage } from './pages/LoginPage';
import { Main } from './pages/Main';
import { PomodoroTimer } from './pages/PomodoroTimer';
import { Todos } from './pages/Todos';
import { WeatherPage } from './pages/WeatherPage';

function App() {

    const [isLogin, setIsLogin] = useState(localStorage.getItem('loginState') ? JSON.parse(localStorage.getItem('loginState')) : false )
    const goLogout = () => {
        setIsLogin(false)
        localStorage.setItem('loginState', 'false')
    }
    const goLogin = () => {
        setIsLogin(true)
        localStorage.setItem('loginState', 'true')
    }

    return (
        <LoginContext.Provider value={{goLogin}}>
            <div className="App">
                <Navbar goLogout={goLogout} isLogin={isLogin}/>
                <Container maxWidth="lg" style={{marginTop: 30, marginBottom: 30}}>
                    <Switch>
                        {!isLogin 
                            ? <LoginPage />
                            : <>
                                <Route path="/todos" component={Todos}/>
                                <Route path="/cash" component={Cash}/>
                                <Route path="/weather" component={WeatherPage}/>
                                <Route path="/pomodoro" component={PomodoroTimer}/>
                                <Route exact path="/" component={Main} />
                             </>
                        }
                    </Switch>
                </Container>
            </div>
        </LoginContext.Provider>
    );
}

export default App;
