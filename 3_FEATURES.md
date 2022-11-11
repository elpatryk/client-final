# Final Assessment - Features

(This is a markdown .MD file, if you are reading this in vs-code, right click the file and select `Open Preview`)

### 1. As a user I want to view a list of artworks

- The default page you see when you go to `/` should be a list of artworks
- Each artwork is displayed with the title, image, the number of hearts it has and the number of bids it has
- In the artwork "card", there is a button linking to the details of that artwork

| Criteria                                                                         | Points |
| -------------------------------------------------------------------------------- | ------ |
| The frontend route `/` displays a list of artworks                               | 1      |
| The artworks are displayed with their number of bids they have in the database   | 2      |
| An array of artworks is stored and managed by Redux                              | 1      |
| A selectors and actions are defined in a separate files                          | 1      |
| Each artwork has a `View details` button, it links to the artwork's details page | 1      |
| The artworks are not fetched from the server                                     | -1     |
| Total                                                                            | 6      |

---

### 2. As a user interested in buying people's art, I want to see the details of an artwork, so I know what it costs

- When we click on the `View details` button of an artwork we see the details of that artwork
- On this detail page we can see the bids belonging to that artwork

| Criteria                                                                       | Points |
| ------------------------------------------------------------------------------ | ------ |
| The frontend route `/artworks/:id` displays a detail page for an artwork       | 1      |
| The artworks are displayed with a title, image and the number of hearts it has | 1      |
| The bids belonging to the artwork are displayed with email and amount          | 1      |
| The artwork and its bids are not fetched from the server                       | -1     |
| Total                                                                          | 3      |

---

### 3. As a user I want to give people hearts for their artwork, so I can encourage them to make more art

- Any user, logged in or not should be able to click a button `give heart`
- It increases the `hearts` property of an artwork by 1
- We do not keep track of who gave a heart to the artworks, just the amount of hearts the artwork has

| Criteria                                                                                     | Points |
| -------------------------------------------------------------------------------------------- | ------ |
| On the artwork's detail page we see a button with `give heart`                               | 1      |
| When the `give heart` button is clicked the number of hearts changes on the page             | 1      |
| Clicking the `give heart` button sends a PUT request to the server                           | 1      |
| Clicking the `give heart` button updates the `hearts` property of an artwork in the database | 1      |
| You have to refresh to see the number of hearts update                                       | -1     |
| Total                                                                                        | 4      |

---

### 4. As a user interested in buying people's art, I want to be able to make a bid, so I can show my interest in buying an artwork

- On the detail page for an artwork there should be a form with 1 field: `amount`
- This form allows a user to make a bid
- This should only be possible when a user is logged in
- The email value for the bid can be taken from the Redux store
- Alternatively make an input for the email as well
- The minimum value of the form should be the highest bid + 1 euro

| 4. Criteria - Bidding                                                                           | Points |
| ----------------------------------------------------------------------------------------------- | ------ |
| When a user is logged in we can see an number input for amount and button to `Bid`              | 1      |
| When the `Bid` button is pressed, it makes a POST request to the server to create a new `Bid`   | 2      |
| The bid created in the database has the correct `artworkId`                                     | 1      |
| The new bid can be seen on the page without refreshing                                          | 2      |
| The auth middleware is used on the server side to authorize the request and it works            | 1      |
| The minimum value of the input for amount in the frontend is the highest bid amount + 1         | 1      |
| If there are no bids yet the minimum value is the `minimumBid` value from the artwork           | 2      |
| The backend validates that the new bid is the highest bid so far uses correct HTTP codes if not | 2      |
| Total                                                                                           | 12     |

---

### 5. As an administrator of this website, I want users to be able to specify that they are artists, so I know how my platform is being used

- When signing up, we want to users to specify that they are artists
- We can do this by adding a checkbox to the form
- We will also have to write a migration to add a column `isArtist` to our table

| Criteria                                                                           | Points |
| ---------------------------------------------------------------------------------- | ------ |
| A separate migration is created to add a column `isArtist` to our users table      | 2      |
| A checkbox is added to the signup form                                             | 1      |
| The `signUp` action also sends a value for `isArtist` when posting to the server   | 1      |
| When the checkbox is checked on signup, the user created has `isArtist: true`      | 2      |
| When the checkbox is not checked on signup, the user created has `isArtist: false` | 1      |
| Total                                                                              | 7      |

---

### 6. As an artist I want to be able to post an artwork, so I can make money with my art

- As an artist (a user with `isArtist: true` and who is logged in) you should be able to post an artwork
- If you're logged in as an artist, you see a `Start an auction` tab in the navbar
- `Start an auction` tab should lead to a form where you can post an artwork

| Criteria                                                                | Points |
| ----------------------------------------------------------------------- | ------ |
| There is a link with `Start an auction` in the navbar                   | 0.5    |
| A user can only see this link when you are logged in and is an Artist   | 1.5    |
| Clicking `Start an auction` links to a page with a form                 | 0.5    |
| The form contains inputs for title, minimum bid & imageUrl              | 0.5    |
| When the form is submitted a POST request is sent to the server         | 1      |
| The auth middleware is used on the server side to authorize the request | 1      |
| An artwork is created with the correct data and `userId`                | 2      |
| `userId` is not sent in the body or as a param of the request           | 1      |
| An additional check is done in the backend to check if isArtist is true | 1      |
| The user sees a success message if the artwork was posted successfully  | 1      |
| The success message is an alert, confirm or prompt popup or console.log | -1     |
| Total                                                                   | 10     |

**Note: You can of course us an `Alert` bootstrap component as a message (just not window.alert())**

---

### 7. As an artist, I want to be able to delete my artworks

- As an artist (a user with `isArtist: true` and who is logged in) you should be able to delete an artwork
- If you are logged in as an artist and the artwork is yours, there should be a button with `delete` next to each artwork

| Criteria                                                                                                   | Points |
| ---------------------------------------------------------------------------------------------------------- | ------ |
| There's a `delete` button next to each artwork                                                             | 0.5    |
| You only see the button `delete` if logged in, `isArtist: true` and artwork is yours                       | 1      |
| Clicking the button deletes the selected artwork and removes it from the screen                            | 1      |
| The request makes use of JWT authorization                                                                 | 0.5    |
| An additional check is made in the backend to check if `isArtist: true`                                    | 1      |
| An additional check is made in the backend to check if that artwork belongs to the user making the request | 1      |
| Total                                                                                                      | 5      |

### 8. Finishing up

1. Assess yourself

- Write it in the `SELF_ASSESSMENT.md` file attached
- Score your assessment in the column `Self`
- Leave room for the evaluator to fill in the `Evaluator` column

2. Reflect on the assessment

- Write in the `REFLECTION.md` file attached:
- In the file there will guided questions
- Should be around 200 words

3. `push` your code to your repository using `git push origin master`

| Criteria                                                                   | Points |
| -------------------------------------------------------------------------- | ------ |
| Student performed an accurate self assessment (max off by + or - 7 points) | 2      |
| Student can reflect on their process by writing a reflection of ~200 words | 2      |
| Student has regularly committed changes (at least 1 commit per feature)    | 1      |
| Total                                                                      | 5      |
