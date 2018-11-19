require 'sequel'

db = Sequel.sqlite('db/db.sqlite')

db.create_table(:books) do
  primary_key :id
  String :title, null: false
  String :author, null: false
  String :isbn, size: 50, null: false

  index :title
  index :author
  index [:title, :author], unique: true
  index :isbn, unique: true
end
