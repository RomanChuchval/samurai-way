import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Navbar from "./Components/Navbar/Navbar";
import Profile from './Components/Profile/Profile';
import Footer from './Components/Footer/Footer';
import Dialogs from "./Components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";


type AppPropsType = {
    state: {
        dialogsPage: {
            messages: { message: string }[],
            dialogs: { id: string, name: string }[],
        },
        profilePage: {
            posts: { id: number, message: string, likeCount: number }[]
        },
        navbar: {
            friends: {name: string}[],
        },
    }
}
const App = (props: AppPropsType) => {
    return (
        <BrowserRouter>
            <div className='app_wrapper'>
                <Header/>
                <Navbar data={props.state.navbar}/>
                <div className='app_wrapper_content'>
                    <Route path='/dialogs' render={() => <Dialogs data={props.state.dialogsPage}/>}/>
                    <Route path='/profile' render={() => <Profile data={props.state.profilePage}/>}/>
                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/music' render={() => <Music/>}/>
                    <Route path='/settings' render={() => <Settings/>}/>
                </div>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;