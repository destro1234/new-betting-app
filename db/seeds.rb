# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Game.create(home_team: "Knicks", away_team: "Bulls")
Game.create(home_team: "Hawks", away_team: "Lakers")
Game.create(home_team: "Mavericks", away_team: "Bucks")
Game.create(home_team: "76ers", away_team: "Magic")
Game.create(home_team: "TrailBlazers", away_team: "Suns")
Game.create(home_team: "Warriors", away_team: "Celtics")
Game.create(home_team: "Thunder", away_team: "Cavaliers")
Game.create(home_team: "Kings", away_team: "Raptors")
Game.create(home_team: "Rockets", away_team: "Wizards")
Game.create(home_team: "Grizzlies", away_team: "Nets")

puts 'done seeding games'