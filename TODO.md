# TODO's in no general order

## Authentication

## Heroku connection

- This one is tough because I went with the sick-fits model of backend/frontend folders, which means there was no initial package.json file in the root folder.

- Which means, we need to verify that what I've started in that root package.json file will not only start up both, but properly create our next app/heroku build.

## Frontend styling

- I am looking at combining styled-components with Material-UI

- Seems like they should work in tamdem with each other, where Material-UI gives us components to use,

- and styled-components lets us customize them to our will.

### Page Layout

- Top Bar

  - Logo created.
  - Navigation buttons

    - Home

      - Landing page
      - Our about page basically, explains the app, explains login(?) features, such as admin and guest.
      - Could have two cards wide (1 wide for mobile) that explain in depth what each login sees, purpose, future development. Each of these two cards would have a 'switch login' button on the bottom to switch user.

        - This could honestly be an easy switch-user which updates state for every page.

      - Could have an intial Model that pops up on first visit, that asks if you want to view the page as an admin or as a guest(?) makes it a one click login basically, so we don't need to deal with actual passwords/usernames/resets/etc

        - this would be awesome with like 3 little bullets below each, that explain what special things you'll see for each type of login, i.e:

          - Customers can view order burger page
          - Admin can view order stock page

    - Create

      - Our main page that allows users to create their own, or customize previous burgers
      - Admin access might show stock data on each ingredient.
      - A header card with a little info on what to do, maybe a little blurb on the organic farms we source our materials from(? could be a cool page all it's own, 'local businesses we shop from')
      - A main card containing mapped ingredients. Each internal card for protein/topping/condiment would be in a similar grid fashion:

        - Left would be name of ingredient, right would be price of ingredient. On clicking each item, that ingredient's individual card would be highlighted, maybe an internal glow(?) of green.

        - top internal card is protein
          - you can order multiple of the same protein, but others are greyed out once you choose 1. Maybe there is a little "want to double?" button on the side once you choose your protein.
          - Each protein would show name and price next to id.

    - Favorites
      - prebuilt burgers
      - Admin access might show number of available, while guest login would show a greyed out image if not available.
      - Would be nice to have some sort of graphic of each
      - Would be nice to have a 'search by', and a 'order by' functionality on top.
      - Layout would be one main card, with internal cards for each burger.
      - Layout for internal cards would be image on the left, mapped ingredients on right.
    - Cart/Order
      - For customers maybe this is their cart to view and then pay
        - Go the sick-fits route, have a pop-out order on the right side with all items in the cart, pay(maybe have a fake card autofilled for display purposes)
        - Honestly the customer route should probably be it's own page.
          - I am invisioning most non-download order pages that restarants are using right now, and each of them seems like a whole page, not a pop-out for the pay screen.
      - For Admin this would be ordering stock of items. Maybe viewing all stock available, with a button to 'order' or add stock to each.
        - We could have this simply as an easy 'add x number to stock' next to each item in a list, for now...
        - Later functionality could be making it seem more legit. i.e:
          - Ordering items takes x number of days to get back into stock, or:
          - organizing by out of stock, or most ordered, or auto-order when getting low

## Backend

- The seed files are just a super rough estimate from a month ago so take that with a grain of salt. BUT...
- We will have a DB containing each ingredient, in categories of:
  - Protein
    - Price, calories, availability, (?)
  - Topping
    - Price, calories, availability, (?)
  - Condiment(?) i mean, if we go all out on the others, might as well do this too
- We also have a DB containing built burgers with connections to each ingredient included.
  - Each burger would have:
    - connections to ingredients,
    - number of times ordered
    - stock availability? this would need to be updated each time a burger is ordered, or stock is updated.
- Customer creation are simple CREATE_PRODUCT graphQL strings with ingredient associations.
- Admin ingredient ordering would simply be an 'update product' style graphQL string to update stock.
- Customer ordering of items would be another 'update product' graphQL string to lower stock of each ingredient ordered.

## Graphics

- Logo needed
  - I can do some photoshop magic for some sort of graphic/logo.
- Burger images? Maybe we should try for 8bit style burgers with different toppings associated with each? So if you create a burger with lettuce and tomato, you get the burger with green and red lol
