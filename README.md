selectize-infinite_scroll
=========================

Infinite scrolling plugin for Selectize (selectize.js).

Example:
--------
```js
$('select').selectize({'plugins': {'infinite_scroll': {'scrollRatio': 0.85, 'scrollStep': 20}}});
```

Options:
--------
| Option      | Description                                                                                    |
| ----------- | ---------------------------------------------------------------------------------------------- |
| scrollRatio | Scroll position ratio to load more content (e.g. 0.85 will load more content when 85% scrolled |
| scrollStep  | Number of additional items to load when scrollRatio is reached                                 |
