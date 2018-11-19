require 'sinatra'

class ApplicationController < Sinatra::Base
  get '/' do
    'hello'
  end
end
