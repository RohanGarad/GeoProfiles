# GeoProfiles (Profile Map Viewer)

A web application built with **React** that allows users to view a list of profiles and explore their addresses on an interactive **Google Map**. It includes an **admin panel** for managing profiles.

## Features

- 📌 **Profile Display** – View a list of profiles with names, photos, and descriptions.
- 🗺️ **Interactive Map** – Click "Summary" to see the profile's location on a map.
- 🔍 **Search & Filter** – Easily find profiles by name or location.
- 📊 **Admin Panel** – Add, edit, or delete profiles.
- 📱 **Responsive Design** – Works on desktops, tablets, and mobile devices.
- ⚠️ **Error Handling** – Graceful handling of invalid addresses.
- ⏳ **Loading Indicators** – Displays loading feedback while fetching data.

## Tech Stack

- **Frontend**: React, Google Maps API, Tailwind CSS
- **Backend**: Node.js, Express.js, MongoDB
- **State Management**: React Context API
- **Routing**: React Router

## Installation & Setup

### 1️⃣ Clone the repository

```sh
git clone https://github.com/your-repo.git
cd your-repo
```

### 2️⃣ Install dependencies

#### Frontend

```sh
cd frontend
npm install
```

#### Backend

```sh
cd backend
npm install
```

### 3️⃣ Start the application

#### Start Frontend

```sh
npm run dev
```

Frontend runs at: [http://localhost:5173/](http://localhost:5173/)

#### Start Backend

```sh
npx nodemon
```

Backend runs at: `http://localhost:5000/`

### 4️⃣ Access Admin Panel

Navigate to: [http://localhost:5173/admin](http://localhost:5173/admin)

## Environment Variables

Create a `.env` file in the root directory and add:

```sh
VITE_GOOGLE_MAPS_API_KEY=your_api_key_here
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

## API Endpoints

- `GET /api/profiles` – Fetch all profiles
- `POST /api/profiles` – Add a new profile (Admin only)
- `PUT /api/profiles/:id` – Update a profile (Admin only)
- `DELETE /api/profiles/:id` – Delete a profile (Admin only)

## Future Enhancements

- 🌍 **Alternative Map Providers** – Support for Mapbox.
- 🔐 **Authentication** – Secure admin panel with login.

---

🚀 **Developed with React, Express, and MongoDB.** Happy coding! 🎯

