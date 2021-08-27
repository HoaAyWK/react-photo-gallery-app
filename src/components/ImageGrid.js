import useFireStore from '../hooks/useFireStore';

const ImageGrid = () => {
    const { docs } = useFireStore('images');
    console.log(docs);
    return <div className='image-grid'>
        
    </div>
};

export default ImageGrid;