# Online Store API

## Description

The Online Store API is a RESTful API for managing an online store. The API supports CRUD operations for Customers, Products, and Orders, allowing for the creation, retrieval, updating, and deletion of data in a MongoDB using MONGOOSE Library.

## Table of Contents

- [Getting Started](#getting-started)
- [Installation](#installation)
- [Usage](#usage)
- [API Routes](#api-routes)
  - [Customer Routes](#customer-routes)
  - [Product Routes](#product-routes)
  - [Order Routes](#order-routes)
- [Sample Data](#sample-data)

## Getting Started

### Prerequisites

- Node.js
- MongoDB

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/yohannes57/SBA_MONGODB_APP.git
   ```
2. Navigate to the project directory:
   ```sh
   cd to your directory,where every you cloned it
   ```
3. Install dependencies:
   ```sh
   npm install
   ```

### Usage

1. Start MongoDB (if not already running):
   ```sh
   mongod
   ```
2. Run the application:
   ```sh
   npm start
   ```

The API will be accessible at `http://localhost:3000`.

## API Routes

### Customer Routes

- **Create a Customer**

  - **POST** `/customers`
  - Request body example:
    ```json
    {
      "name": "John Doe",
      "email": "john@example.com"
    }
    ```
  - Response example:
    ```json
    {
      "message": "Customer created successfully",
      "customer": { ... }
    }
    ```

- **Get All Customers**

  - **GET** `/customers`
  - Response example:
    ```json
    {
      "customers": [ ... ]
    }
    ```

- **Get Customer by ID**

  - **GET** `/customers/:id`
  - Response example:
    ```json
    {
      "customer": { ... }
    }
    ```

- **Update a Customer**

  - **PUT** `/customers/:id`
  - Request body example:
    ```json
    {
      "name": "John Doe",
      "email": "john.doe@example.com"
    }
    ```
  - Response example:
    ```json
    {
      "message": "Customer updated successfully",
      "customer": { ... }
    }
    ```

- **Delete a Customer**
  - **DELETE** `/customers/:id`
  - Response example:
    ```json
    {
      "message": "Customer deleted successfully"
    }
    ```

### Product Routes

- **Create a Product**

  - **POST** `/products`
  - Request body example:
    ```json
    {
      "name": "Laptop",
      "description": "A high-end gaming laptop",
      "price": 1500,
      "category": "Electronics",
      "stock": 10
    }
    ```
  - Response example:
    ```json
    {
      "message": "Product created successfully",
      "product": { ... }
    }
    ```

- **Get All Products**

  - **GET** `/products`
  - Response example:
    ```json
    {
      "products": [ ... ]
    }
    ```

- **Get Product by ID**

  - **GET** `/products/:id`
  - Response example:
    ```json
    {
      "product": { ... }
    }
    ```

- **Update a Product**

  - **PUT** `/products/:id`
  - Request body example:
    ```json
    {
      "name": "Laptop",
      "description": "An updated high-end gaming laptop",
      "price": 1600,
      "category": "Electronics",
      "stock": 8
    }
    ```
  - Response example:
    ```json
    {
      "message": "Product updated successfully",
      "product": { ... }
    }
    ```

- **Delete a Product**
  - **DELETE** `/products/:id`
  - Response example:
    ```json
    {
      "message": "Product deleted successfully"
    }
    ```

### Order Routes

- **Create an Order**

  - **POST** `/orders`
  - Request body example:
    ```json
    {
      "customerId": "60b8d6c5f1d2b640e4aeb3c5",
      "productList": [
        { "productId": "60b8d6c5f1d2b640e4aeb3c6", "quantity": 2 },
        { "productId": "60b8d6c5f1d2b640e4aeb3c7", "quantity": 1 }
      ],
      "totalPrice": 3200
    }
    ```
  - Response example:
    ```json
    {
      "message": "Order created successfully",
      "order": { ... }
    }
    ```

- **Get All Orders**

  - **GET** `/orders`
  - Response example:
    ```json
    {
      "orders": [ ... ]
    }
    ```

- **Get Order by ID**

  - **GET** `/orders/:id`
  - Response example:
    ```json
    {
      "order": { ... }
    }
    ```

- **Update an Order**

  - **PUT** `/orders/:id`
  - Request body example:
    ```json
    {
      "productList": [
        { "productId": "60b8d6c5f1d2b640e4aeb3c6", "quantity": 3 },
        { "productId": "60b8d6c5f1d2b640e4aeb3c7", "quantity": 1 }
      ],
      "totalPrice": 4800
    }
    ```
  - Response example:
    ```json
    {
      "message": "Order updated successfully",
      "order": { ... }
    }
    ```

- **Delete an Order**
  - **DELETE** `/orders/:id`
  - Response example:
    ```json
    {
      "message": "Order deleted successfully"
    }
    ```
