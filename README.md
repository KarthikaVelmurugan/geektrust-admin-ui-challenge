# Geektrust - Coding Challenge [ ADMIN UI SCREEN ]

## Requirements
1. Column titles must stand out from the entries.
2. There should be a search bar that can filter on any property.
3. You should be able to edit or delete rows in place.(There is no expectation of persistence. Edit and delete are expected to only happen in memory.)
4. You need to implement pagination: Each page contains 10 rows. Buttons at the bottom allow you to jump to any page including special buttons for first page, previous page, next page and last page. Pagination must update based on search/filtering. If there are 25 records for example that match a search query, then pagination buttons should only go till 3.
5. You should be able to select one or more rows. A selected row is highlighted with a grayish background color. Multiple selected rows can be deleted at once using the 'Delete Selected' button at the bottom left.
6. Checkbox on the top left is a shortcut to select or deselect all displayed rows. This should only apply to the ten rows displayed in the current page, and not all 50 rows.

## Users API
Request Type :
GET

Endpoint :
https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json
Sample Response :
                  
  [
  {
    "id": "1",
    "name": "Aaron Miles",
    "email": "aaron@mailinator.com",
    "role": "member"
  },
  {
    "id": "2",
    "name": "Aishwarya Naik",
    "email": "aishwarya@mailinator.com",
    "role": "member"
  },
  {
    "id": "3",
    "name": "Arvind Kumar",
    "email": "arvind@mailinator.com",
    "role": "admin"
  }
]

## Programming Stack 
Front End - React JS,CSS

## Modules
1. Pagination Module
2. Search Module
3. User Listing View Page
4. User Editing Page
5. Custom Toast Window

## Output Screenshots

![full-screen](https://user-images.githubusercontent.com/64409033/203771451-95ff72f0-9acc-4176-a709-963ad89959a6.png)

![edit-page](https://user-images.githubusercontent.com/64409033/203771519-8a43dae1-0611-48ea-990a-2db7dad028d9.png)

![custom-toast](https://user-images.githubusercontent.com/64409033/203771537-04bc4796-6d6a-426a-a8be-a08e584cd0ab.png)


https://user-images.githubusercontent.com/64409033/203771956-c2180cae-e400-4024-b10a-7e0b5a852ff2.mp4

