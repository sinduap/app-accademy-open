# Hello HTML

Let's jump right in and start coding to create your first HTML page. In this lesson, you will:

1. Create a remote repository on GitHub, clone it, and push your code to it
2. Construct a simple web page using HTML
3. Set up a document using html, head, title, and body elements
4. Organize content using the p element

## How to engage with this lesson

This lesson is an introductory step-by-step walkthrough of creating a simple HTML page. After completing this lesson, you will dive deeper into all of these objectives and start using them more independently in the subsequent lessons.

To get the most out of this lesson, make sure you follow each step and type out each line of code on your own. While it may be tempting to copy and paste code into your text editor, this approach will slow down your learning in the long run. Typing out the code helps you to develop muscle memory, which will help you to memorize important syntax more quickly.

## Create and clone a new repository on GitHub

Log in to GitHub and click on the "+" icon in the navigation bar at the top of the page. Click on "New repository".

Fill out the "Create a new repository" form with the following details:

- Repository name: "hello-html"
- Description: "Practice building a simple HTML page"
- Click "Private" so that this practice activity will NOT be visible to the public.

Click the green "Create Repository" button to create the new repository.

Next, open your terminal and navigate to the directory where you keep your coding projects (for example, `cd aa-projects`).

If you do not already have a projects directory, you can create one and then navigate into it:
<br />
`mkdir aa-projects`
<br />
`cd aa-projects`

Now, you are ready to clone your repository and start working on it in VSCode. To clone the repository, you will need to copy the HTTPS link right underneath "Quick setup" on GitHub, and use that within the `git clone` command you learned in the GitHub Overview lesson. Type the following command into the terminal, making sure that `<YOUR-GITHUB-USERNAME>` is replaced with your username from the link that you copied to your clipboard from GitHub:

`git clone https://github.com/<YOUR-GITHUB_USERNAME>/hello-html.git`

This will clone your (currently empty) repository into a new "hello-html" directory within your "aa-projects" directory. You may be prompted to enter your GitHub PAT to complete GitHub authentication.

_Note: The instructions above assume that you have configured GitHub using a PAT. If you are using SSH, then make sure you are copying the SSH link from GitHub, and enter your SSH key when prompted._

## Creating an HTML file

Next, you will need to open up the project in VSCode, create a new HTML file, and open the HTML file to view it in the Chrome browser.

To open up the project in VSCode, you can use the `code` command with the new project directory name:

`code hello-html`

Create a new file in the hello-html directory and name it "html-hello-world.html". Make sure you are inside the "hello-html" directory when you create this file.

`touch html-hello-world.html`

Open this new file in the chrome browser using the open command.

`open html-hello-world.html`

If the `open` command is not working for you, try opening your browser pasting the absolute path to the file into the address bar.

Before moving on, it is time to stage and commit your changes and push them to the repository on GitHub to make sure everything is set up properly.

- Stage the changes: `git add .`
- Commit the changes with an "initial commit" message: git commit -m "initial commit"
- Push the changes to to your default branch on GitHub: git push origin main
- Enter your PAT if prompted.

Note: Traditionally, the default branch of a repository has been called "master", but this language is evolving. In a future lesson, we will learn about the evolution of this language, and you will learn how to change the name of the default branch of this repository.

To test whether your project was updated in GitHub, click on the `<Code>` tab on your project repository page in GitHub. If you see your "hello-html.html" file and the "initial commit" message next to it, then everything has been set up correctly.

## Setting up the basic HTML structure

Next, you will set up the basic structure of a HTML document. You will use these elements in every HTML document that you create. These elements will be described in greater detail in the next few lessons.

At the top of the `html-hello-world.html` file, you need to tell the browser which version of HTML you will be using in your code. Add the following code to line 1.

```html
<!DOCTYPE html>
```

Underneath this line, you will need to add the root element of the HTML document. All of your code will live within these two tags.

```html
<html></html>
```

Next, you will add two elements inside the `html` element, the `head` element and the `body` element. Your file should now look like this:

```html
<!DOCTYPE html>
<html>
  <head>
    ...
  </head>
  <body>
    ...
  </body>
</html>
```

Inside the `head` element, add a `title` element. The text within this element should show up in your browser tab. Use the lesson title, "Hello HTML" as your title.

```html
...
<head>
  <title>Hello HTML</title>
</head>
...
```

Save your HTML document by typing Command-S on Mac, or Control-S on Windows. Navigate over to your browser, click refresh, and you should see the title show up in your tab at the top of the page.

Note: You must save your changes in VSCode, and then refresh the browser in order to see your changes show up on the page! If you add new code and nothing changes, always take a step back to save and refresh.

## Adding content to the HTML document

Your HTML document is still a blank page at this point. In order to create content for the page, you need to add elements within the `body` element. In the next few lessons, you will explore many different types of elements that you can add to the page, but for now, you will just stick with the basic paragraph, or `p` element.

Add a friendly "Hello World!" message to the page inside the `body` element.

```html
...
<body>
  <p>Hello World!</p>
</body>
...
```

Save the file, refresh your browser, and you should see your "Hello World!" message show up at the top left hand corner of the page.

Time to jazz it up a little! Add another `p` element, and fill it up with your favorite emojis. Save, refresh your browser, and view your first HTML webpage!

Note: You can access emojis by typing Control-Command-Space on a Mac, by typing Windows-Period (.) on Windows, or by using the Edit menu on VSCode and clicking on "Emoji and Symbols".

When you're finished, your `html-hello-world.html` file should look like this:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Hello HTML</title>
  </head>
  <body>
    <p>Hello World!</p>
    <p>🐔🐸🐷🦊🐷🐸🐔</p>
  </body>
</html>
```

Your webpage should look like this:

![](https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Module-Solo-Prep-Work/assets/hello-html.png)

## Push your project to GitHub

Now that you have completed this exercise, it is time to stage, commit, and push our updates to the remote repository on GitHub. Use the following commands in your terminal:

`git status`

Make sure that only the file you want to add is listed. You can easily get into trouble by accidentally committing something you didn't intend to if you don't always check first!

`git add .`

`git commit -m "completed hello-html practice"`

`git push origin main` (if your default branch is called "main")

...OR `git push origin master` (if your default branch is called "master")

Finally, check the `<Code>` tab on the repository page in GitHub, and you should see your new commit message (you may need to refresh the page).

If you click on your GitHub profile, you should start to see your commits show up as green boxes in your "green garden" grid.

## What you've learned

In this exercise, you set up a remote repository on GitHub and cloned your project to your local machine. You created your first HTML web page, and rendered it in the browser. You used some of the basic elements that structure all HTML pages, including the `html`, `head`, `body`, and `title` elements. You also started adding content to the `body` using the paragraph, or `p` element. In the next few lessons, you'll explore these elements and others in more detail. By the end of this module, you will be able to build upon these basics to create a webpage with many different types of content and styling.

_Note: After completing this project please submit using the Submit File button above to mark this project complete._
