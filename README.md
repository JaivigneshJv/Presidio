# Airbnb Clone  ![Vercel](https://therealsujitk-vercel-badge.vercel.app/?app=presidio)


This is a Airbnb clone built with ReactJS, MongoDB for database storage and authentication, and NodeJs for API details. The project also utilizes Tailwind CSS for toast messages, React Icons fs , multer for storage , React-router-dom for routing/navigation and more... The project uses Vite as a build tool and is hosted on Vercel and backend on Azure Web Services.

> Project is hosted on https://presidio-tau.vercel.app

> Backend API hosted on "https://presidio-task-backend.azurewebsites.net/test"
> 
## Table of Contents
- Getting Started
  - Prerequisites
  - Installation
  - Usage
- Features
- Built With
- Contributing
- License

## Getting Started
To get a local copy up and running follow these simple steps.

### Prerequisites
You should have Node.js and npm installed on your machine.

### Installation
1. Clone the repository:

```
git clone https://github.com/JaivigneshJv/Presidio
```

2. Install node packages:
```
yarn install
(or)
npm install
```

3. Create a .env file in the root directory of the project with the following variables:


> CLIENT
```
REACT_APP_BACKEND_URL = <YOUR_BACKEND_API_URL>
```

> BACKEND
```
MONGO_URL = <YOUR_MONGODB_CONNECTION_URL>
JWT_RANDOMKEY = <RANDOM_KEY_JWT_COOKIES>
```


Usage
To run the project locally, run the following command in the terminal:

```
yarn dev
(or)
npm run dev
```
This will start a local development server at http://localhost:5173.

To build the project for production, run the following command:

```
yarn build
(or)
npm run build
```
This will create a production-ready build in the `dist/` directory.

## Features
- User authentication system (signup, login, logout).
- able to view property listings with details like price, location,
and amenities.
- filter properties based on
location, date, and price range.
- Search functionality
- Add Listing from user
- View / Manage your Listing 
- Tailwind CSS

## Built With
- ReactJS
- MongoDB
- Node JS
- Express
- JWT
- Axios
- React-router-dom

## Contributing
Contributions are always welcome! If you have any ideas, bug reports, or pull requests, please feel free to open an issue or a pull request.

## License
This project is licensed under the MIT License - see the [LICENSE](https://github.com/JaivigneshJv/Presidio/blob/main/LICENSE) file for details.
