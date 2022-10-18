import "./List.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Workerstable from "../../components/workerstable/Workerestable"
import Productstable from "../../components/productstable/Productstable"


const List = () => {
    return (
        <div className="List">
            <Sidebar/>
            <div className="listContainer">
                <Navbar/>
                <Workerstable/> 
                <Productstable/>
            </div>
        </div>
    );
};

export default List;