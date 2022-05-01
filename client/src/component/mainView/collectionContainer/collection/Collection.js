import './collection.css';

const Collection = ({img, collection_title_up, collection_title_down}) => {
    return (
        <a href="#" className='collection'>
            <img src={require(`../../../../images/${img}.png`)} alt=""/>
            <p className='category-title'>{collection_title_up} <br/> {collection_title_down}</p>
        </a>
    )
}

export default Collection;