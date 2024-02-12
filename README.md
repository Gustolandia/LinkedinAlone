# LinkedIn Clone Frontend

This project is a clone of LinkedIn, focusing on the frontend aspects developed with React. It features authentication/registration, a feed of posts with images, and user experience enhancements similar to the original LinkedIn platform.

## Features

- **Authentication/Registration:** Secure login and signup functionality for users.
- **Feed Posts:** Users can view a feed of posts, including images, mimicking the LinkedIn experience.
- **User Experience:** Tailored UI/UX with responsive design for a seamless experience across devices.

## Getting Started

### Prerequisites

- Node.js (v16.1 or higher recommended)
- npm (comes with Node.js)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/Gustolandia/LinkedinAlone.git
cd LinkedinAlone
```

2. Install the dependencies:

```bash
npm install
```

3. Set up the environment variables:

Create a `.env` file in the root of your project and add the following line to it, replacing the value with the actual URL of your backend API if different:

```plaintext
REACT_APP_API_URL="https://gustavo-pedro-ricou-linkedin-backend-default.glb.edgio.link"
```

This will ensure that your React application can communicate with the backend service effectively.

### Running the Application Locally

To run the application on your local machine, follow these steps:

1. Start the development server:

```bash
npm run dev
```

This command will start the local development server provided by the `react-scripts` package. You should see the application open in your default web browser. If it doesn't open automatically, you can visit `http://localhost:3000` in your browser to view the application.

### Building for Production

When you're ready to build a production version of your application, run:

```bash
npm run build
```

This command will create a build directory with a production build of your app. Inside the build directory, you'll find all the static files optimized for deployment.

### Deployment

After building your application, you can deploy it using Edgio by running the following command:

```bash
npm run edgio:deploy
```

This will deploy your production build to the Edgio network, ensuring fast delivery and high availability across the globe. Make sure you have configured your Edgio project settings accordingly.

## Scripts Explained

In the `package.json`, you will find several scripts that you can use:

- `edgio:dev`: Starts the local development server using Edgio for testing Edge-side functionalities.
- `edgio:build`: Builds your application with Edgio optimizations for production.
- `edgio:deploy`: Deploys your build to Edgio, making it accessible online.
- `dev`: Alias for `react-scripts start`, starts the React development server.
- `start`: Serves your build directory on a local static server.
- `build`: Creates an optimized production build of your React app.
- `test`: Runs the test watcher in an interactive mode.
- `eject`: Removes the single build dependency from your project.

## Technologies Used

- React for the frontend framework.
- Bootstrap and React Bootstrap for styling and components.
- React Router for navigation and routing.
- Edgio for deployment and edge-side enhancements.

## Contributing

Contributions are welcome!

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Thanks to everyone who has contributed to this project!
- Special thanks to the React community for providing such a powerful and flexible framework.

---

For more information on how to use React and Edgio, please refer to their respective documentation.



