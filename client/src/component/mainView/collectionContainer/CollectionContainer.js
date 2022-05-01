import './CollectionContainer.css';
import Collection from "./collection/Collection";

const CollectionContainer = ({data}) => {
    return (
        <div className='collection-container'>
            {data.map(collection => (
                <Collection
                    key={collection.img}
                    img={collection.img}
                    collection_title_up={collection.collection_title_up}
                    collection_title_down={collection.collection_title_down}
                />
            ))}
        </div>
    )
}

export default CollectionContainer;