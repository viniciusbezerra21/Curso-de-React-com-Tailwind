export const TransactionItem = ({ item }) => {

    return (
        <div>
            <div>
                <p>{item.descriptions}</p>
                <p>{item.value}</p>
            </div>
            <div>
                {item.date}
            </div>

        </div>
    )
}