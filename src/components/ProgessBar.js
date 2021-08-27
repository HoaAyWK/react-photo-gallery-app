import { useEffect } from "react";
import { motion } from 'framer-motion';
import useStorage from "../hooks/useStorage";

const ProgessBar = ({ file, setFile }) => {
    const { progess, url } = useStorage(file);
    useEffect(() => {
        if (url) setFile(null);        
    }, [url, setFile]);

    return <motion.div 
    initial={{width: 0}}
    animate={{width: progess + '%'}}
    className="progess-bar" ></motion.div>;
};

export default ProgessBar;
