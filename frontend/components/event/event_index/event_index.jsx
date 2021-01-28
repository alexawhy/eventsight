import React from 'react';
import { withRouter } from 'react-router-dom';
import EventIndexItem from './event_index_item';

class EventIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0
    };

    this.filterCategory = this.filterCategory.bind(this);
  }

  componentDidMount() {
    this.props.fetchEvents();
  }

  filterCategory(index) {
    this.setState({ index });
  }

  render() {
    const { events, currentUserId, bookmarks, createBookmark, deleteBookmark } = this.props;

    const CATEGORY_LIST = [
      'All',
      'Food & Drink',
      'Hobbies',
      'Arts',
      'Science & Technology',
      'Sports & Fitness'
    ]

    let selectedCategory = this.state.index;
    const categories = CATEGORY_LIST.map((category, index) => {
      const activeClass = index === selectedCategory ? 'active' : '';

      return (
        <li key={index} className={activeClass} onClick={() => this.filterCategory(index)}>{category}</li>
      )
    })

    let filteredEvents;
    switch (this.state.index) {
      case 0:
        filteredEvents = events;
        break;
      case 1:
        filteredEvents = events.filter(event => event.category === "Food & Drink");
        break;
      case 2:
        filteredEvents = events.filter(event => event.category === "Hobbies & Special Interest");
        break;
      case 3:
        filteredEvents = events.filter(event => event.category === "Performing and Visual Arts");
        break;
      case 4:
        filteredEvents = events.filter(event => event.category === "Science & Technology");
        break;
      case 5:
        filteredEvents = events.filter(event => event.category === "Sports & Fitness");
        break;
    }

    return (
      <div className="event-index">
        <h2>Events in <span className="blue">New York</span></h2>
        <div className="category-list-container">
          <ul className="category-list">
            {categories}
          </ul>
        </div>
        <ul className="event-index-list">
          {filteredEvents.map((event, idx) => (
            <EventIndexItem
              event={event}
              currentUserId={currentUserId}
              bookmarks={bookmarks}
              createBookmark={createBookmark}
              deleteBookmark={deleteBookmark}
              key={idx}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default withRouter(EventIndex);