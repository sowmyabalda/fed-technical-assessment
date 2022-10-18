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

Lets ensure the server is running by checking to see if we can fetch a product:

  Visit http://localhost:3000/api/product

  If you see json data OR a message: "Product not found, please try again..." you're ready to go!
  (More on why theres 2 possible response later)

### 1. Coding Assessment

Calculate the diameter of the sun using a binary tree and bubble sort...that was a joke!

### 2. Coding Assessment

Develop a simple product detail page following the below requirements.  Please treat this as a paired programming collaboration and feel free to use Google if/when necessary. 

1. Fetch product data from `/api/product` endpoint and handle any errors.  *Hint: you will randomly encounter error responses as previously mentioned.

2. Using the product data render the following details:

   - Primary image
   - Title
   - SKU

3. Render two lists of `variation` values classified by type (Size and Finish)

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
