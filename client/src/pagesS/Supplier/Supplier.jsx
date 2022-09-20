import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./Supplier.scss";
import Widget from "../../components/widgets/Widgets";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
import Table from "../../components/table/Table";


const Supplier = () => {
  return (
    <div className="Supplier">
      <Sidebar />
      <div className="supplierContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="User" />
          <Widget type="Orders" />
          <Widget type="Earnings" />
          <Widget type="Balance" />
        </div>
        <div className="charts">
          <Featured /> 
          <Chart title="Last 6 Months (Revenue)" aspect={2 / 1} />
        </div>
        <div className="listContainer">
          <div className="listTitle">Latest Transactions</div>
          <Table />
        </div>
      </div>
    </div>
  );
};

export default Supplier;
