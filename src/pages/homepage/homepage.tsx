import { useContext } from 'react';
import Homestyle from './homepage.module.css';
import { AppContext } from '../../store/AppContext';

const HomePage:any = () => {
    const { appContextData, setAppContextData }:any = useContext(AppContext);
    return (
        <h1 className={Homestyle.text} onClick={() => {setAppContextData({...appContextData, appContextData:{menus: ["home"]}})}}>Home page</h1>
        // <></>
    );
}

export default HomePage;