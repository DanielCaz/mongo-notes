# Simple Notes App with Next.js 13 and MongoDB Integration

This is a simple notes app built using Next.js 13 and MongoDB, showcasing how to implement MongoDB into the new Next.js 13 app directory. The app provides basic CRUD (Create, Read, Update, Delete) functionality for managing notes.

## Installation

1. Clone this repository to your local machine:

```bash
git clone https://github.com/DanielCaz/mongo-notes.git
```

2. Change into the project directory:

```bash
cd mongo-notes
```

3. Install the dependencies:

```bash
npm install
```

4. Set up your MongoDB connection:

   - Make sure your MongoDB instance is running.
   - Create a `.env.local` file and add the `MONGODB_URI` variable to point to your MongoDB database.
   - Also add the `API_URL` variable to point to the local API endpoint.
   - For example for a local MongoDB instance, your `.env.local` file would look something like this:

   ```bash
   MONGODB_URI=mongodb://localhost:27017/notes
   API_URL=http://localhost:3000/api
   ```

## Usage

To start the development server, run the following command:

```bash
npm run dev
```

The app will be accessible at [http://localhost:3000](http://localhost:3000) in your web browser.

## API Endpoints

The app provides the following API endpoints for managing notes:

- `GET /api/notes`: Get a list of all notes.
- `GET /api/notes/:id`: Get details of a specific note.
- `POST /api/notes`: Create a new note.
- `PUT /api/notes/:id`: Update the content of an existing note.
- `DELETE /api/notes/:id`: Delete a note from the database.
