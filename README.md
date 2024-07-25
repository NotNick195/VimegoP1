# Music Platform Microservices

## Overview

This proof of concept demonstrates a microservices architecture with an API Gateway to reduce maintenance turnaround time and prevent mistakes during transitions.

## Services

1. **Service A (User Profile Service)**: Manages user profiles.
2. **Service B (Playlist Recommendation Service)**: Generates playlist recommendations.
3. **Service C (Subscription Service)**: Provides billing information.

## API Gateway

The API Gateway routes requests to the appropriate services and provides a layer of abstraction.

## Running the Services

1. Navigate to each service directory (`api-gateway`, `service-a`, `service-b`, `service-c`).
2. Run `npm install` to install dependencies.
3. Start each service by running `node server.js`.
4. Access the services via the API Gateway:
   - User Profile: `http://localhost:3000/service-a/user-profile`
   - Recommendations: `http://localhost:3000/service-b/recommendations`
   - Billing Info: `http://localhost:3000/service-c/billing-info`

## Advantages

- **Isolation**: Changes in Service A do not directly affect Services B and C.
- **Scalability**: Each service can be scaled independently.
- **Flexibility**: Easily add new services without modifying existing ones.
