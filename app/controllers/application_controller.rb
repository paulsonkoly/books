require 'sinatra'
require 'sinatra/json'

class ApplicationController < Sinatra::Base
  set :root, File.join(File.dirname(__FILE__), '..')
  get '/' do
    erb :index
  end
end
