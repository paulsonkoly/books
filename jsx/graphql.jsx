export default function graphql_query(query) {
  return (fetch('http://localhost:9292/graphql',
    { method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({query: query})
    })
    .then(response => response.json())
    .then(data =>
      {
        if (data.errors) {
          throw data.errors;
        }
        else {
          return data.data;
        }
      })
  );
}
