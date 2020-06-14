# bookmarks-app

The application is structured in four main components,
  Dashboard Component, is the main container of the feature and handles the store actions.
  ![Dashboard](/src/assets/images/dashboard.png)

  </br>
  BookmarksList Component, renders the data retrieved by the store and controls the form modal. The data grouping should be improved by the use and implementation of some filtering pipe to avoid the renderization of non-visible elements.
  It should use an isolated component to render cards, and EDIT functionallity should open the modal form window containing the values of the chosen bookmark to edit (and should manage the update of the bookmark with a new action).

  ![List](/src/assets/images/list.png)
  
  </br>
  BookmarkModal Component, renders the modal and it's the manager of sending actions whenever an input has been modified.
  </br>
  BookmarkForm Component, manages the form to add a new bookmark. It uses reactive froms for validation (should be improved for a better data model).

  ![List](/src/assets/images/form-modal.png)
  
  </br>
The initial data has been stored at a JSON file and served locally. The service should handle post/put/delete requests to persist data.

The store has been configured to work with the states of the hole app, the bookmarks feature (to get/add/remove bookmarks) and the form aswell (to control input changes).

  ![List](/src/assets/images/store.png)

# Installation

Clone or download the repository.
Run <code>npm install</code> to install dependencies.
</br>
Run <code>ng serve --open</code> to launch the app. It will open in your browser when the process ends, otherway navigate to http://localhost:4200/.


# Examples

ADD BOOKMARK

Initial State

![List](/src/assets/images/list.png)

</br>

Click on Add button to open the form

![List](/src/assets/images/add.png)

</br>


Enter the data for the new bookmark (all fields are required, so Submit button would be disabled until all fields are filled).

![List](/src/assets/images/form-filled.png)
</br>

And automatically the list is updated with the new entry.

![List](/src/assets/images/list-updated.png)
</br>

REMOVE BOOKMARK

Just click on REMOVE button in the bookmark you want to delete.

![List](/src/assets/images/list-updated-remove.png)
</br>


You can visit a working copy of the app at:
