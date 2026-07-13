import Button from "./Button"

const ButtonList = () => {
    
    const buttonsName = ['All','Gaming','Songs','Live','Football','Cricket','Cooking','Valentines','Pets']
    return (
        <div className="horizontal-button-list">
            {buttonsName.map((item,index)=>{return <Button name={item} key={index}/>})}
        </div>
    )
}

export default ButtonList