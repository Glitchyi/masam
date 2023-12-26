# Multi-functional Activity Scheduler and Manager (MASAM)

Advaith Narayanan, Ajay Santhosh Kanjooparamban, Manav R Cheeran, Samuel Jacob Alex

## Introduction

MASAM (Multi-functional Activity Scheduler and Manager) is a centralized, user-friendly calendar application designed to streamline diverse event coordination across students, faculty, staff, and clubs within a college environment. It serves as a comprehensive platform for scheduling, viewing, and managing different types of college events and activities. MASAM offers customized experiences through role-based permissions enabling event scheduling, modification, deletion for admins, faculty, students and club leads based on their responsibilities.

The system prioritizes secure access integrated with college authentication, accommodates concurrent users, and emphasizes performance, security, reliability, scalability, and usability across features like notifications, categorization, and reminders. This is to mitigate event clashes and foster efficient orchestration of activities through the college community while meeting documentation standards for transparency and maintainability. Specific requirements cover external interfaces, functional capabilities, non-functional aspects, and open-source contributions. Overall, MASAM aims to revolutionize event management for a college setting with a robust, centralized solution.

## Objectives

1. Develop a user-friendly, centralized platform for scheduling, viewing, and managing different college events and activities.
2. Enable customized experiences for students, faculty, staff and club leads via role-based permissions for event creation, modification and deletion.
3. Integrate secure access with college authentication systems to manage permissions.
4. Build in features like notifications, reminders, categorization to optimize event coordination and minimize clashes.

## Problem Statement

Miscommunication is common without standardized protocols, leading to last-minute cancellations, venue issues, and participation conflicts across interest groups. The unchecked activity overload also takes a toll on general discipline and academic commitments. Students struggle to balance priorities due to unchecked event creation without considering examination schedules.

There is a need for an intelligent system that can facilitate transparency, discipline and seamless coordination when scheduling the diverse event landscape of a college. Automating and streamlining mundane tasks can free up resources to focus on value-adding activity planning. With role-based access and robust features, an event management platform can mitigate clashes, foster collaboration, uphold academic integrity and also evolve as an open source ecosystem.

The MASAM system aims to address these gaps as an automated, secure and user-friendly solution tailored to the needs of college event orchestration. It can optimize planning as well as ongoing management by integrating with existing college ecosystems.

## Design and Development

### Front-end Development

1. Design the User Interface (UI):
   - Conducted user interviews and gathered feedback to understand user expectations.
   - Collaborated with UX/UI designers to create wireframes and prototypes.
   - Iteratively refined the design based on user testing and stakeholder input.

2. Select a Front-end Technology (Vue.js):
   - Researched various front-end frameworks, considering factors like ease of integration and scalability.
   - Choose Vue.js for its reactivity, simplicity, and strong community support.

3. Create Event Management Interface:
   - Implemented an intuitive event management interface using Vue.js components.
   - Incorporated features like drag-and-drop for seamless event organization.

4. Implement Event Categorization and Filtering:
   - Developed functionality to categorize events by type, date, and other relevant criteria.
   - Integrated dynamic filtering to enable users to easily locate specific information.

5. Add Notifications and Reminders:
   - Integrated a real-time notification system to alert users about new announcements and upcoming events.
   - Implemented a reminder feature to enhance user engagement.

6. Create User Documentation:
   - Produced comprehensive user documentation outlining the system's features and providing step-by-step guides.
   - Conducted user testing sessions to validate documentation effectiveness.

### Back-end Development

1. Choose a Back-end Technology (Rust with Actix):
   - Assessed various back-end frameworks considering performance, security, and maintainability.
   - Opted for Rust with Actix for its speed, reliability, and modern web development features.

2. Set Up a Database (MongoDB):
   - Selected MongoDB as the database system for its flexibility and scalability.
   - Designed a database schema that accommodates diverse notification data.

3. Build Event Management Endpoints:
   - Developed secure RESTful APIs for creating, updating, and deleting events.
   - Ensured proper authentication mechanisms to protect sensitive data.

4. Implement Event Categorization and Search:
   - Enhanced back-end capabilities to support event categorization and implemented efficient search algorithms.
   - Optimized database queries for quick retrieval of relevant information.

5. Set Up API Documentation:
   - Generated clear and comprehensive API documentation using OpenAPI.
   - Ensured documentation remained up-to-date with any changes to the API.

## Scope

The scope of this report encompasses:

1. Front-end Development:
   - Designing an intuitive and visually appealing user interface (UI) for optimal user experience.
   - Selecting and implementing Vue.js as the front-end technology to facilitate dynamic and responsive UI elements.
   - Creating an Event Management Interface with features such as categorization, filtering, notifications, and reminders.
   - Developing user documentation to guide users through the functionality of the College Notification System.

2. Back-end Development:
   - Choosing Rust with Actix as the back-end technology for its performance and scalability.
   - Setting up MongoDB as the database system to efficiently store and manage notification data.
   - Building secure and efficient back-end endpoints for event management.
   - Implementing advanced features such as event categorization and search functionality.

3. API Documentation:
   - Generating and maintaining comprehensive API documentation using tools like Swagger or OpenAPI.
   - Providing developers and stakeholders with clear insights into available endpoints and their usage.

4. Challenges and Solutions:
   - Addressing challenges encountered during the development process and presenting effective solutions.
   - Offering insights into decision-making processes for technology selection, design choices, and problem-solving.

5. User Engagement and Experience:
   - Evaluating the impact of the College Notification System on user engagement and overall experience.
   - Analyzing user feedback and making recommendations for future enhancements.

This report aims to serve as a detailed reference for stakeholders involved in the development and maintenance of the College Notification System, providing insights into the project's objectives, methodologies, and outcomes.
