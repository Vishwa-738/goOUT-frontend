>>>### GOOUT - Frontend UI

The user interface for the GoOUT travel and expense settlement application. Built by Pod 1.

GoOUT is a comprehensive travel management platform designed to streamline group coordination, financial settlement, and trip organization. This repository houses the React-based client application, engineered for high performance, secure data handling, and an intuitive user experience.

>>Core Features.

- Secure Login/Registration: JWT integration with the Spring Boot backend.
- Trip Dashboard: Organize trips into "Organizing" and "Joined" categories.
- Interactive Feeds: Scroll through public trips and user posts.
- Dynamic Settlement: View auto-calculated trip expenses and who owes whom.
- Future Roadmaps: Embedded preview UI for upcoming features like the Live Group Chat and localized weather integration.

>>Architecture & Logical Flows
This frontend is designed to handle complex data structures and strict backend security requirements. Key logical implementations include:

1. Advanced Multipart Form Handling (Trip Creation)
To support simultaneous JSON data and image file uploads, the application utilizes a custom FormData architecture.

- JSON Blob Wrapping: Text data is rigorously formatted into a Blob with an application/json type to satisfy strict Spring Boot @RequestPart requirements.

- Axios Interceptor Bypass: The application uses targeted transformRequest rules during POST requests to dynamically strip global application/json headers, allowing the browser to natively calculate and append secure multipart/form-data boundaries.

2. Dynamic Data Sorting (My Trips Dashboard)

The dashboard employs a robust, client-side sorting algorithm to categorize fetched trips without relying on brittle backend booleans.
- It securely parses the logged-in user's identity from localStorage.
- It maps over complex backend TripResponseDto payloads, matching the user's local ID against the trip's organizerId to accurately divide the feed into Organizing and Joined categories, complete with dynamic fallback images and role-based action buttons.

3. Member Request Management

Organizers have access to an administrative modal to manage pending join requests.

- The UI handles asynchronous PUT requests to dynamically update traveler statuses (e.g., ACCEPTED or REJECTED).
- It utilizes optimistic UI rendering to instantly remove processed requests from the list without requiring a full page reload.


>>Tech Stack

- Framework: React (Vite)
- Routing: React Router DOM
- API Calls: Axios (configured with global instances and custom header transformations)
- Icons: Lucide React (for lightweight, scalable UI iconography)
- Styling: Modern Inline CSS and scoped component design


>>How to Run Locally

1. Prerequisites
 - Node.js (v18+)
 - npm or yarn

2. Environment Variables
Create a .env file in the root of the project and point it to the Spring Boot backend:
Code snippet
VITE_API_BASE_URL=http://localhost:8080

3. Start the App
Navigate to the root directory and run:
Bash
npm install
npm run dev


---

## Team & Contributions

**[Vishwa]**   | Frontend Lead | Client architecture, React (Vite) UI/UX orchestration, Axios payload management, and state hydration. 

**[Methsara]** | Backend Lead | Spring Boot REST API architecture, Database management, DTO structure, and secure endpoint delivery. 

**[Viranda]**  | [Expence Tracker]

**[Bineth]**   | [Profile ] 

**[Tharidu]**  | [UI Design Part]

**[Chamodh]**  | [Create trip]

---

The frontend will start on http://localhost:5173.

> Note: System Requirement: This client interface operates in tandem with the core system API. The GOOUT Backend Repository must be actively running on the designated base URL for full data hydration and functionality

