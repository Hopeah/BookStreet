# P0
## Users
    Registration/login -> button that leads to a login page with login/password fields and a link to account creation if is hasn’t been done yet 
    Google authentication -> an option on a login page?
    Successful registration email -> find a template somewhere?
    Password storage/reminder? -> encryption? 
    User profile -> a separate page with fields below
        Name (change) -> empty or pre-generated first? 
        Avatar (change) -> get from google if google auth, ability to upload one
        Email (change) -> get from registration
        Password (change) -> hide behind stars, changing requires email code
        Date of registration -> static from database
## Frontpage (not logged in users)
    About button -> on the top right, leads to an about page
    Contact button -> on the top right, leads to a contact page
    Login button -> in the center, leads to a login page
## Homepage
	User Welcome -> using a set name from user profile
    Reading Progress -> current documents being read are displayed with a progress bar (screen center?)
    Book Wishlist -> books that are on a wish list are displayed (screen left?)
    Read/Paused -> books that were completed/paused are displayed (screen right?)

## Reading documents

1. Status -> marking every document based on the reading progress
	1. Future Read
	2. Active
	3. Paused
	4. Read

## Properties

Various document properties, full list can be viewed by clicking on it? Certain properties will be visible all the time (on homepage, lists?)

1. Title -> always
2. Author
3. Genre
4. Links to download/get -> always
5. Comments/Review/Notes -> a field that can be filled out
6. Rating
7. Type -> always 
	1. Book
	2. Article
	3. Journal
	4. Comics/Manga
## Reading lists

1. Create lists -> lists could contain a limited? number of documents, contain the name of who it was created by
2. Delete lists -> list owner can delete a list
3. List sharing -> a list can be freely shared by anyone with a link, ability to clone a list to become an owner of a copy

## Bonus…

1. Dark/light modes
2. Different greeting based on time of the day
3. Book library API
4. Allow dragging list items around to the list owner
5. List visibility (public/private)
6. List info (when it was created/when it was last modified)
