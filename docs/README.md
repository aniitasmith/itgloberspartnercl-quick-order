📢 Use this project, [contribute](https://github.com/{OrganizationName}/{AppName}) to it or open issues to help evolve it using [Store Discussion](https://github.com/vtex-apps/store-discussion).

# Quick order

<!-- DOCS-IGNORE:start -->
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-0-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->
<!-- DOCS-IGNORE:end -->

The quick-order component allows you to go to the checkout directly to complete the purchase just by entering the SKU ID.

<img width="508" alt="image" src="https://user-images.githubusercontent.com/66226368/219812940-79b2f29b-ad88-467b-b599-4a1aa8758907.png">

## Configuration 

1. Import the  Quick order's app to your theme's dependencies in the manifest.json, for example:
```json
  dependencies: {
    "{vendor}.quick-order": "0.x"
  }
 ```
 
 2. Add the Quick order block to the store-theme. For example:
```json
  "flex-layout.col#category-results-filter-department-desktop": {
    "title": "Container-Filter-navigator",
    "children": [
      "filter-navigator.v3",
      "quick-order",
      "department-search"
    ]
  }
   ```

## Customization

|CSS HANDLES |
| ----------- | 
|`  contaner_quick-order `|
|`  text_quick-order `|
|`   form_quick-order `|
|` container_input-form `|
|`   input-form `|
|`   button_submit `|
|`  text_input-form `|
|`    container_button-submit `|

<!-- DOCS-IGNORE:start -->

## Contributors ✨

Thanks goes to these wonderful people:

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind are welcome!

<!-- DOCS-IGNORE:end -->

---- 

Check out some documentation models that are already live: 
- [Breadcrumb](https://github.com/vtex-apps/breadcrumb)
- [Image](https://vtex.io/docs/components/general/vtex.store-components/image)
- [Condition Layout](https://vtex.io/docs/components/all/vtex.condition-layout@1.1.6/)
- [Add To Cart Button](https://vtex.io/docs/components/content-blocks/vtex.add-to-cart-button@0.9.0/)
- [Store Form](https://vtex.io/docs/components/all/vtex.store-form@0.3.4/)
