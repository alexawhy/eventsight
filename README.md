# Eventsight

![splash](readme_images/readme_1.png)

Eventsight is an Eventbrite clone. It replicates the ability to create, register and view events hosted by diffferent organizer. 

[**View Eventsight Live**](https://eventsight.herokuapp.com/)

## Technologies

Backend:
- Ruby on Rails
- PostgreSQL
- jQuery-rails

Frontend:
- React
- Redux
- CSS/SASS

Hosting:
- AWS S3
- Heroku

## Features

- User authentication
- CRUD functionalities (Create, read, update and delete) for events and event registrations
- Uploading images to events

## Example Code

### Uploading images

![image upload](readme_images/readme_4.png)

One the the biggest technical challenge I had, is to persist the image attached to an event in the edit form. I found out it could be solved by utilizing the `imageUrl` generated by Ruby of Rails to show a preview of previously attached image, and conditionally add the `imageFile` to the `formData` for edit form submission.

```javascript
const imagePreview = this.state.tempImageUrl ? (
    <img src={this.state.tempImageUrl}></img>
  ) : (
    <img src={this.state.currEvent.imageUrl}></img>
  );
```

```javascript
handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('event[organizer_id]', this.props.currentUserId);
    ...
    if (this.state.imageFile) {
      formData.append('event[image]', this.state.imageFile);
    } 
    this.props.action(formData, this.state.currEvent.id).then(
      (payload) => {
        this.props.history.push(`/events/${payload.event.id}`)
      });
  }
```

```javascript
handleFile(e) {
    const image = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({ imageFile: image, tempImageUrl: fileReader.result })
    }

    if (image) {
      fileReader.readAsDataURL(image);
    } else {
      this.setState({ imageFile: null, tempImageUrl: "" });
    }
  }
```

## Future Implementations

- Bookmark an event on event index and event show page
- Browse event index in category
- Implement search function