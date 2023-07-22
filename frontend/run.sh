curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash
nvm install node

mkdir my-react-project
cd my-react-project

npx create-react-app .

npm install gridcss material-design-icons

touch src/App.css src/TopMenu.css src/SideBar.css src/ContentArea.css

npm start
