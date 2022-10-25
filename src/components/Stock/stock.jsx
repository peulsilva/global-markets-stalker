import axios from "axios"
import { useEffect } from "react"


export const Stock = async ({
    stockName,
    startDate,
    endDate
}) => {
    const API_KEY = process.env.REACT_APP_STOCK_API_KEY
    
    const res = await axios.get(
        `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${stockName}&apikey=${API_KEY}`    
    )
    
    console.log(res)
    return (
        <div>
            {process.env.REACT_APP_STOCK_API_KEY}
        </div>
    )
}