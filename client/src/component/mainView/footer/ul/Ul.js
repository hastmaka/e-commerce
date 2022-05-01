import './Ul.css';

const Ul = ({data}) => {
    return (
        <ul className='category'>
            <li className='category-title'>{data.category_title}</li>
            {data.links.map((category, index) => (
                <li className='footer-link' key={index}>{category.linkInnerHtml}</li>
            ))}
        </ul>
    )
}

export default Ul;