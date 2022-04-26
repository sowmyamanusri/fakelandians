import { Routes, Route } from "react-router-dom";
import MainLayout from './layout';
import Home from './home';
import Misdemeanours from './misdemeanours';
import Confess from "./Confess";
import UrlError from "./urlError";

const Router =() => <Routes>
    <Route path="/" element = {<MainLayout/>}>
        <Route index element = {<Home />} />
        <Route path ="misdemeanours" element = {<Misdemeanours />} />
        <Route path ="confess" element = {<Confess />} />
        <Route path ="*" element = {<UrlError />} />

    </Route>

</Routes>


export default Router;