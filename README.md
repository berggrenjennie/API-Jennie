# API-Jennie
# TEST
```
curl -X GET api.softhouse.rocks/users
[
  {
    "address": {
      "geo": {
        "lat": -68.6102,
        "lng": -47.0653
      },
      "street": "Douglas Extension",
      "suite": "Suite 847",
      "city": "McKenziehaven",
      "zipcode": "59590-4157"
    },
    "_id": "5caaef896b334800cbf66334",
    "id": 3,
    "name": "Clementine Bauch",
    "username": "Samantha",
    "email": "Nathan@yesenia.net",
    "__v": 0
  }, ]
  ```

curl -X GET api.softhouse.rocks/posts
```
[
  {
    "_id": "5caaef896b334800cbf6634a",
    "userId": 2,
    "id": 15,
    "title": "eveniet quod temporibus",
    "body": "reprehenderit quos placeat\nvelit minima officia dolores impedit repudiandae molestiae nam\nvoluptas recusandae quis delectus\nofficiis harum fugiat vitae",
    "__v": 0
  },
  ```
  ```
  curl -i -X POST -H "Content-Type:application/json" api.softhouse.rocks/users -d'{
  "name": "string",
  "username": "string unique",
  "email": "string unique",
  "address": {
    "street": "string",
    "suite": "string",
    "city": "string",
    "zipcode": "string",
    "geo": {
      "lat": 0,
      "lng": 0
    }
  }
}'
```
