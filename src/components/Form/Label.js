import React, { Component } from 'react'
import PropTypes            from 'prop-types'

/* component styles */
import { labelStyles } from './styles.scss'

class Label extends Component {
  constructor(props) {
    super(props)
  }

  render(){
    const { text } = this.props

    return (
      <div className={labelStyles}>
        <label>{text}</label>
      </div>
    )
  }

}

Label.PropTypes = {
  text: PropTypes.string.isRequred
}

export default Label
