require 'graphql'
require 'graphql_endpoint/query'
require 'graphql_endpoint/mutation'

module Books
  module GraphQLEndpoint
    BooksAppSchema = GraphQL::Schema.define do
      query QueryType
      mutation MutationType
    end
  end
end
