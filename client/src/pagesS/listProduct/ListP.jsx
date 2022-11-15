import "./ListP.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Productstable from "../../components/productstable/Productstable"


const List = () => {
    return (
        <div className="List">
            <Sidebar/>
            <div className="listContainer">
                <Navbar/>
                <Productstable/>
            </div>
        </div>
    );
};

export default List;