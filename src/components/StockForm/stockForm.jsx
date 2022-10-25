import { useState } from "react"
import "./stockForm.css"
import { useNavigate } from "react-router-dom"

export const StockForm = () => {
    const [stockName, setStockName] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");

    const navigate = useNavigate()

    const handleSubmit = e  => {
        e.preventDefault();

        const form = e.currentTarget;
        const formElements = form.elements;
        const stockName = formElements["stock-name"].value;
        const startDate = formElements["start-date"].value;
        const endDate = formElements["end-date"].value;


        navigate(
            '/stocks',
            {
                state:{
                    stockName,
                    startDate,
                    endDate
                }
            }
        );

        
    }
    return (
        <div className="stock-search">
            <form
                onSubmit={handleSubmit}
                className="stock-form"
            >
                <select>
                    <option value="stockName">Stock Name</option>
                    <option value="exchange">exchange</option>
                </select>

                <input 
                    type= "text"
                    name="stock-name"
                    placeholder="AAPL"
                    onChange={(name) => setStockName(name)}
                ></input>

                Start Date
                
                <input
                    type="date"
                    name="start-date"
                    onChange={(date)=> setStartDate(date)}
                ></input>

                End Date

                <input
                    type="date"
                    name="end-date"
                    onChange={(date)=> setEndDate(date)}
                ></input>

                <input
                    type= "submit"
                ></input>
            </form>
        </div>
    )
}