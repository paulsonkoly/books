require 'graphql'
require 'graphql_endpoint/query'

module Books
  module GraphQLEndpoint
    BooksAppSchema = GraphQL::Schema.define do
      query QueryType
    end
  end
end
