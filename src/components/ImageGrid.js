import useFireStore from '../hooks/useFireStore';

const ImageGrid = ({ setSelectedImg }) => {
    const { docs } = useFireStore('images');
    return <div className='image-grid'>
        {docs && docs.map((doc) => {
            return <div className='image-wrap' key={doc.id}>
                <img onClick={() => setSelectedImg(doc.url)} src={doc.url} alt='uploaded img'/>
            </div>
        })}
    </div>
};

export default ImageGrid;