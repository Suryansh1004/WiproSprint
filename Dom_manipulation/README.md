# Dependencies
- NodeJS v8 or greater
- http-server (npm install -g http-server)

# Development Setup
1. First fork this repository into your account
1. Clone the repository to your workspace using the command: ```git clone <repository-url>```
1. cd into the repository: ```cd <project-directory>```
1. Install dependencies using yarn command: ```npm install```
1. Start http-server to preview the webpage: ```http-server -c-1```

# Problem Statement
## Exercise 1
1. Implement "Count Query": User will enter the repository name in the first text box and the count in the second text box, and clicks on the "Go" button. At this point, display the count in a popup.
1. Replace the input text boxes with a drop-down, so that the user can simply select the repository and the count.

## Exercise 2
1. Use Gitlab's HTTP API to populate "Issues Summary" dynamically, upon page load.
1. Ensure that the drop-downs display the correct repositories, and that the "Count Query" is still working.
1. Create a mechanism for the user to open new issues from this webpage. Create a button "Create Issue", which will open a "Create Issue form" in a modal, containing three fields: "Repository, Title, Description". Once the user clicks submit, create a new issue using Gitlab's HTTP API, and update the "Issues Summary" section.
