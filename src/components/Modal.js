import { motion } from 'framer-motion';

const Modal = ({ selectedImg, setSelectedImg }) => {
    const clickHandler = (event) => {
        if (event.target.classList.contains('backdrop')) {
            setSelectedImg(null);
        }
    }
    return <motion.div 
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    className='backdrop' 
    onClick={clickHandler}>
        <motion.img 
        initial={{y: '-100vh'}}
        animate={{y: 0}}
        src={selectedImg} alt='enlarge img'/>
    </motion.div>
};

export default Modal;