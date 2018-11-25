require 'graphql'
require 'graphql_endpoint/book_type'
require 'books'

module Books
  module GraphQLEndpoint
    class AddBook < GraphQL::Function
      description 'Adds a new book'

      argument :title, ! types.String
      argument :author, ! types.String
      argument :isbn, ! types.String

      type BookType

      def call(_obj, args, _ctx)
        begin
          id = Book.insert(args.to_h)
          Book.find(id: id)
        rescue Sequel::UniqueConstraintViolation => e
          GraphQL::ExecutionError.new(e.message)
        end
      end
    end
  end
end
