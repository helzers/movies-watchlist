
# Online Movie Watch List

This project was created using ReactJS, SASS and The Movie Database API. It is intended as a space where you can search for any movie, new or old,<br/>
and save the ones you wish to watch. The users list is stored in local storage, with each movie having a status of watched or unwatched.<br/>
This is somewhat of a work in process as there are some bugs in the website.

You can view this website at the following link:

### https://helzers.github.io/movies-watchlist/#/

<br/>

## AdobeXD

I used AdobeXD to create high fidelity mock ups of the website before I began implementation.<br/>
You can view the project **[here](https://xd.adobe.com/view/a602df5b-644a-429b-8187-bbddc39b7579-f351/grid/)**<br/>

<br/>

## Home Page

This page can be found on first load of the website, or via the 'Search' link in the NavBar. <br/>
The home page of this website features the 20 most searched for movies on The Movie Database website and through their API.<br/>
This is intended as a way for users to discover new movies the may be interested in.<br/>
They can hover over each movie card to reveal a description they can read to see if they're interested.<br/>

<br/>

## Search Results Page

This page is found when a user enters and submits a search into the bar featured on the Home Page.<br/>
This shows the top 20 movies whose title best matches the users search.<br/>
There's some new text in this page to remind the user exactly what they searched. <br/>
This page also has the hover to reveal movie description feature, in case a user finds a new movie through this method.<br/>

<br/>

## My List Page

This page can be found through the 'My List' link on the NavBar.<br/>
This features all the movies the user has saved to their watch list.<br/>
These can be filtered between 'All', 'Watched' and 'Unwatched' using the dropdown.<br/>
Movies status can be changed via the 'Watched' button under each movie.<br/>
The movies with a status of watched have a greyed out poster and their title crossed out.<br/>
Movies can also be removed from the list using the 'Delete' button under each movie.<br/>

