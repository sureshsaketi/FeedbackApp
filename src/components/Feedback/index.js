import {Component} from 'react'
// import Emoji from '../Emoji'
import './index.css'

class Feedback extends Component {
  state = {isFeedbackGiven: true}

  onClickEmoji = () => {
    this.setState({isFeedbackGiven: false})
  }

  renderFeedbackQuestion = () => {
    const {resources} = this.props
    const {emojis} = resources
    return (
      <>
        <h1 className="feedback-text">
          How satisfied are you with our customer support performance?
        </h1>
        <ul>
          {emojis.map(eachEmoji => {
            const {imageUrl, name} = eachEmoji
            return (
              <li key={eachEmoji.id}>
                <button
                  type="button"
                  className="emoji-button"
                  onClick={this.onClickEmoji}
                >
                  <img src={imageUrl} className="emoji" alt="name" />
                  <p className="emoji-text">{name}</p>
                </button>
              </li>
            )
          })}
        </ul>
      </>
    )
  }

  renderThankyouScreen = () => {
    const {resources} = this.props
    const {loveEmojiUrl} = resources
    return (
      <div className="thanks-container">
        <div className="love-container">
          <img src={loveEmojiUrl} className="emoji" alt="love emoji" />
          <h1 className="feedback-text">Thank You</h1>
        </div>
        <p className="response-text">
          We will use your feedback to improve our customer support performance
        </p>
      </div>
    )
  }

  render() {
    const {isFeedbackGiven} = this.state
    return (
      <>
        <div className="feedback-container">
          <div className="emoji-container">
            {isFeedbackGiven
              ? this.renderFeedbackQuestion()
              : this.renderThankyouScreen()}
          </div>
        </div>
      </>
    )
  }
}
export default Feedback
