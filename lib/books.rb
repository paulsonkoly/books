require "books/version"
require 'sequel'

module Books
  Sequel.connect(adapter: 'sqlite', database: 'db/db.sqlite')
  Sequel::Model.plugin :json_serializer

  class Book < Sequel::Model
  end
end
