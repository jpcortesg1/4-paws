import React from "react";
import "./Sidebar.scss";


const Sidebar = () => {
    return (
        <div className="Sidebar">
            <div className="topS">
                <span className="span logo">
                4Paws
                </span>
            </div>
            <hr />
            <div className="centerS">
                <ul>
                    <li>
                        <span> Dasboard</span>
                    </li>
                    <li>
                        <span> Dasboard</span>
                    </li>
                    <li>
                        <span> Dasboard</span>
                    </li>
                    <li>
                        <span> Dasboard</span>
                    </li>
                </ul>
            </div>
            <div className="bottomS">color options</div>
        </div>
    );
};

export default Sidebar;
