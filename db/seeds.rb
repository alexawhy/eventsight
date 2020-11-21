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

# Users

demo = User.create(email: "demo@example.com", fname: "Demo", lname: "User", password: "pa$$word")
alex = User.create(email: "alex@example.com", fname: "Alex", lname: "Wong", password: "pa$$word")
jasmine = User.create(email: "jasmine@example.com", fname: "Jasmine", lname: "Lok", password: "pa$$word")
tahmina = User.create(email: "tahmina@example.com", fname: "Tahmina", lname: "Nizam", password: "pa$$word")
michelle = User.create(email: "michelle@example.com", fname: "michelle", lname: "Lin", password: "pa$$word")
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
  category_id: food.id,
  title: "App Academy Graduation Party",
  description: "Sody pop for everyone.",
  venue: "90 5th Ave, New York, NY 10011",
  capacity: 50,
  start_date: "2020-12-18",
  start_time: "18:00",
  end_date: "2020-12-18",
  end_time: "21:00"
)

event2 = Event.create(
  organizer_id: alex.id,
  category_id: hobbies.id,
  title: "Learn Japanese from Anime",
  description: "Watch anime and learn basic Japanese with Alex.",
  venue: "Online",
  capacity: 20,
  start_date: "2020-11-28",
  start_time: "20:30",
  end_date: "2020-11-28",
  end_time: "22:00"
)

event3 = Event.create(
  organizer_id: jasmine.id,
  category_id: hobbies.id,
  title: "Nerf Gun War",
  description: "Team up and shoot your enemy for glory.",
  venue: "260 Bicetown Road, Brooklyn, NY 11211",
  capacity: 8,
  start_date: "2020-12-06",
  start_time: "12:00",
  end_date: "2020-12-06",
  end_time: "15:00"
)

event4 = Event.create(
  organizer_id: michelle.id,
  category_id: arts.id,
  title: "Michelle's Open Studio",
  description: "See all latest work of Michelle.",
  venue: "4637 Dancing Dove Lane, New York, NY 10016",
  capacity: 100,
  start_date: "2020-12-21",
  start_time: "10:00",
  end_date: "2020-12-21",
  end_time: "20:00"
)

event5 = Event.create(
  organizer_id: tahmina.id,
  category_id: food.id,
  title: "Tahmina's Cake Party",
  description: "Enjoy handmade cakes and desserts.",
  venue: "87 Geraldine Lane, New York, NY 10003",
  capacity: 5,
  start_date: "2020-12-01",
  start_time: "15:00",
  end_date: "2020-12-01",
  end_time: "17:00"
)

event6 = Event.create(
  organizer_id: jhiles.id,
  category_id: food.id,
  title: "Dinner with Jhiles",
  description: "Dinner time.",
  venue: "29 Pine Street, Brooklyn, NY 11249",
  capacity: 8,
  start_date: "2020-12-04",
  start_time: "19:00",
  end_date: "2020-12-04",
  end_time: "22:00"
)

event7 = Event.create(
  organizer_id: ray.id,
  category_id: sports.id,
  title: "Muay Thai 101",
  description: "Practice simple Muay Thai Moves together.",
  venue: "Online",
  capacity: 30,
  start_date: "2020-11-29",
  start_time: "11:30",
  end_date: "2020-11-29",
  end_time: "13:00"
)

event8 = Event.create(
  organizer_id: tony.id,
  category_id: hobbies.id,
  title: "Bike Ride and Camping",
  description: "Get some fresh air on the road.",
  venue: "Marine Park, Brooklyn, NY",
  capacity: 10,
  start_date: "2020-12-05",
  start_time: "12:00",
  end_date: "2020-12-06",
  end_time: "09:00"
)

event9 = Event.create(
  organizer_id: demo.id,
  category_id: tech.id,
  title: "Intro to UI/UX",
  description: "Brief introduction to UI/UX design.",
  venue: "Online",
  capacity: 50,
  start_date: "2020-12-08",
  start_time: "18:30",
  end_date: "2020-12-08",
  end_time: "20:30"
)

event10 = Event.create(
  organizer_id: demo.id,
  category_id: holiday.id,
  title: "Thanksgiving Dinner",
  description: "Have Thanksgiving dinner together.",
  venue: "86 Friendship Lane, NY 10001",
  capacity: 50,
  start_date: "2020-12-08",
  start_time: "18:30",
  end_date: "2020-12-08",
  end_time: "20:30"
)

event11 = Event.create(
  organizer_id: demo.id,
  category_id: food.id,
  title: "Koreatown Food Tour",
  description: "Stuff yourself with hearty street food.",
  venue: "1 W 32nd Street, New York, NY 10001",
  capacity: 50,
  start_date: "2020-12-08",
  start_time: "18:30",
  end_date: "2020-12-08",
  end_time: "20:30"
)

event12 = Event.create(
  organizer_id: demo.id,
  category_id: food.id,
  title: "Maki Sushi Time",
  description: "Learn how to make maki sushi at home.",
  venue: "Online",
  capacity: 20,
  start_date: "2020-12-15",
  start_time: "17:00",
  end_date: "2020-12-15",
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