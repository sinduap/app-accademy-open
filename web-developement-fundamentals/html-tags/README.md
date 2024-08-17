# HTML Tags Practice

In this lesson, you will create an HTML document which you can use as a reference sheet throughout the rest of the prepwork. Through creating this "Cheat Sheet" you will practice the following skills:

1. Set up a document using `html`, `head`, `title`, and `body` tags
2. Organize content using html tags, including `headers` , `p`, `li`, `ol`, `ul`, `a`, `em`, `strong`, `div`, `span`, and `br`
3. Create a hyperlink to another page or a specific spot on a page
4. Create and clone a GitHub repository, and stage, commit and push your changes

## Getting Started

To begin this lesson, you will need to:

- Create and clone a new repository on GitHub
- Create an HTML file within that project, and open it with your browser
- Set up the basic HTML structure, including the `html`, `head`, `title`, and `body` tags
- Stage, commit, and push your changes to the repository on GitHub to make sure everything is set up properly.

If you need to review how to do any of these tasks, you can follow the steps in the "Hello HTML" lesson that you've already completed. You can name your repository "html-tags-cheat-sheet", and make sure you create it as a private repository. You can name your HTML file "html-tags-cheat-sheet.html", and your title can be "HTML Tags Cheat Sheet".

Once your HTML file has been successfully pushed to the remote GitHub repository, and you can see your title showing up in your browser tab, you are ready to move on and create your Cheat Sheet.

## Adding Content

For each of the following sections, you will add HTML code to practice using each element. Then, you will add some information explaining the HTML elements you used to create each section. Feel free to add additional details for each element as you go. It is important to type out the code yourself at each step, so you can get more familiar with the HTML syntax and develop muscle memory. Do not copy and paste the code!

## Headings

Headings come in different levels: `h1` for the top-level heading, `h2` for the top sub-heading, `h3` for the next sub-heading. Importantly, every page should have one, and only one `h1` tag. Google's web-crawlers will search for the `h1` on each page to label the search result. If they don't find one, you will be penalized with lower search rankings.

Add a heading with the title of the page and a subheading with the name of this tag to your reference sheet.

```html
<!DOCTYPE html>
<html>
  <head>
    <title>HTML Tags Cheat Sheet</title>
  </head>
  <body>
    <h1>HTML Tags Cheat Sheet</h1>

    <h2>Headings</h2>
  </body>
</html>
```

## Paragraphs

It will be helpful to add notes to your reference sheet. Paragraphs of long-form text containing complete sentences go in the `p` (paragraph) tag.

Add a one-paragraph description to help you remember how headings and paragraphs work.

```html
<!DOCTYPE html>
<html>
  <head>
    <title>My HTML Cheat Sheet</title>
  </head>
  <body>
    <h1>My HTML Cheat Sheet</h1>

    <h2>Headings</h2>
    <p>
      Headings from `h1` to `h6` identify blocks and sections. Every page must
      have one `h1`.
    </p>

    <h2>Paragraphs</h2>
    <p>Paragraphs of text go in `p` tags.</p>
  </body>
</html>
```

## Creating some lists

There are two important types of lists in HTML:

- unordered lists (bullet lists)
- ordered lists (numbered lists).

## The unordered list

Create a new heading for lists. Then, create an unordered list element (`ul`). Add two list item elements as children of the unordered list element with the two list types and their tags. Add a paragraph below to remind yourself how to list the items.

```html
<html>
  <body>
    <h2>Lists</h2>
    <h3>Unordered Lists</h3>
    <p>
      Unordered lists are marked with bullet points and go in `ul` tags. Each
      list item goes in an `li` tag.
    </p>
    <h4>Types of lists:</h4>
    <ul>
      <li>Unordered lists (`ul`)</li>
      <li>Ordered lists (`ol`)</li>
    </ul>
  </body>
</html>
```

The ordered list
Next is the ordered list (`ol`). Add a numbered list containing Polya's problem solving framework.

```html
<html>
  <body>
    <h2>Lists</h2>
    <h3>Unordered Lists</h3>
    <p>
      Unordered lists are marked with bullet points and go in `ul` tags. Each
      list item goes in an `li` tag.
    </p>
    <h4>Types of lists:</h4>
    <ul>
      <li>Unordered lists (`ul`)</li>
      <li>Ordered lists (`ol`)</li>
    </ul>

    <h3>Ordered Lists</h3>
    <p>
      Ordered lists are numbered and go in `ol` tags. Each list item goes in an
      `li` tag.
    </p>
    <h4>Polya's Problem Solving Framework</h4>
    <ol>
      <li>Understand the problem</li>
      <li>Come up with a plan</li>
      <li>Carry out the plan</li>
      <li>Go back and improve your solution</li>
    </ol>
  </body>
</html>
```

Note that the ordered list and the unordered list both use the common list item element to provide the structure to each list. The browser then determines to show each with either a bullet or a number depending on the type of enclosing list.

## Anchors and Links

People navigate between Web pages by clicking on links. Now, you think you'd use the link element to do that. NOPE! SURPRISE! GOTCHA! That's not what you use. Instead, you use an anchor element (`a`). According to HTML for Dummies, "An anchor element is called an anchor because web designers can use it to "anchor" a URL to some text on a web page."

