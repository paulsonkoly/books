require 'graphql'
require 'graphql_endpoint/book_type'
require 'books'

module Books
  module GraphQLEndpoint
    class DeleteBook < GraphQL::Function
      description 'Deletes a book by id'

      argument :id, !types.ID

      type BookType

      def call(_obj, args, _ctx)
        book = Book.find(id: args[:id])
        book.delete if book
        book
      end
    end
  end
end
