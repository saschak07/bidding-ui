# Bidding document editor User Interface

![bidding-ui](https://user-images.githubusercontent.com/38581840/88451451-6ee12b00-ce74-11ea-9046-8ec179be1fe7.png)


This is a very simple prototype, where a bidder can browse through the list of new tenders called by different organizations, and submit their own proposals by filling in details through an interactive online form and uploading the actual project implementation plan.

The tenderer can upload a format/template of the actual bidding documents (in .docx format), which consists of place holder tags to be filled through user inserted data as captured through the interface.

The application consists of the following basic functionalities,

* Display list of new tenders

* Place for tenderer to upload the proposal template which gets auto filled by user inserted inputs

* A set of consecutive forms where the bidder fills in the contact details, past project experience and upload the actual idea of implementation 
through a .docx file

* Also a page to list out all the submitted proposal, where the filled-up bid document can be downloaded also any proposal that needs to be deleted can be  removed

# Tech stacks:
 Front-end :
 
* react.js

* redux

* ES6
 
* axios

Back-end:

* java 8
  
* springboot
  
* postgres

The application is deployed in heroku cloud platform (hobby plan), here is the link : https://bidding-ui.herokuapp.com/

Also details about the backend is available here:

https://github.com/saschak07/biddingDocService
