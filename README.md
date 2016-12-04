# CMPE280-EventPlanning

website link:

http://ec2-54-183-40-122.us-west-1.compute.amazonaws.com/
                    -or-
http://www.ec2-54-183-40-122.us-west-1.compute.amazonaws.com/

Setup instructions:
Download the source code zip file.
HTML is the main folder of the project and it contains the following components:
All HTML files in the main folder
All php files in php folder
All Javascript files and libraries in assets/js folder
All image files in assets/img folder
All css files in assets/css folder
All fonts files are in assets/fonts folder
The eventlocations data file is in assets/json folder

index.html file in the HTML folder is the main file to be opened with an of the browsers.
The web application data is stored in Amazon RDS MySQL database.
The database is accessed via PHP files which are on Amazon EC2 remote server (php files in the folder are for reference and review).

Website instructions:
1. Open index.html file in any of the browsers. This is the website home page
2. Navigation bar contains the following:
  a. Home (to go back to Home anytime)
  b. About (to view about the projectand team)
  c. Event Locations (to view the locations based on themes)
  d. Services (to view nearby services as listed)
  e. Contact (to submit any queries or feedback)
  f. Login/<Username> (to login to the account or if already logged in, to view acount information or to log out)
3. Home Page contains carousel of relevant images, direct Book Now option, a brief of website and features offered, marquee of reviews, an example VR video, and image links for each of the event themes. On Home page, User can select event theme and number of guests and click on Book now to view locations. (or)
4. User can navigate to one of the thmese under locations to view locations.
5. In Locations page, After viewing data, user can click on the View button for further details and VR view of the location.
6. The Location Details page contains details of location, images, weather of the current week, location map, VR view option, date selection option and Reserve button.
7. If user want to book a location, date should be selected and click on Reserve button. The location venue is now booked.
8. User can go to My Account page to view his/her bookings and corresponding details. Also, recently viewed locations will be displayed in this page.
9. User can go to Services page to view nearby services of the locations. (Currently, nearby sevrices of SJSU alone are rendered for project demo purpose).
10. New users can sign up in the Login page by providing their first name, last name, email, and password.
