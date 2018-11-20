require 'application_controller'
require 'books'

class BookController < ApplicationController
  get('/') { json Books::Book.order_by(Sequel.desc(:id)) }

  post('/') do
    book = JSON.parse(request.body.read, symbolize_names: true)
    Books::Book.insert(book)
    logger.info "saving #{book}"
    201
  end
end
