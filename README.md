# Zone01 Profile – Personal Dashboard with GraphQL

This project is for students with an account on [Zone01 Oujda](https://learn.zone01oujda.ma). It allows you to create a personalized profile page using data from the Zone01 GraphQL API.

## Project Overview

Using the GraphQL endpoint provided by the platform, this project enables users to:

- Authenticate using their Zone01 credentials.
- Access and display personal data such as XP, grades, audits, or skills.
- Generate SVG-based statistical graphs to visualize progress.

## Features

- Secure login using JWT (supports both username/password and email/password).
- Personal profile page three custom data sections (level, audit ratio and the number of projects done).
- Two SVG-based graphs (animated or interactive) showing statistics such as:
  - Pie Chart of skills progression customized for each skill with button click.
  - Bar Chart of Projects (hovering on the bar rectangle displays the team and the XP earned for that project).
- Fully custom UI.

## Authentication

Authentication is handled via a POST request to:

```
https://learn.zone01oujda.ma/api/auth/signin
```

- Use Basic Auth (base64 encoded) with either `username:password` or `email:password`.
- The returned JWT must be used in subsequent GraphQL requests as a Bearer token.
- JWT will contain the authenticated user’s ID.

## GraphQL Queries

You must use different types of queries: basic, with arguments, and nested.

**Basic Query:**
```graphql
{
  user {
    id
    login
  }
}
```

**With Argument:**
```graphql
{
  object(where: { id: { _eq: 3323 }}) {
    name
    type
  }
}
```

**Nested:**
```graphql
{
  result {
    id
    user {
      id
      login
    }
  }
}
```

## Data Sources

Tables used in querying the data from the GraphQL API:

- `user`: basic user info (id, login, auditRatio)
- `event_user`: level
- `group` and `pathByPath`: (amount of XP, name of the project, and the team members worked with the logged in user on the same project)
- `transaction_aggregate` : skills progression
- `object`: metadata for projects and exercises

## Hosting

The project is hosted on :
- GitHub Pages
- Vercel

## Technologies and Skills

This project will help you understand and apply:

- GraphQL and GraphiQL interface
- JWT-based authentication and authorization
- SVG and data visualization
- Basic UI/UX principles
- Hosting and deployment

## Credits 

This project was realized with the help of an article ( a very good one) found in the css tricks website 
Link of the article : [https://css-tricks.com/how-to-make-charts-with-svg](https://css-tricks.com/how-to-make-charts-with-svg)

## Contribution

If you find an issue or want to suggest an improvement, feel free to submit an issue or pull request.
