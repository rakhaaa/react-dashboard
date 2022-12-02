import { KeyboardArrowUp, KeyboardArrowDown } from "@mui/icons-material";
import "./widget.scss";

const Widget = ({ title, isMoney, counter, icon, positive, percentage }) => {
  return (
    <div className="widget">
      <div className="left">
        <span className="title">{title}</span>
        {isMoney}
        <span className="counter">
          {isMoney && "$ "}
          {counter}
          {isMoney ? "" : " %"}
        </span>
        <span className="link">See all {title}</span>
      </div>
      <div className="right">
        {positive ? (
          <div className="percentage positive">
            {positive ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
            {percentage} %
          </div>
        ) : (
          <div className="percentage negative">
            {positive ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
            {percentage} %
          </div>
        )}
        {icon}
      </div>
    </div>
  );
};

export default Widget;
