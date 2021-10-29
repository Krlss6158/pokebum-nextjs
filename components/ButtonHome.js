const ButtonHome = ({
    onClick,
    Text
}) => {
    return (
        <button onClick={onClick} className='p-3 bg-white bg-opacity-25 border rounded-md font-semibold text-gray-600 mr-2'>
            {Text}
        </button>
    );
}

export default ButtonHome;