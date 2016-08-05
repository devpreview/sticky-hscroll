# Sticky horizontal scroll jQuery plugin

## Usage

    $('body').stickyHScroll();

### With Bootstrap responsive table

    <div class="table-responsive sticky-hscroll">
      <table class="table">
        ...
      </table>
    </div>

### With other
    <style>
      .sticky-hscroll {
        overflow-x: auto;
      }
    </style>
    
    <div class="sticky-hscroll">
      <div>
        <p>Lorem Ipsum is simply...</p>
      </div>
    </div>

## Demo
[Demo](https://devpreview.github.io/sticky-hscroll/)

## Install

If you're using npm to manage your frontend dependencies you can install this plugin by just issuing this command:

    npm install --save sticky-hscroll

Otherwise you can just download `src/sticky-hscroll.js`, put it wherever you usually put JavaScripts in your project and include it on pages where you want to have sticky horizontal scrolls:

    <script src="path/to/javascripts/sticky-hscroll.js" type="text/javascript"></script>

Enjoy!
