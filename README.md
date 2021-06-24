# Project Overview

The Quikly platform uses GraphQL and React to load and display information as part of our marketing campaigns. For this exercise, we’d like to set up a form that allows a user to enter a search term and see results from an API.

You may choose to work on one of the following two scenarios:

- Option 1. Use the Github API to search and display an organization. [Example](https://projects.invisionapp.com/share/8C1198G2H29T#/screens/454313416)

- Option 2. Use the Shopify API to search for a product and display the results. [Example](https://projects.invisionapp.com/share/8C1198G2H29T#/screens/454313418)

# Getting Started
To get started, you'll probably want to clone this repository and then run `yarn install` to load in the dependencies. Then run `yarn start` to run the app in development mode. (See below for more useful commands.)

GraphQL is new to a lot of developers, so you may want to check out [Shopify's summary](https://shopify.dev/concepts/graphql/benefits) for some additional context.

For this exercise, you'll want to read up on [Apollo hooks](https://www.apollographql.com/docs/react/api/react/hooks/) to learn about ways to perform queries in your component. For specific API details, check out the sections below.

## Shopify GraphQL API
[Shopify GraphQL API](https://shopify.dev/concepts/graphql)

If you choose to use the Shopify API, you can use Quikly's API token provided to you. Rename the `.env.example` file to `.env` and paste in the token as the value of `REACT_APP_SHOPIFY_ACCESS_TOKEN`.

Once you've added the token, you should be all set to start querying the Shopify API. Edit the `index.js` file to pull in the appropriate apollo client. Then, check out the API reference and write a query to search for products using the search term provided in your form. Hint: the [Explorer](https://shopify.dev/tools/graphiql-storefront-api) is a great way to dive deeper into the Storefront API to help you write your query.
## Github GraphQL API
[GitHub GraphQL API](https://docs.github.com/en/graphql)

If you choose to use the Github API, you'll need to create a personal access token. Detailed instructions on how to do that can be found [here](https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token). You probably want to request the following scopes:

    user
    public_repo
    repo
    repo_deployment
    repo:status
    read:repo_hook
    read:org
    read:public_key
    read:gpg_key

Once you have your personal access token, rename the `.env.example` file to `.env` and paste in your personal access token as the value of `REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN`. As a rule we never want to commit API keys into git!

Once you have added your personal access token you should be all set to start querying the Github API. Edit the `index.js` file to pull in the appropriate apollo client. Then, check out the API reference and run a query to fetch data about an "Organization" using the search term provided in your form as the organizations 'login` value. Hint: the [Explorer](https://docs.github.com/en/graphql/overview/explorer) is a great way to dive deeper into their API and how to set up your query.

## Design
It’s up to you if you want to match the look and feel of the prototype, or put your own twist on it. As a front-end developer, it will be your job to take a design and bring it to life, so we’d like to get a sense of how you like to write your CSS and how your components work, but we won’t be judging the visual design. Feel free to use your own CSS or the following UI libraries, or others not listed here:

[Tailwind CSS](https://tailwindcss.com/docs/guides/create-react-app)
[Material-UI](https://material-ui.com)

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
