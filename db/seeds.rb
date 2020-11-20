# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

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

# Categories

categories = Category.create(
  [
    { category: "Charity & Causes" },
    { category: "Community & Culture" },
    { category: "Family & Education" },
    { category: "Fashion & Beauty" },
    { category: "Film, Media & Entertainment" },
    { category: "Food & Drink" },
    { category: "Health & Wellness" },
    { category: "Hobbies & Special Interest" },
    { category: "Music" },
    { category: "Performing and Visual Arts" },
    { category: "Religion & Spirituality" },
    { category: "Science & Technology" },
    { category: "Seasonal & Holiday" },
    { category: "Sports & Fitness" },
    { category: "Travel & Outdoor" }
  ]
)

# Events

event1 = Event.create(
  organizer_id: demo.id,
  category_id: 6,
  title: "App Academy Graduation Party",
  description: "Sody pop for everyone.",
  venue: "90 5th Ave, New York, NY 10011",
  start_date: "2020-12-18",
  start_time: "18:00",
  end_date: "2020-12-18",
  end_time: "21:00"
)

event2 = Event.create(
  organizer_id: alex.id,
  category_id: 8,
  title: "Learn Japanese from Anime",
  description: "Watch anime and learn basic Japanese with Alex.",
  venue: "Online",
  start_date: "2020-11-28",
  start_time: "20:00",
  end_date: "2020-11-28",
  end_time: "22:00"
)

event3 = Event.create(
  organizer_id: jasmine.id,
  category_id: 14,
  title: "Nerf Gun War",
  description: "Team up and shoot your enemy for glory.",
  venue: "Williamsburg, NY",
  start_date: "2020-12-06",
  start_time: "12:00",
  end_date: "2020-12-06",
  end_time: "15:00"
)

event4 = Event.create(
  organizer_id: michelle.id,
  category_id: 10,
  title: "Michelle's Open Studio",
  description: "See all latest work of Michelle.",
  venue: "Midtown, NY",
  start_date: "2020-12-21",
  start_time: "10:00",
  end_date: "2020-12-21",
  end_time: "20:00"
)