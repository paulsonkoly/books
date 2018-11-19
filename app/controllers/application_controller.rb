require 'sinatra'
require 'sinatra/json'

class ApplicationController < Sinatra::Base
  get '/' do
    'hello'
  end
end
