# Final Assessment - Backend Structure

(This is a markdown .MD file, if you are reading this in vs-code, right click the file and select `Open Preview`)

## What are we building?

We are building a webapp where people can put up their artworks for auction and encourage other people to make more art. It is called `Heart Works`. It has multiple pages:

- Signup & Login pages (already implemented in the starter kit)
- A page with a list of artworks up for auction
- A detail page for artworks where you can bid or `heart` an artwork
- A form where you start an auction
- A page for artists to post new work
- A page for artist to see their own work

As a starting point, you must use the following react-redux & express templates where the login / signup flow has already been implemented. Instructions on how to use the templates can be found on the repositories themselves.

- [Frontend starter](https://github.com/Codaisseur/react-redux-template)
- [Backend starter](https://github.com/Codaisseur/new-express-template)

## Wireframe

You will be provided with a wireframe that shows an overview of the app along with this README

## Entities

### Artwork

| key        | data type | required | notes                           |
| ---------- | --------- | -------- | ------------------------------- |
| id         | Integer   | yes      | Already added by model:generate |
| title      | String    | yes      |                                 |
| imageUrl   | String    | yes      |                                 |
| hearts     | Integer   | yes      | default value is 0              |
| minimumBid | Integer   | yes      | can be 0                        |
| createdAt  | Date      | yes      | Already added by model:generate |
| updatedAt  | Date      | yes      | Already added by model:generate |
| userId     | Integer   | yes      | Foreign key (references a user) |

**Relations:**

- artwork belongs to user
- artwork has many bid

### Bid

| key       | data type | required | notes                                |
| --------- | --------- | -------- | ------------------------------------ |
| id        | Integer   | yes      | Already added by model:generate      |
| email     | String    | yes      |                                      |
| amount    | Integer   | yes      |                                      |
| createdAt | Date      | yes      | Already added by model:generate      |
| updatedAt | Date      | yes      | Already added by model:generate      |
| artworkId | Integer   | yes      | Foreign key (references an artworks) |

**Relations:**

- bid belongs to artwork

### User

| key       | data type | required | notes                              |
| --------- | --------- | -------- | ---------------------------------- |
| id        | Integer   | yes      | Already implemented                |
| name      | String    | yes      | Already implemented                |
| email     | String    | yes      | Already implemented, unique        |
| password  | String    | yes      | Already implemented, password hash |
| isArtist  | Boolean   | no       |                                    |
| createdAt | Date      | yes      | Already implemented                |
| updatedAt | Date      | yes      | Already implemented                |

- user has many artwork

| Criteria                                                                   | Points |
| -------------------------------------------------------------------------- | ------ |
| Server contains sequelize models and migrations for Artwork and Bid        | 2      |
| Required fields for artworks and bids are validated in models & migrations | 2      |
| User, Artwork and Bid models are correctly related                         | 2      |
| Seeders are present to create at least 3 artworks and 5 bids               | 2      |
| Total                                                                      | 8      |

✅ Once you done setting up models, migrations, seeds and relations, you don't need to read this file anymore.
