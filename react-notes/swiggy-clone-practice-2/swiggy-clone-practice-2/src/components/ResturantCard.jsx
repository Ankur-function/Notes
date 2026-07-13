export const ResturantCard = ({data}) => {
    
  const {imgSrc,name,cuisines,stars,time} = data;
  return (
    <div className="card">
        <img src={imgSrc} alt="food" />
        <h3>{name}</h3>
        <h4>{cuisines}</h4>
        <h4>{stars}</h4>
        <h4>{time}</h4>
    </div>
  )
}

export const ResturantCardWithLabel = (ResturantCard) => {
  return (props)=>{
      return (
      <div className="card">
          <h5>{props.data.label}</h5>
          <ResturantCard {...props}/>
      </div>
    )
}
}
