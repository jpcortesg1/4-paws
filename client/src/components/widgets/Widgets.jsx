import "./Widgets.scss";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";

const Widget = ({type}) => {

  let data;

  //temporany
  const amount = 1000;
  const difference = 20;

  switch (type) {
    case "User":
      data = {
        title: "USERS",
        isMoney: false,
        link:"See all users",
        icon: <PersonOutlinedIcon className="icon"/>,
      };
      break;

    case "Orders":
      data = {
        title: "ORDERS",
        isMoney: false,
        link:"See all users",
        icon: <ShoppingCartOutlinedIcon className="icon"/>,
      };
      break;

    case "Earnings":
      data = {
        title: "EARNINGS",
        isMoney: false,
        link:"See all users",
        icon: <MonetizationOnOutlinedIcon className="icon"/>,
      };
      break;

    case "Balance":
      data = {
        title: "BALANCE",
        isMoney: false,
        link:"See all users",
        icon: <AccountBalanceWalletOutlinedIcon className="icon"/>,
      };
    break;

    default:
      break;
    }



  return (
    <div className="widget">
        <div className="left">
            <span className="title">{data.title}</span>
            <span className="counter">
              {data.isMoney && "$"}{amount}
            </span>
            <span className="link">{data.link}</span>
        </div>
        <div className="right">
            <div className="percentage positive">
                <KeyboardArrowUpIcon />
                {difference}%
            </div>
            {data.icon}
        </div>
    </div>
  )
}

export default Widget
