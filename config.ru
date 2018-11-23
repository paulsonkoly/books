require 'sinatra/base'

# pull in the helpers and controllers
Dir.glob('./app/controllers/*.rb').each { |file| require file }

# map the controllers to routes
map('/') { run ApplicationController }
map('/books') { run BookController }
map('/graphql') { run GraphQLController }
