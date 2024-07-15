import {useState, useEffect} from 'react'
import Loader from 'react-loader-spinner'

import TravelItem from '../TravelItem'

const AllItemsDetails = () => {
  const [PlaceList, setPlaceList] = useState([])
  const [isLoading, setisLoading] = useState(false)

  const getProjectData = async () => {
    setisLoading(true)
    const url = 'https://apis.ccbp.in/tg/packages'
    const response = await fetch(url)
    const data = await response.json()
    if (response.ok) {
      const formattedData = data.packages.map(each => ({
        id: each.id,
        name: each.name,
        image: each.image_url,
        description: each.description,
      }))
      setPlaceList(formattedData)
      setisLoading(false)
    }
  }

  const renderPlaces = () => (
    <div>
      <h1>Travel Guide</h1>
      <hr />
      <ul>
        {PlaceList.map(eachItem => (
          <TravelItem ItemDetails={eachItem} key={eachItem.id} />
        ))}
      </ul>
    </div>
  )
  const renderLoadingView = () => (
    <div className="products-loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </div>
  )
  useEffect(() => {
    getProjectData()
  }, [])

  return isLoading === true ? renderLoadingView() : renderPlaces()
}

export default AllItemsDetails
