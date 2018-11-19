require "books/version"
require 'sequel'

module Books
  Sequel.connect(adapter: 'sqlite', database: 'db/db.sqlite')

  class Book < Sequel::Model
  end
end
