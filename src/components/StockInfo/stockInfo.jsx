import { useLocation } from "react-router-dom";
import { Stock } from "../Stock/stock";
import './stockInfo.css'

export const StockInfo = () => {
    const location = useLocation();
    const { stockName, startDate, endDate } = location.state;

    return(
        <div className="stock-info">
            <div className="stock">
                <Stock 
                    stockName= {stockName}
                    startDate= {startDate}
                    endDate= {endDate}
                />
            </div>
        </div>
    )
}