# Medical-Ally

Medical-Ally is a comprehensive medical platform designed to assist users with illness diagnosis, doctor recommendations, online doctor interactions, medicine and pathology test ordering, and efficient data management. This platform leverages advanced AI/ML models to provide accurate and user-friendly solutions for medical needs.

## Key Features

### 1. User-Centric Features:

- **Illness Diagnosis:** Diagnose illnesses based on user-provided symptoms, medical history, and other inputs.
- **Doctor Recommendations:** Get personalized doctor recommendations based on diagnosis.
- **Online Interaction:** Chat or video call with doctors for consultations.
- **Medicine and Test Ordering:** Order prescribed medicines and pathology tests online.
- **Chatbot Assistance:** A chatbot that explains pathological reports and medicines in native languages.
- **Community Forum:** Connect with other users in forums to share experiences and seek advice.

### 2. Doctor-Centric Features:

- **Patient Management:** View patient details, histories, and diagnoses.
- **Consultation Scheduling:** Schedule and manage appointments efficiently.
- **Dashboard:** A personalized dashboard to monitor tasks, appointments, and feedback.

### 3. Pathology-Centric Features:

- **Test Management:** Manage and track pathology tests ordered by users.
- **Result Uploading:** Upload test results directly to the platform for user access.

### 4. AI/ML Models:

- **Illness Diagnosis Model:** Predict illnesses with high accuracy.
- **Chatbot Models:** Perform OCR on pathological reports and use NLP for report analysis.

### 5. Shared Features:

- **Secure Authentication:** Role-based authentication for users, doctors, and pathology teams.
- **Multi-Interface Design:** Separate, intuitive interfaces for users, doctors, and pathology teams.
- **Data Security:** Robust security measures to protect user data.

## Repository Structure

The project follows a modular structure:

```
medical-platform/
├── backend/
├── frontend/
├── ml_models/
├── docs/
├── scripts/
└── README.md
```

### Backend

The backend handles API requests, authentication, and database interactions. It is built using **Python** and frameworks like **FastAPI**.

### Frontend

The frontend is developed using **React.js** and **MUI** to provide user-friendly and responsive interfaces.

### ML Models

AI/ML models are used for illness diagnosis and chatbot functionalities, including OCR and NLP tasks.

### Documentation

Detailed API documentation, database schemas, and system architecture diagrams are included.

### Scripts

Deployment and monitoring scripts to facilitate Docker/Kubernetes deployments and system health checks.

## Prerequisites

- **Backend:** Python 3.9+, FastAPI, PostgreSQL
- **Frontend:** Node.js, React.js, MUI
- **ML Models:** TensorFlow/PyTorch, Tesseract
- **Deployment:** Docker, Kubernetes

## Installation

### Clone the Repository

```bash
git clone https://github.com/Chetan559/medical-ally.git
cd medical-ally
```

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```
3. Run the server:
   ```bash
   uvicorn main:app --reload
   ```

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend/user
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```

### ML Models Setup

1. Navigate to the `ml_models` directory.
2. Install required dependencies:
   ```bash
   pip install -r requirements.txt
   ```

## Usage

- Access the user interface via the frontend URL.
- Use the API endpoints for backend functionality.
- Explore AI/ML capabilities for diagnosis and chatbot assistance.

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Added feature-name"
   ```
4. Push to the branch:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

Special thanks to the team behind Medical-Ally for their dedication and effort in building this platform.
