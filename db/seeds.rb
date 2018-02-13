# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# Create first date information
new_user = User.create(name: "Michael Scott", email: "hello@michaelscott.com", password: "fakepw")
brewery = Category.create(name: "Brewery")
neighborhood = Neighborhood.create(name: "Shaw")
right_proper = Spot.create(name: "Right Proper Brewing Company", category_id: 1, neighborhood_id: 1)
date1 = DateEntry.create(title: "Brewery Hops in Shaw", neighborhood_id: 1)
DateEntrySpot.create(date_entry_id: 1, spot_id: 1)
