## Endpoints

List of available Endpoints:

## Users

- `POST /users/register`
- `POST /users/login`

### Endpoint: `POST /users/register`

### Description

- Register a new User

#### Request

- Headers

```json
{
  "Content-Type": "application/x-www-form-urlencoded"
}
```

- Body

```json
{
  "email" : String,
  "password": String
}
```

#### Response

_201 - Created_

- Body

```json
{
  "message": String
}
```

_400 - Bad Request_

- Body

```json
{
  "message": String
}
```

### Endpoint: `POST /users/login`

### Description

- Login a User

#### Request

- Headers

```json
{
  "Content-Type": "application/x-www-form-urlencoded"
}
```

- Body

```json
{
  "email" : String,
  "password": String
}
```

#### Response

_200 - OK_

- Body

```json
{
  "access_token": String,
}
```

_401 - Unauthorized_

- Body

```json
{
  "message": String
}
```

## Profiles

- `GET /profiles`
- `POST /profiles`
- `GET /profiles/list`
- `PUT /profiles/:UserId`
- `DELETE /profiles/:UserId`

### Endpoints with Authorization

- `GET /profiles`
- `POST /profiles`

#### Request

- Headers

```json
{
  "access_token": String
}
```

#### Error Response

_403 - Forbidden_

- Body

```json
{
  "message": String
}
```

### Endpoint: `GET /profiles`

### Description

- Get the Profile of the User

#### Response

_200 - OK_

- Body

```json
{
  "id": Int,
  "email": String,
  "password": String,
  "createdAt": String,
  "updatedAt": String,
  "Profile": {
    "id": Int
    "nik": String,
    "fullName": String,
    "gender": String,
    "bloodType" String,
    "photo": String,
    "UserId": Int,
    "CreatedAt": String,
    "UpdatedAt": String
  }
}
```

### Endpoint: `POST /profiles`

### Description

- Create Profile of the User

#### Request

- Headers

```json
{
  "Content-Type": "multipart/form-data"
}
```

- Body

```json
{
  "nik": String,
  "fullname": String,
  "gender": String,
  "bloodType": String,
  "photo": File
}
```

#### Response

_201 - Created_

- Body

```json
{
  "message": String
}
```

_400 - Bad Request_

- Body

```json
{
  "message": String
}
```

### Endpoint: `GET /profiles/list`

### Description

- Get the List of Profiles

#### Response

_200 - OK_

- Body

```json
{
  "count": Int,
  "rows": [
    {
      "id": Int,
      "email": String,
      "password": String,
      "createdAt": String,
      "updatedAt": String,
      "Profile": {
        "id": Int
        "nik": String,
        "fullName": String,
        "gender": String,
        "bloodType" String,
        "photo": String,
        "UserId": Int,
        "CreatedAt": String,
        "UpdatedAt": String
      }
    }
  ]
}
```

### Endpoint: `PUT /profiles/:UserId`

### Description

- Update Profile of any User

#### Request

- Headers

```json
{
  "Content-Type": "multipart/form-data"
}
```

- Body

```json
{
  "nik": String,
  "fullname": String,
  "gender": String,
  "bloodType": String,
  "photo": File
}
```

#### Response

_200 - OK_

- Body

```json
{
  "message": String
}
```

_400 - Bad Request_

- Body

```json
{
  "message": String
}
```

### Endpoint: `DELETE /profiles/:UserId`

### Description

- Delete Profile of any User

#### Response

_200 - OK_

- Body

```json
{
  "message": String
}
```

### Global Error

#### Response

_404 - Not Found_

- Body

```json
{
  "message": String
}
```

_500 - Internal Server Error_

- Body

```json
{
  "message": String
}
```
