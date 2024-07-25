# Music Platform Microservices

## Overview
This project demonstrates a microservices architecture with an API Gateway and service discovery. It includes three services:
- User Profile Service (Service A)
- Playlist Recommendation Service (Service B)
- Subscription Service (Service C)

## Architecture
- **API Gateway**: Routes requests to appropriate services and handles versioning.
- **Service Discovery**: Consul is used for dynamic service discovery.
- **Microservices**: Each service is implemented using Express.js.

## Setup

### Prerequisites
- Docker
- Node.js

### Running the Services
1. Clone the repository.
2. Run `docker-compose up` to start the services.

## Future Improvements
- Implement authentication and authorization.
- Enhance monitoring and logging.
- Introduce caching for frequently accessed data.

## Conclusion
This architecture allows for easier maintenance and versioning of APIs, reducing the impact of changes on dependent services.
