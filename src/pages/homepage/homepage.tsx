import { useContext } from 'react';
import Homestyle from './homepage.module.css';
import { AppContext } from '../../store/AppContext';
import { Button } from 'reactstrap';
import NavBar from '../../components/NavBar/NavBar';

const HomePage:any = () => {
    const { appContextData, setAppContextData }:any = useContext(AppContext);
    return (
        <>
        <NavBar />
        <h1 className={Homestyle.text} onClick={() => {setAppContextData({...appContextData, appContextData:{menus: ["home"]}})}}><Button color="danger">Danger!</Button></h1>
        </>
    );
}

export default HomePage;