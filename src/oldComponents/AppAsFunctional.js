import React from 'react'

const AppAsFunctional = ( props ) => {
  let [ count, setCount ] = React.useState( 0 )

  const handleIncrementButton = () => {
    //setCount( count + 1 ) // Bad practice
    setCount( ( currentCount ) => { return currentCount + 1 } ) // This is better
  }

  return (
    <div>
      <ViewCount count={ count } />
      <IncrementButton buttonText='Increase Count' handleIncrementButton={ handleIncrementButton } />
    </div>
  )
}

const ViewCount = ( props ) => {
  return (
    <div>{ props.text }{ props.count }</div>
  )
}
ViewCount.defaultProps = { count: 0, text: '' }

const IncrementButton = ( props ) => {
  return (
    <button onClick={ props.handleIncrementButton }>{ props.buttonText }</button>
  )
}
IncrementButton.defaultProps = { buttonText: 'Increase Counter' }

export default AppAsFunctional