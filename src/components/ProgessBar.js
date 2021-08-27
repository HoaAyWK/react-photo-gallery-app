import { useEffect } from "react";
import useStorage from "../hooks/useStorage";

const ProgessBar = ({ file, setFile }) => {
    const { progess, url } = useStorage(file);
    useEffect(() => {
        if (url) setFile(null);        
    }, [url, setFile]);

    return <div className="progess-bar" style={{width: progess+'%'}}></div>;
};

export default ProgessBar;