The anchor element uses the same attributes as the link element, primarily relying on the "href" attribute to point where the link goes. After the lists, add a new `h2` element that describes the section, add a paragraph that contains some text about how links work, and then, in the paragraph, add an anchor element with an "href" attribute that points to DuckDuckGo with the content "Go to DuckDuckGo to search for more information."

```html
<html>
  <body>
    <h2>Anchors (i.e. links)</h2>
    <p>
      Anchor tags create links to other pages. The URL goes in the `href`
      attribute.
      <a href="https://duckduckgo.com">
        Go to DuckDuckGo to search for more information.
      </a>
    </p>
    <p>
      Setting `target="_blank"` will open the link in a new window. See
      <a
        href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a"
        target="_blank"
      >
        MDN
      </a>
      for more details.
    </p>
  </body>
</html>
```

Refresh your page and click the DuckDuckGo link, then try the MDN link. What's different about them?

Now, let's explore how to use the anchor tag to navigate to a different location on the current HTML page. First, you will need the "id" attribute of the element you are trying to navigate to. For example, if you want to navigate back to the top of the HTML page, you can attach an "id" attribute to the `h1` element.

```html
<html>
  <body>
    <h1 id="top-of-page">My HTML Cheat Sheet</h1>

    <!-- code continues below -->
  </body>
</html>
```

Next, you can use an `a` tag with an "href" attribute to navigate to the `h1` element at the top of the page. Add the following code at the bottom of the page, right underneath your other anchor elements.

```html
<html>
  <body>
    <p>
      Anchor tags can also create links to a new location on the same page.
      Instead of putting a URL goes in the "href" attribute, just use the "id"
      of the element you want to navigate to. This allows you to
      <a href="#top-of-page"> Jump to the top of the page. </a>
    </p>
  </body>
</html>
```

Now try clicking on the "Jump to the top of the page" link. Did you navigate to the top of the page?

## Text Emphasis with `em` and `strong`

Create a new `h2` heading for "Text Emphasis". Under this heading, create two `h3` sub-headings with the text "Italic" in one and "Bold" in another. Then add descriptions under each sub-heading to explain which HTML tags to use for italic and bold text.

```html
<html>
  <body>
    <h2>Text Emphasis</h2>
    <h3>Italic</h3>
    <em>
      The `em` element adds extra emphasis to the text within the opening and
      closing tags. This shows up as italic text in most browsers.
    </em>
    <h3>Bold</h3>
    <strong>
      You can also use the `strong` element to emphasize text. This shows up as
      bold text in most browsers.
    </strong>
  </body>
</html>
```

## Organizing Content with `div`, `span`, `and` br

The `div`, `span`, and `br` elements are all useful for grouping similar elements together, and for separating one group of content from another.

The `div` element is the most generic type of container for other elements. It does not apply any formatting or styling to the content within it. As a block element, two `div` elements will have a line break between them.

The `span` element has a similar purpose to the `div` element, but behaves slightly differently. As an inline element, there will not be a line break between `span` elements.

Add the following code to the bottom of your file to show the difference between `div` and `span` elements.

```html
<html>
  <body>
    <h2>Organizing Content with `div` and `span`</h2>
    <h3>`div`</h3>
    <p>
      The `div` element is a block element, so each `div` will show up on a new
      line.
    </p>
    <div>1st div</div>
    <div>2nd div</div>
    <div>3rd div</div>
    <h3>`span`</h3>
    <p>
      The `span` element is an inline element, so there will be no line break
      between each `span`.
    </p>
    <span>1st span</span>
    <span>2nd span</span>
    <span>3rd span</span>
  </body>
</html>
```

When you need a line break in your non-paragraph text, you can use the break (`br`) tag. This can be helpful when you are writing a Haiku poem to help you remember your favorite HTML tags. Add the following code, using the `br` tag between each line. Replace the text on each line with your own!

```html
<html>
  <body>
    <h2>Breaking text using the `br` tag</h2>
    <p>
      Replace with Haiku line 1 (5 syllables)<br />
      Replace with Haiku line 2 (7 syllables)<br />
      Replace with Haiku line 3 (5 syllables)<br />
    </p>
  </body>
</html>
```

## Bonus: Add Some Finishing Touches

Now that you have a basic HTML Cheat Sheet, it's time to polish it up by adding a "Table of Contents" to the top, with anchor elements to jump directly to each section of the Cheat Sheet. Remember to add an "id" attribute to each `h2` heading, and then use those ids within the "href" attribute for each item in the Table of Contents.

## Push your project to GitHub

Now that you have completed this exercise, it is time to stage, commit, and push your updates to the remote repository on GitHub. Need a refresher on how to do this? Just look back at the "Hello HTML" lesson to review those commands.

## What you've learned

In this lesson, you created an HTML Tags Cheat Sheet to practice using some of the most common tags for formatting and organizing text content. You also practiced creating hyperlinks to navigate to another page or a specific spot on the same page. Finally, you reviewed how to create and clone a GitHub repository, and practiced pushing your completed code to GitHub.

_Note: After completing this project please submit using the Submit File button above to mark this project complete._
