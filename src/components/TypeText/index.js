import React from 'react'
import Typical from 'react-typical'

class TypeText extends React.Component {
  render () {
    return (
      <Typical
      steps={['Senior Software Engineering Manager', 1000, 'Husband & Dad', 1000, '"That Bearded Guy"', 1000, 'Foster Parent', 1000, 'US Marine', 1000, 'Chess Ninja', 1000,  ]}
      loop={Infinity}
      wrapper="h3"
    />
    )
  }
}
export default TypeText