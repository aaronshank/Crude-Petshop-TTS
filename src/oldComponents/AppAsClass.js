import React from 'react'

class AppAsClass extends React.Component {
  constructor( props ) {
    super( props )
    this.state = { count: 0 }
  }

  handleIncrementButton() {
    // Oh...this method has to change something in the state of another Element...
    // ViewCount to work.
    // But React is very strict about that...We just don't do that...so how can we make this work ?

    // In React, any time that the state depends on the previous state
    // in a way that causes feedback like this...you have to do the
    // update a little differently.

    // this.setState can take an object that has what properties to
    // update to what...and that is how we have used setState so far...

    // If you need setState to work off the previous state via feedback...
    // you need to pass setState a FUNCTION rather than an object.
    //this.setState( { count: this.state.count + 1 } ) // Bad practice
    this.setState( ( state, props ) => { return { count: state.count + 1 } } ) // This is better

  }

  render() {
    return (
      <div>
        <ViewCount count={ this.state.count } />
        <IncrementButton buttonText='Increase Count' handleIncrementButton={ this.handleIncrementButton.bind( this ) } />
      </div>
    )
  }
}

class ViewCount extends React.Component {
  render() {
    return (
      <div>{ this.props.count }</div>
    )
  }
}
ViewCount.defaultProps = { count: 0, text: '' }

class IncrementButton extends React.Component {
  render() {
    return (
      <button onClick={ this.props.handleIncrementButton }>{ this.props.buttonText }</button>
    )
  }
}
IncrementButton.defaultProps = { buttonText: 'Increase Counter' }

export default AppAsClass