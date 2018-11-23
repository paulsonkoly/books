require 'graphql'
require 'graphql_endpoint/book_type'
require 'books'

module Books
  module GraphQLEndpoint
    QueryType = GraphQL::ObjectType.define do
      name "Query"
      description "The root queries"

      field :books, types[BookType] do
        description "Get a list of all books"

        resolve ->(_obj, _args, _ctx) {
          Books::Book.order_by(Sequel.desc(:id))
        }
      end
    end
  end
end
