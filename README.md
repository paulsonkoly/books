# Books

An example single page application using React with ruby Sinatra back end. Javascript is served from a bundle under app/public, and it's created by rollup. It contains adding books to the back-end database via JSON posts, form validation, displaying new data on the same page, and a user friendly interface themed with bootstrap.

## Installation

This application is a single page sinatra web app packaged with bundler.

```bash
cd books
bundle install
```

And then execute:

```shell
bundle exec rackup
```

## Development

The javascript development flow uses rollup. Install dependencies inside the jsx:

```shell
cd jsx
npm install
```

and then run rollup to compile a new js bundle:

```
npx rollup -c
```

The back end uses the following libraries:

  * sinatra
  * sequel
  * sqlite3

The frontend makes use of

  * jsx (compiled with babel)
  * react
  * rollup
  * classnames
  * react-icons

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/phaul/books.
