import {Component} from 'react'

import './index.css'

class ReviewsCarousel extends Component {
  state = {index: 0}

  changeReviews = () => {
    const {reviewsList} = this.props
    const n = reviewsList.length
    const {index} = this.state
    if (index === n - 1) {
      this.setState(prevState => ({index: prevState.index}))
    } else {
      this.setState(prevState => ({index: prevState.index + 1}))
    }
  }

  previousReviews = () => {
    // const {reviewsList} = this.props
    // const n = reviewsList.length
    const {index} = this.state
    if (index === 0) {
      this.setState(prevState => ({index: prevState.index}))
    } else {
      this.setState(prevState => ({index: prevState.index - 1}))
    }
  }

  render() {
    const {index} = this.state
    const {reviewsList} = this.props
    const {imgUrl, username, companyName, description} = reviewsList[index]
    return (
      <div className="bg-container">
        <div className="container">
          <h1 className="heading">Reviews</h1>
          <img src={imgUrl} alt={username} className="user-profile-img" />
          <div className="carousel-container">
            <button
              type="button"
              className="button"
              testid="leftArrow"
              onClick={this.previousReviews}
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
                alt="left arrow"
              />
            </button>
            <p className="username">{username}</p>
            <button
              type="button"
              className="button"
              testid="rightArrow"
              onClick={this.changeReviews}
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
                alt="right arrow"
              />
            </button>
          </div>
          <p className="company-name">{companyName}</p>
          <p className="description">{description}</p>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
