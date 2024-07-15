const TravelItem = props => {
  const {ItemDetails} = props
  const {name, image, description} = ItemDetails
  return (
    <li>
      <h1>{name}</h1>
      <p>{description}</p>
      <img src={image} alt={name} />
    </li>
  )
}

export default TravelItem
