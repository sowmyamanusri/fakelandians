import { Routes, Route } from "react-router-dom";
import MainLayout from './layout';
import Home from './home';
import MisdemeanoursList from './misdemeanoursList';
import Confess from './confess';
import UrlError from "./urlError";

const Router =() => <Routes>
    <Route path="/" element = {<MainLayout/>}>
        <Route index element = {<Home />} />
        <Route path ="misdemeanoursList" element = {<MisdemeanoursList />} />
        <Route path ="confess" element = {<Confess />} />
        <Route path ="*" element = {<UrlError />} />

    </Route>

</Routes>


export default Router;