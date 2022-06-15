import PriceFormatted from "../../../component/priceFormat/PriceFormatted";

const YourOrderExtraTr = ({title, price, color}) => {
    return (
        <tr>
            <td>
                <div style={{paddingLeft: '30px', color: '#999'}}>
                    {title}
                </div>
            </td>
            <td>
                <div className='text-end' style={{paddingRight: '25px'}}>
                    <PriceFormatted
                        price={price}
                        color={color}
                    />
                </div>
            </td>
        </tr>
    );
}

export default YourOrderExtraTr;