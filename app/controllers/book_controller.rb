require 'application_controller'
require 'books'

class BookController < ApplicationController
  get('/') { json Books::Book.all }
end
