import { motion } from 'framer-motion';
import useFireStore from '../hooks/useFireStore';

const ImageGrid = ({ setSelectedImg }) => {
    const { docs } = useFireStore('images');
    return <div className='image-grid'>
        {docs && docs.map((doc) => {
            return <motion.div 
            whileHover={{opacity: 1}} 
            layout
            className='image-wrap' 
            key={doc.id}>
                <motion.img 
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{delay: 1}}
                onClick={() => setSelectedImg(doc.url)} 
                src={doc.url} alt='uploaded img'/>
            </motion.div>
        })}
    </div>
};

export default ImageGrid;