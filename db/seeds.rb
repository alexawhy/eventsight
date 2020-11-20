# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all

# Users

demo = User.create(email: 'demo@example.com', fname: 'Demo', lname: 'User', password: 'pa$$word')

# Categories

categories = Category.create(
  [
    { category: 'Charity & Causes' },
    { category: 'Community & Culture' },
    { category: 'Family & Education' },
    { category: 'Fashion & Beauty' },
    { category: 'Film, Media & Entertainment' },
    { category: 'Food & Drink' },
    { category: 'Health & Wellness' },
    { category: 'Hobbies & Special Interest' },
    { category: 'Music' },
    { category: 'Performing and Visual Arts' },
    { category: 'Religion & Spirituality' },
    { category: 'Science & Technology' },
    { category: 'Seasonal & Holiday' },
    { category: 'Sports & Fitness' },
    { category: 'Travel & Outdoor' }
  ]
)

# Events

event1 = Event.create(
  organizer_id: 1,
  category_id:  6,
  title: 'App Academy Graduation Party',
  description: 'Sody pop for everyone.',
  venue: '90 5th Ave, New York, NY 10011',
  start_date: Date.new(2020, 12, 18),
  end_date: Date.new(2020, 12, 18)
)