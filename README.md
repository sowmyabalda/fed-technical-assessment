# Technical Assessment

## Getting Started

First, fork the repo:
https://github.com/fveracoechea/fed-technical-assessment.git

Second, open the repo in preferred editor & install dependencies:

```bash
npm i
# or
yarn
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
```

### 1. Coding Assessment

Calculate the diameter of the sun using a binary tree and bubble sort...that was a joke!

### 2. Coding Assessment

Develop a simple product detail page following the next requirements:

1. Fetch product data from `/api/product` endpoint, and handle possible errors.

2. Using the product data render the following details:

   - Primary image
   - Title
   - SKU

3. Render two lists of variation values classified by type (Size and Finish)

4. The component should have 3 possible results:

   - Loading (initial)
     ![Loading](https://raw.githubusercontent.com/fveracoechea/fed-technical-assessment/main/pdp-loading.png)
   - Error
     ![Loading](https://raw.githubusercontent.com/fveracoechea/fed-technical-assessment/main/pdp-error.png)
   - Success
     ![Loading](https://raw.githubusercontent.com/fveracoechea/fed-technical-assessment/main/pdp-success.png)

5.  Open a PR with your updates!

Optional Tasks:
  Make it adaptable for mobile view.

### Things we are looking for:

- No npm installs
- Code optimizations and reusability
- Type safety
- The fewer re-renders the better
