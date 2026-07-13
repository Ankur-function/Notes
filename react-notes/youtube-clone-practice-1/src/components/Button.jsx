const Button = ({name}) => {
    return (
        // Changed to use an implicit fragment or direct button to prevent vertical block staking
        <>
            <button className="tag-btn">{name}</button>
        </>
    )
}

export default Button;
