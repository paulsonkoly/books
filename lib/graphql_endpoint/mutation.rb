require 'graphql'
require 'graphql_endpoint/delete_book'
require 'graphql_endpoint/add_book'
require 'books'

module Books
  module GraphQLEndpoint
    MutationType = GraphQL::ObjectType.define do
      name "Mutation"
      description "The root mutations"

      field :delete_book, function: DeleteBook.new
      field :add_book, function: AddBook.new
    end
  end
end
