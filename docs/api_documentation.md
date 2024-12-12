### API Specification for Medical Platform

This API specification integrates Razorpay for payment processing and Flask for AI/ML model integration, following the system architecture and ER diagram.

---

### **General Information**

- **Base URL**: `https://api.medplatform.com/v1`
- **Authentication**: OAuth2 and JWT tokens
- **Response Format**: JSON
- **Version**: v1.0

---

### **Endpoints**

#### **1. User Management**

##### **1.1 Register User**

- **URL**: `/users/register`
- **Method**: POST
- **Description**: Register a new user.
- **Request Body**:
  ```json
  {
    "name": "string",
    "email": "string",
    "password": "string",
    "gender": "string",
    "age": "integer",
    "weight": "float",
    "height": "float"
  }
  ```
- **Response**:
  ```json
  {
    "user_id": "integer",
    "message": "User registered successfully"
  }
  ```

##### **1.2 Login User**

- **URL**: `/users/login`
- **Method**: POST
- **Description**: Authenticate user and generate JWT token.
- **Request Body**:
  ```json
  {
    "email": "string",
    "password": "string"
  }
  ```
- **Response**:
  ```json
  {
    "token": "string",
    "message": "Login successful"
  }
  ```

##### **1.3 Get User Profile**

- **URL**: `/users/{user_id}`
- **Method**: GET
- **Description**: Retrieve user profile details.
- **Response**:
  ```json
  {
    "user_id": "integer",
    "name": "string",
    "email": "string",
    "gender": "string",
    "age": "integer",
    "weight": "float",
    "height": "float",
    "past_medical_history": "string",
    "current_medications": "string"
  }
  ```

---

#### **2. Appointment Management**

##### **2.1 Book Appointment**

- **URL**: `/appointments`
- **Method**: POST
- **Description**: Book an appointment with a doctor.
- **Request Body**:
  ```json
  {
    "user_id": "integer",
    "doctor_id": "integer",
    "appointment_date": "string (ISO 8601)",
    "symptoms": "string"
  }
  ```
- **Response**:
  ```json
  {
    "appointment_id": "integer",
    "status": "Pending",
    "message": "Appointment booked successfully"
  }
  ```

##### **2.2 Get Appointments**

- **URL**: `/appointments?user_id={user_id}`
- **Method**: GET
- **Description**: Retrieve appointments for a user.
- **Response**:
  ```json
  [
    {
      "appointment_id": "integer",
      "doctor_id": "integer",
      "appointment_date": "string",
      "status": "string"
    }
  ]
  ```

---

#### **3. Payments**

##### **3.1 Initiate Payment**

- **URL**: `/payments/initiate`
- **Method**: POST
- **Description**: Create a Razorpay order for payment.
- **Request Body**:
  ```json
  {
    "user_id": "integer",
    "amount": "float",
    "currency": "string",
    "purpose": "string"
  }
  ```
- **Response**:
  ```json
  {
    "order_id": "string",
    "payment_link": "string",
    "status": "Created"
  }
  ```

##### **3.2 Verify Payment**

- **URL**: `/payments/verify`
- **Method**: POST
- **Description**: Verify the payment status from Razorpay.
- **Request Body**:
  ```json
  {
    "order_id": "string",
    "payment_id": "string",
    "signature": "string"
  }
  ```
- **Response**:
  ```json
  {
    "status": "Success",
    "message": "Payment verified successfully"
  }
  ```

---

#### **4. AI/ML Services**

##### **4.1 Predict Illness**

- **URL**: `/ai/diagnosis`
- **Method**: POST
- **Description**: Predict illness based on user symptoms.
- **Request Body**:
  ```json
  {
    "user_id": "integer",
    "symptoms": "string"
  }
  ```
- **Response**:
  ```json
  {
    "diagnosis": "string",
    "recommended_precautions": "string",
    "accuracy": "float"
  }
  ```

##### **4.2 Recommend Doctors**

- **URL**: `/ai/recommend-doctors`
- **Method**: POST
- **Description**: Recommend doctors based on user symptoms.
- **Request Body**:
  ```json
  {
    "symptoms": "string"
  }
  ```
- **Response**:
  ```json
  [
    {
      "doctor_id": "integer",
      "name": "string",
      "specialization": "string",
      "experience_years": "integer",
      "consultation_fee": "float"
    }
  ]
  ```

---

### **Error Codes**

- `400 Bad Request`: Invalid input.
- `401 Unauthorized`: Authentication failed.
- `404 Not Found`: Resource not found.
- `500 Internal Server Error`: Server error.

---
