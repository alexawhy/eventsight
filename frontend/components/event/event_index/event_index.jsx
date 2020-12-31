import React from 'react';
import { withRouter } from 'react-router-dom';
import EventIndexItem from './event_index_item';

class EventIndex extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     index: 0
  //   };

  //   this.filterCategory = this.filterCategory.bind(this);
  // }

  componentDidMount() {
    this.props.fetchEvents();
  }

  // filterCategory(index) {
  //   this.setState({ index });
  // }

  render() {
    // const { events } = this.props;

    // const CATEGORY_LIST = [
    //   'All',
    //   'Food & Drink',
    //   'Hobbies',
    //   'Arts',
    //   'Sports & Fitness'
    // ]

    // const selectedCategory = this.state.index;
    // const categories = CATEGORY_LIST.map((category, idx) => {
    //   const activeClass = index === selectedCategory ? 'active' : '';

    //   return (
    //     <li key={idx} className={activeClass} onClick={this.filterCategory(index)}>{category}</li>
    //   )
    // })

    // let filteredEvents;
    // switch (this.state.index) {
    //   case 0:
    //     filteredEvents = events;
    //     break;
    //   case 1:
    //     filteredEvents = events.filter(event => event.category_id === 6);
    //     break;
    //   case 2:
    //     filteredEvents = events.filter(event => event.category_id === 8);
    //     break;
    //   case 3:
    //     filteredEvents = events.filter(event => event.category_id === 10);
    //     break;
    //   case 4:
    //     filteredEvents = events.filter(event => event.category_id === 14);
    //     break;
    // }

    return (
      <div className="event-index">
        <h2>Events in <span className="blue">New York</span></h2>
        <ul className="category-list">
          {categories}
        </ul>
        <div className="event-index-list">
          {filteredEvents.map(event => (
            <EventIndexItem
              event={event}
              key={event.id}
            />
          ))}
        </div>
      </div>
    )
  }
}

export default withRouter(EventIndex);