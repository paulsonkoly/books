require 'graphql'
require 'graphql_endpoint/delete_book'
require 'books'

module Books
  module GraphQLEndpoint
    MutationType = GraphQL::ObjectType.define do
      name "Mutation"
      description "The root mutations"

      field :delete_book, function: DeleteBook.new
    end
  end
end
