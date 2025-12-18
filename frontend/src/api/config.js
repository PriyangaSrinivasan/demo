// export const API_AUTH = import.meta.env.VITE_API_AUTH;
// export const API_BLOG = import.meta.env.VITE_API_BLOG;
// export const API_COMMENT = import.meta.env.VITE_API_COMMENT;
// export const API_LIKE = import.meta.env.VITE_API_LIKE;

// // src/api/config.js
// // export const GOOGLE_CLIENT_ID = "337609336290-fk909vnl13jhip6o3ipo5rjr8roi8sol.apps.googleusercontent.com";


// export const GOOGLE_CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID;

// Base backend URL
export const API_URL = import.meta.env.VITE_API_URL;

// API endpoints
export const API_AUTH = `${API_URL}/api/auth`;
export const API_BLOG = `${API_URL}/api/blogs`;
export const API_COMMENT = `${API_URL}/api/comments`;
export const API_LIKE = `${API_URL}/api/likes`;

// Google OAuth
export const GOOGLE_CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID;
