require 'application_controller'
require 'books'

class BookController < ApplicationController
  post('/') do
    begin
      book = JSON.parse(request.body.read, symbolize_names: true)
      id = Books::Book.insert(book)
    rescue Sequel::UniqueConstraintViolation
      halt 422, 'unique constraint violation'
    rescue JSON::ParserError
      halt 400, 'bad json'
    else
      book.merge!(id: id)
      status 201
      body book.to_json
    end
  end

  delete('/:id') do |id|
    book = Books::Book.find(id: id)
    book.delete if book
    202
  end
end
