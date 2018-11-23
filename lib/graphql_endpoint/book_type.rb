require 'graphql'

module Books
  module GraphQLEndpoint
    BookType = GraphQL::ObjectType.define do
      name 'Book'
      description 'Book object type'

      field :id, ! types.ID
      field :title, types.String
      field :author, types.String
      field :isbn, types.String
    end
  end
end
