import Widget from "./Widget";
import {
  PersonOutlined,
  ShoppingCartOutlined,
  MonetizationOnOutlined,
  AccountBalanceWalletOutlined,
} from "@mui/icons-material";

const WidgetList = () => {
  return (
    <div className="widgets">
      <Widget
        title="users"
        isMoney={false}
        counter={120}
        positive={false}
        percentage={25}
        icon={
          <PersonOutlined
            className="icon"
            style={{ backgroundColor: "crimson", color: "white" }}
          />
        }
      />
      <Widget
        title="order"
        isMoney={false}
        counter={257}
        positive={false}
        percentage={18}
        icon={
          <ShoppingCartOutlined
            className="icon"
            style={{ backgroundColor: "green" }}
          />
        }
      />
      <Widget
        title="earning"
        isMoney={true}
        counter={1200}
        positive={true}
        percentage={30}
        icon={<MonetizationOnOutlined className="icon" />}
      />
      <Widget
        title="balance"
        isMoney={true}
        counter={1200}
        positive={true}
        percentage={40}
        icon={
          <AccountBalanceWalletOutlined
            className="icon"
            style={{ backgroundColor: "purple" }}
          />
        }
      />
    </div>
  );
};

export default WidgetList;
