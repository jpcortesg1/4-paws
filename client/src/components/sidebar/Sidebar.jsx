import "./Sidebar.scss";
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import DvrOutlinedIcon from '@mui/icons-material/DvrOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PermContactCalendarOutlinedIcon from '@mui/icons-material/PermContactCalendarOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import LuggageOutlinedIcon from '@mui/icons-material/LuggageOutlined';
import PsychologyAltOutlinedIcon from '@mui/icons-material/PsychologyAltOutlined';
import DeliveryDiningOutlinedIcon from '@mui/icons-material/DeliveryDiningOutlined';
import QueryStatsOutlinedIcon from '@mui/icons-material/QueryStatsOutlined';
import HealingOutlinedIcon from '@mui/icons-material/HealingOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { Link } from "react-router-dom";

const Sidebar = () => {
    return (
        <div className="Sidebar">
            <div className="topS">
                <Link to="/supplier" style={{ textDecoration: "none" }}>
                <h1 className="sidebarTitle">
                     4<span>PAWS</span>
                </h1>  
                </Link>
            </div>

            <hr />

            <div className="centerS">
                <ul>
                    <p className="title">SUPPLIER</p>
                    <Link to="/supplier/home" style={{ textDecoration: "none" }}>
                        <li>
                            <HomeOutlinedIcon className="icon" />
                            <span> Main Page</span>
                        </li>
                    </Link>
                    <Link to="/supplier" style={{ textDecoration: "none" }}>
                        <li>
                            <DashboardOutlinedIcon className="icon"/>
                            <span> Dasboard</span>
                        </li>
                    </Link>
                    <li>
                        <NotificationsOutlinedIcon className="icon"/>
                        <span> Notification</span>
                    </li>
                    <p className="title">LIST</p>
                    <li>
                        <LuggageOutlinedIcon className="icon"/>
                        <span> Orders</span>
                    </li>
                    
                    <li>
                        <DeliveryDiningOutlinedIcon className="icon"/>
                        <span> delivery</span>
                    </li>
                    <p className="title">USEFUL</p>
                    <Link to="/supplier/manage-Employes" style={{ textDecoration: "none" }}>
                        <li>
                            <DvrOutlinedIcon className="icon"/>
                            <span>Manage Employes</span>
                        </li>
                    </Link>
                    <Link to="/supplier/manage-Products" style={{ textDecoration: "none" }}>
                    <li>
                        <DvrOutlinedIcon className="icon"/>
                        <span>Manage Products</span>
                    </li>
                    </Link>
                    <p className="title">SERVICE</p>
                    <li>
                        <QueryStatsOutlinedIcon className="icon"/>
                        <span> Stats</span>
                    </li>
                    <li>
                        <HealingOutlinedIcon className="icon"/>
                        <span> Health</span>
                    </li>
                    <p className="title">USER</p>
                    <li>                    
                        <PermContactCalendarOutlinedIcon className="icon"/>
                        <span> Profile</span>
                    </li>
                    <li>
                        <SettingsOutlinedIcon className="icon"/>
                        <span> Configuration</span>
                    </li>
                    <li>
                        <LogoutOutlinedIcon className="icon"/>
                        <span> Log Out</span>
                    </li>
                </ul>
            </div>
            <div className="bottomS">
                <div className="colorOptions"></div>
                <div className="colorOptions"></div>
                <div className="colorOptions"></div>
            </div>
        </div>
    );
};

export default Sidebar;
