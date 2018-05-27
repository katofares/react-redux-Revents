import React, { Component } from 'react'
import { Segment, Form, Button } from 'semantic-ui-react'

class EventForm extends Component {

  state = {
    event: {
      title: '',
      date: '',
      city: '',
      venue: '',
      hostedBy: '',
    }    
  }

  onFormSubmit = (eve) => {
    eve.preventDefault();
    this.props.createEvent(this.state.event)
  }


  onInputChange = (e) => {
    const newEvent = this.state.event;
    newEvent[e.target.name] = e.target.value
    this.setState({
      event:newEvent
    })
  }

  render() {

    const {handleFormClose} = this.props
    const {event} = this.state

    return (
      <Segment>
        <Form onSubmit={this.onFormSubmit}>
          <Form.Field>
            <label>Event Title</label>
            <input value={event.title} onChange={this.onInputChange} name='title' placeholder="Event Title" />
          </Form.Field>
          <Form.Field>
            <label>Event Date</label>
            <input value={event.date} onChange={this.onInputChange} name='date' type="date" placeholder="Event Date" />
          </Form.Field>
          <Form.Field>
            <label>City</label>
            <input value={event.city} onChange={this.onInputChange} name='city' placeholder="City event is taking place" />
          </Form.Field>
          <Form.Field>
            <label>Venue</label>
            <input value={event.venue} onChange={this.onInputChange} name='venue' placeholder="Enter the Venue of the event" />
          </Form.Field>
          <Form.Field>
            <label>Hosted By</label>
            <input value={event.hostedBy} onChange={this.onInputChange} name='hostedBy' placeholder="Enter the name of person hosting" />
          </Form.Field>
          <Button positive type="submit">
            Submit
          </Button>
          <Button onClick={handleFormClose} type="button">Cancel</Button>
        </Form>
      </Segment>
    )
  }
}
export default EventForm