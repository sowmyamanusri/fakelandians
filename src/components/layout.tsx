import { Outlet } from "react-router-dom";
import Header from "./header";
import  Footer from "./footer";

const MainLayout =() => <>
 <Header />
 <main className ='main__page' style ={{flex:1}}>
     <Outlet />
 </main>
 <Footer />
</>

export default MainLayout;