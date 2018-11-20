require 'application_controller'
require 'books'
class BookController < ApplicationController
  get('/') { json Books::Book.order_by(Sequel.desc(:id)) }

  post('/') do
    book = JSON.parse(request.body.read, symbolize_names: true)
    id = Books::Book.insert(book)
    logger.info "saving #{book}"
    book.merge!(id: id)
    status 201
    body book.to_json
  end

  delete('/:id') do |id|
    book = Books::Book.find(id: id)
    book.delete if book
    202
  end
end
