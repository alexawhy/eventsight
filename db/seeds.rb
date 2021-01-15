# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

require 'open-uri'

User.destroy_all
Category.destroy_all
Event.destroy_all
Registration.destroy_all

# Users

demo = User.create(email: "demo@example.com", fname: "Demo", lname: "User", password: "pa$$word")
alex = User.create(email: "alex@example.com", fname: "Alex", lname: "Wong", password: "pa$$word")
jasmine = User.create(email: "jasmine@example.com", fname: "Jasmine", lname: "Lok", password: "pa$$word")
tahmina = User.create(email: "tahmina@example.com", fname: "Tahmina", lname: "Nizam", password: "pa$$word")
michelle = User.create(email: "michelle@example.com", fname: "Michelle", lname: "Lin", password: "pa$$word")
jhiles = User.create(email: "jhiles@example.com", fname: "Jhiles", lname: "Young", password: "pa$$word")
ray = User.create(email: "ray@example.com", fname: "Ray", lname: "Liang", password: "pa$$word")
tony = User.create(email: "tony@example.com", fname: "Tony", lname: "Chen", password: "pa$$word")

# Categories

charity = Category.create(category: "Charity & Causes")
community = Category.create(category: "Community & Culture")
family = Category.create(category: "Family & Education")
fashion = Category.create(category: "Fashion & Beauty")
film = Category.create(category: "Film, Media & Entertainment")
food = Category.create(category: "Food & Drink")
health = Category.create(category: "Health & Wellness")
hobbies = Category.create(category: "Hobbies & Special Interest")
music = Category.create(category: "Music")
arts= Category.create(category: "Performing and Visual Arts")
religion = Category.create(category: "Religion & Spirituality")
tech = Category.create(category: "Science & Technology")
holiday = Category.create(category: "Seasonal & Holiday")
sports = Category.create(category: "Sports & Fitness")
travel = Category.create(category: "Travel & Outdoor")

# Events

event1 = Event.create(
  organizer_id: demo.id,
  organizer_name: "#{demo.fname} #{demo.lname}",
  category_id: food.id,
  title: "App Academy Graduation Party",
  description: "Sody pop for everyone. 

  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Donec enim diam vulputate ut pharetra sit amet. Ut tristique et egestas quis ipsum.  
    
  Felis imperdiet proin fermentum leo vel orci porta. A scelerisque purus semper eget duis. Nunc id cursus metus aliquam eleifend mi in nulla posuere. Sed velit dignissim sodales ut eu sem integer vitae. Tempor nec feugiat nisl pretium fusce id velit ut tortor. 
  
  Eget duis at tellus at urna condimentum mattis. Facilisi cras fermentum odio eu feugiat. Augue ut lectus arcu bibendum at varius vel. Platea dictumst quisque sagittis purus sit amet volutpat consequat. Lobortis mattis aliquam faucibus purus in massa. Gravida dictum fusce ut placerat orci. Nullam ac tortor vitae purus faucibus ornare suspendisse sed nisi. Morbi tristique senectus et netus. Non curabitur gravida arcu ac. Aliquam etiam erat velit scelerisque in dictum non consectetur. 
  
  Neque gravida in fermentum et. Convallis posuere morbi leo urna molestie at. Neque sodales ut etiam sit amet nisl purus in. Libero justo laoreet sit amet cursus sit. A pellentesque sit amet porttitor eget dolor morbi non arcu. Tortor pretium viverra suspendisse potenti nullam. Lacinia at quis risus sed vulputate odio. Odio euismod lacinia at quis risus sed.",
  online: false,
  venue: "90 5th Ave, New York, NY 10011",
  capacity: 50,
  start_date: "2020-12-18",
  start_time: "18:00",
  end_date: "2020-12-18",
  end_time: "21:00"
)

event2 = Event.create(
  organizer_id: alex.id,
  organizer_name: "#{alex.fname} #{alex.lname}",
  category_id: hobbies.id,
  title: "Learn Japanese from Anime",
  description: "Watch anime and learn basic Japanese with Alex.
  
  Ac feugiat sed lectus vestibulum mattis ullamcorper velit. Porta non pulvinar neque laoreet suspendisse. Elementum pulvinar etiam non quam. Varius morbi enim nunc faucibus a pellentesque sit amet. Sit amet commodo nulla facilisi nullam vehicula. 
  
  Mattis nunc sed blandit libero volutpat sed cras ornare. Facilisis sed odio morbi quis commodo odio aenean. Lorem dolor sed viverra ipsum nunc. Gravida in fermentum et sollicitudin ac orci phasellus egestas. Et tortor consequat id porta nibh venenatis. Integer vitae justo eget magna fermentum iaculis eu non. 
  
  Non pulvinar neque laoreet suspendisse interdum. Sodales ut etiam sit amet nisl purus. Id diam maecenas ultricies mi eget mauris. Amet facilisis magna etiam tempor orci eu lobortis elementum nibh. Egestas maecenas pharetra convallis posuere morbi leo. A scelerisque purus semper eget duis at tellus.",
  online: true,
  capacity: 20,
  start_date: "2021-01-23",
  start_time: "20:30",
  end_date: "2020-01-23",
  end_time: "22:00"
)

