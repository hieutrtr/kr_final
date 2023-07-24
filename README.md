# Frontend Setup
### 1. Install Node.js and npm:

* Node.js and npm are required to run the frontend application.
* You can download and install Node.js from the official website: https://nodejs.org/

### 2. Install project dependencies:

* Open a terminal inside the "frontend" directory of your project.
* Run the following command to install the required npm packages:

```
npm install
```

### 3. Start the frontend server:

* After the installation is complete, run the following command to start the frontend development server:
```
npm start
```
* This will launch the frontend application, and you can access it in your web browser at http://localhost:3000 or the specified port.

# Backend Setup
### 1. Create a virtual environment (optional but recommended):

* It's a good practice to create a virtual environment to isolate the Python packages for your backend.
* Open a terminal inside the "backend" directory of your project.
* Create a virtual environment using the following command (you can choose a different name for the environment if you prefer):

```
python3 -m venv venv
```

### 2. Activate the virtual environment (optional but recommended):

* If you created a virtual environment, you need to activate it before installing the project dependencies and running the backend server.
* On Windows, run:
```
venv\Scripts\activate
```

* On macOS and Linux, run:
```
source venv/bin/activate
```

### 3. Install project dependencies:

* After activating the virtual environment (if you created one), run the following command to install the required Python packages:
```
pip3 install -r requirements.txt
```

### 4. Start the backend server:

* Once the installation is complete, run the following command to start the backend server:
```
uvicorn main:app --reload
```

* This will launch the backend server, and it will be accessible at http://localhost:8000 or the specified port.

Now, both the frontend and backend of your project should be set up and running. You can interact with the frontend application and communicate with the backend API as needed.