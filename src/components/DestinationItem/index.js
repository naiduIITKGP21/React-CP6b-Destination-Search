// Write your code here
import './index.css'

const DestinationItem = props => {
  const {name, imgUrl} = props
  return (
    <li className="each-item-container">
      <img className="ds-img" src={imgUrl} alt={name} />
      <p className="ds-name">{name}</p>
    </li>
  )
}
export default DestinationItem