event3 = Event.create(
  organizer_id: jasmine.id,
  organizer_name: "#{jasmine.fname} #{jasmine.lname}",
  category_id: hobbies.id,
  title: "Nerf Gun War",
  description: "Team up and shoot your enemy for glory.
  
  Lacus sed viverra tellus in hac habitasse platea. Et odio pellentesque diam volutpat commodo sed egestas egestas. Ultricies leo integer malesuada nunc vel risus commodo. Mauris ultrices eros in cursus turpis massa tincidunt dui. 
  
  Molestie at elementum eu facilisis sed odio morbi quis commodo. Aliquam nulla facilisi cras fermentum. Sed id semper risus in hendrerit gravida. Ornare arcu dui vivamus arcu felis. Auctor neque vitae tempus quam pellentesque nec nam. Turpis massa tincidunt dui ut ornare lectus sit amet. Nulla at volutpat diam ut. Diam vulputate ut pharetra sit. Pulvinar neque laoreet suspendisse interdum. Gravida neque convallis a cras semper auctor neque vitae tempus. Dictumst vestibulum rhoncus est pellentesque elit. Orci sagittis eu volutpat odio. Pharetra et ultrices neque ornare.",
  online: false,
  venue: "260 Bicetown Road, Brooklyn, NY 11211",
  capacity: 8,
  start_date: "2021-01-30",
  start_time: "12:00",
  end_date: "2021-01-30",
  end_time: "15:00"
)

event4 = Event.create(
  organizer_id: michelle.id,
  organizer_name: "#{michelle.fname} #{michelle.lname}",
  category_id: arts.id,
  title: "Michelle's Open Studio",
  description: "See all latest works of Michelle. 
  
  Eget egestas purus viverra accumsan. Facilisis volutpat est velit egestas dui id. Leo vel fringilla est ullamcorper eget nulla. Nulla facilisi nullam vehicula ipsum a arcu. 
  
  Purus gravida quis blandit turpis. Quam lacus suspendisse faucibus interdum posuere lorem. Sodales ut etiam sit amet nisl purus in mollis. Amet mauris commodo quis imperdiet massa tincidunt. Quisque egestas diam in arcu cursus euismod. Auctor neque vitae tempus quam pellentesque. Aliquet porttitor lacus luctus accumsan. Quis viverra nibh cras pulvinar mattis nunc. Mattis aliquam faucibus purus in massa tempor nec. Nisl condimentum id venenatis a condimentum vitae. Egestas erat imperdiet sed euismod nisi porta. Diam maecenas sed enim ut sem viverra. Lorem mollis aliquam ut porttitor leo a diam sollicitudin tempor.",
  online: false,
  venue: "4637 Dancing Dove Lane, New York, NY 10016",
  capacity: 100,
  start_date: "2021-02-09",
  start_time: "10:00",
  end_date: "2021-02-09",
  end_time: "20:00"
)

event5 = Event.create(
  organizer_id: tahmina.id,
  organizer_name: "#{tahmina.fname} #{tahmina.lname}",
  category_id: food.id,
  title: "Tahmina's Cake Party",
  description: "Enjoy handmade cakes and desserts.",
  online: false,
  venue: "87 Geraldine Lane, New York, NY 10003",
  capacity: 5,
  start_date: "2021-02-14",
  start_time: "15:00",
  end_date: "2021-02-14",
  end_time: "17:00"
)

event6 = Event.create(
  organizer_id: jhiles.id,
  organizer_name: "#{jhiles.fname} #{jhiles.lname}",
  category_id: food.id,
  title: "Dinner with Jhiles",
  description: "Dinner time.",
  online: false,
  venue: "29 Pine Street, Brooklyn, NY 11249",
  capacity: 8,
  start_date: "2021-03-04",
  start_time: "19:00",
  end_date: "2021-03-04",
  end_time: "22:00"
)

event7 = Event.create(
  organizer_id: ray.id,
  organizer_name: "#{ray.fname} #{ray.lname}",
  category_id: sports.id,
  title: "Muay Thai 101",
  description: "Practice simple Muay Thai Moves together.",
  online: true,
  capacity: 30,
  start_date: "2021-03-09",
  start_time: "11:30",
  end_date: "2021-03-09",
  end_time: "13:00"
)

