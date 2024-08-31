import { Col, Row } from "reactstrap"
import NavBar from "../../components/NavBar/NavBar";
import SideNavBar from "../../components/NavBar/SideNavBar/SideNavBar";
import LeftPanel from "../../components/leftpanel/LeftPanel";
import RightPanel from "../../components/rightpanel/RightPanel";


const MainPage = () => {
    return (
        <>            
            <NavBar className="d-sm-block d-lg-none" />
            <Row>
                <Col sm="12" md="4">
                    <LeftPanel />
                </Col>
                <Col sm="12" md="7">
                    <RightPanel />
                </Col>
                <Col md="1" className="d-none d-lg-block">
                    <SideNavBar />
                </Col>
                
            </Row>
        </>
    )
}

export default MainPage;