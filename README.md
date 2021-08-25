# Getting Started

Clone the template repository.

    git clone {REPO} ./app-name/
    cd ./app-name/

Set the app name.

    sed -i '' 's/{APP-NAME}/new-app-name/' package.json

Install node and the template dependencies.

    npm install

Start the development server.

    npm start

Files under the `src/` directory will be compiled into and served from a `dist/` directory.

# Dependencies

* TypeScript + JSX
    * Better experience than vanilla JavaScript
* React
    * Most supported and least opinionated
* Parcel
    * Fast builds and easy to set up