event8 = Event.create(
  organizer_id: tony.id,
  organizer_name: "#{tony.fname} #{tony.lname}",
  category_id: hobbies.id,
  title: "Bike Ride and Camping",
  description: "Get some fresh air on the road.",
  online: false,
  venue: "Marine Park, Brooklyn, NY",
  capacity: 10,
  start_date: "2021-03-13",
  start_time: "12:00",
  end_date: "2021-03-14",
  end_time: "09:00"
)

event9 = Event.create(
  organizer_id: demo.id,
  organizer_name: "#{demo.fname} #{demo.lname}",
  category_id: tech.id,
  title: "Intro to UI/UX",
  description: "Brief introduction to UI/UX design.",
  online: true,
  capacity: 50,
  start_date: "2021-03-18",
  start_time: "18:30",
  end_date: "2021-03-18",
  end_time: "20:30"
)

event10 = Event.create(
  organizer_id: demo.id,
  organizer_name: "#{demo.fname} #{demo.lname}",
  category_id: holiday.id,
  title: "Thanksgiving Dinner",
  description: "Have Thanksgiving dinner together.",
  online: false,
  venue: "86 Friendship Lane, NY 10001",
  capacity: 50,
  start_date: "2021-03-27",
  start_time: "18:30",
  end_date: "2021-03-27",
  end_time: "20:30"
)

event11 = Event.create(
  organizer_id: demo.id,
  organizer_name: "#{demo.fname} #{demo.lname}",
  category_id: food.id,
  title: "Koreatown Food Tour",
  description: "Stuff yourself with hearty street food.",
  online: false,
  venue: "1 W 32nd Street, New York, NY 10001",
  capacity: 50,
  start_date: "2021-04-07",
  start_time: "18:30",
  end_date: "2021-04-07",
  end_time: "20:30"
)

event12 = Event.create(
  organizer_id: demo.id,
  organizer_name: "#{demo.fname} #{demo.lname}",
  category_id: food.id,
  title: "Maki Sushi Time",
  description: "Learn how to make maki sushi at home.",
  online: true,
  capacity: 20,
  start_date: "2021-05-11",
  start_time: "17:00",
  end_date: "2021-05-11",
  end_time: "18:30"
)

image1 = open('https://eventsight-seeds.s3.amazonaws.com/event1.jpg')
image2 = open('https://eventsight-seeds.s3.amazonaws.com/event2.jpg')
image3 = open('https://eventsight-seeds.s3.amazonaws.com/event3.jpg')
image4 = open('https://eventsight-seeds.s3.amazonaws.com/event4.jpg')
image5 = open('https://eventsight-seeds.s3.amazonaws.com/event5.jpg')
image6 = open('https://eventsight-seeds.s3.amazonaws.com/event6.jpg')
image7 = open('https://eventsight-seeds.s3.amazonaws.com/event7.jpg')
image8 = open('https://eventsight-seeds.s3.amazonaws.com/event8.jpg')
image9 = open('https://eventsight-seeds.s3.amazonaws.com/event9.jpg')
image10 = open('https://eventsight-seeds.s3.amazonaws.com/event10.jpg')
image11 = open('https://eventsight-seeds.s3.amazonaws.com/event11.jpg')
image12 = open('https://eventsight-seeds.s3.amazonaws.com/event12.jpg')

event1.image.attach(io: image1, filename: 'event1.jpg')
event2.image.attach(io: image2, filename: 'event2.jpg')
event3.image.attach(io: image3, filename: 'event3.jpg')
event4.image.attach(io: image4, filename: 'event4.jpg')
event5.image.attach(io: image5, filename: 'event5.jpg')
event6.image.attach(io: image6, filename: 'event6.jpg')
event7.image.attach(io: image7, filename: 'event7.jpg')
event8.image.attach(io: image8, filename: 'event8.jpg')
event9.image.attach(io: image9, filename: 'event9.jpg')
event10.image.attach(io: image10, filename: 'event10.jpg')
event11.image.attach(io: image11, filename: 'event11.jpg')
event12.image.attach(io: image12, filename: 'event12.jpg')

# Registration

registration1 = Registration.create(user_id: demo.id, event_id: event2.id)
registration1 = Registration.create(user_id: demo.id, event_id: event3.id)
registration1 = Registration.create(user_id: demo.id, event_id: event4.id)

# Bookmark

bookmark1 = Bookmark.create(user_id: demo.id, event_id: event2.id)
bookmark2 = Bookmark.create(user_id: demo.id, event_id: event4.id)
bookmark3 = Bookmark.create(user_id: demo.id, event_id: event5.id)
bookmark4 = Bookmark.create(user_id: demo.id, event_id: event6.id)