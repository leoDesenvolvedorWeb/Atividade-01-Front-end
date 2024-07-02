const Reverse = ({texto}) => {
    const reverseText = texto.split('').reverse().join('');
    console.log(reverseText);

    return(
        <p className='reverse-text'>{texto} <span> = </span>{reverseText}</p>
    )
}


export default Reverse;