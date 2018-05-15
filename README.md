# Get Your Guide Home Test

## Getting Started

This project was built from scratch, with almost zero configuation. The project has some loaders (sass, hot-reload, vue-single-file-components, etc) to get the it working properly.

## Installing
The only dependency to run the project is NodeJS. If it is not installed, please download it here https://nodejs.org/en/download.

After download and install NodeJS, go to the root folder and run the following command to install all node packages:

```
$ npm install
```

## Scrips

### Linting
A basic linter was configured in order to help avoid errors, keep code quality and .vue files well organized. The following script will show all errors (if there's any).
```
$ npm run lint
```
And to fix these errors, we can use the following command:
```
$ npm run lint:fix
```
### Running locally
The following command will start webpack-dev-server at http://localhost:8080/
```
npm run dev
```

### Build
This command creates a simple javascript transpiled bundle with all necessary assets.
```
npm run build
```

## Technologies

### Webpack v4
Webpack is a module bundler. Its main purpose is to bundle JavaScript files for usage in a browser, yet it is also capable of transforming, bundling, or packaging just about any resource or asset. Webpack v4 was recently released and already has a good feedback from the community. It also comer with lots of new features, including helping to create webpack with no configuration.

### SASS
Sass is a CSS preprocessor, which adds special features such as variables, nested rules and mixins into regular CSS.

### Vue 2
Vue JS is an awesome JavaScript Framework for building Frontend Applications. In my opinion, it mixes the best of Angular and React. Vue also has a great documentation and it provides a fast learning curve. No need to mention that Vue is gaining popularity every day because of its simplicity and power.

## Project Structure
I tried to keep the files as minimal and with single responsability as possible. All the components follows the Atomic design (by Brad Frost) concept. The folder structure is as follow:

```
.
├── build                   # Webpack configuration files
├── dist                    # Compiled files 
├── src                     # Source files 
│   ├── components          # Components that will be part of a page
│   ├── pages               # Pages that import  reusable components
│   ├── router              # Contains the routes of the project
│   └── sass                # Sass files such as variables, animations and reusable css classes 
│   └── services            # Services that connect with the API (in this case there is a function that simulates an API call
│   └── static               # Static files such as data.json
│   └── utils                #  Utilities
└── README.md
```

## User Experience
The project is divided into two main features: Search for an attraction and see the results.
For the first feature, it's implemented one page with just one text input that guides the user to its unique action: search for an attraction. It is minimalist, intuitive and straightforward.
The second one is the result list. When the search gets any result from the "backend" (mocked data) it is shown in cards with the information. Also, all the special offers are shown first and have a highlight. Althought showing results is important, it is also quite important to give a feedback when there isn't any results to show. In order to give to our user a meaningful feedback, it is shown a list of top attractions that might be of interesting for the user.