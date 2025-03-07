export const RevenueCard =({
    title,
    orderCount,
    amount
}) => {
    return <div className="bg-white rounded shadow-md p-4 ">
        <div className="text-gray-700" >
            {title}
            ?
        </div>
        <div className="flex justify-between   " >
            <div className="font-semibold text-4xl" >
                {amount}
            </div>
            {orderCount ? <div className="flex cursor-pointer underline font-medium  flex-col justify-center " > <div className="text-blue-700  " > {orderCount} order(s) </div>  {">"}  </div> : null }
        </div>
    </div>
}