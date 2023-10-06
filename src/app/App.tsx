import React from 'react';
import {Link} from 'react-router-dom';
import './styles/index.scss'
import {useTheme} from "./providers/ThemeProvider";
import {classNames as cn} from "shared/lib/classNames/classNames";
import {AppRouter} from "app/providers/router";
import {Navbar} from "widgets/Navbar";

const App = () => {
    const {theme} = useTheme();

    return (
        <div className={cn('app', {}, [theme])}>
            <Navbar />
            <AppRouter />
        </div>
    );
};

export default App;