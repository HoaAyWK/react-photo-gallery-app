

const Modal = ({ selectedImg, setSelectedImg }) => {
    const clickHandler = (event) => {
        if (event.target.classList.contains('backdrop')) {
            setSelectedImg(null);
        }
    }
    return <div className='backdrop' onClick={clickHandler}>
        <img src={selectedImg} alt='enlarge img'></img>
    </div>
};

export default Modal;