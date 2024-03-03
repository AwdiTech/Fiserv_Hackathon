# Client-Side Application Prototype

This project is a client-side application prototype, created for a Fiserv Hackathon, designed to provide a seamless and efficient dining experience. It integrates advanced features to streamline the order process, manage payments, and enhance user interaction with the restaurant's services. 

![Home Menu Page](https://i.imgur.com/vpfIsuB.png)
![Payment Page](https://i.imgur.com/Ad4UZU8.png)


## Features

- **Contactless Ordering System:** Our solution introduces a versatile contactless ordering platform, making dining experiences seamless and efficient. Accessible online through smartphones or tablets, customers can easily access the application by scanning QR codes provided at each table. 
- **Order Management:** Users can browse the menu, add items to their cart, and customize their orders with special requests.
- **Payment Integration:** Supports various payment methods including credit cards, PayPal, Google Pay, and Cryptocurrency transactions powered by Fiserv.
- **Dynamic Cart Management:** Users can adjust item quantities in their cart and see updates to their total in real-time.
- **Dual-Sided Functionality:** The solution is designed with both the client and restaurant in mind, featuring a client-side for customers and a dashboard for restaurant managers/owners.
- **Customizable and Widely Applicable:** Designed as a generic, all-in-one solution, our platform can be swiftly adapted and deployed by any restaurant, regardless of size or type. It simplifies the transition to digital dining solutions, offering an easy, quick setup process.


## Technologies & Packages

This project leverages a variety of technologies and npm packages to enhance functionality and improve the development workflow. Below is a list of the main dependencies:


- **React & React DOM** (`react`, `react-dom`): A JavaScript library for building user interfaces. This project uses React for its component-based architecture.
- **React Router DOM** (`react-router-dom`): Used for handling routing in this single-page application (SPA), enabling navigation between different sections of the app without reloading the page.
- **React Responsive Carousel** (`react-responsive-carousel`): Provides a responsive carousel component that adds dynamic slideshow capabilities to the application.
- **Sass** (`sass`): A preprocessor scripting language that is interpreted or compiled into Cascading Style Sheets (CSS), allowing for more advanced styling options.
- **UUID** (`uuid`): Generates unique identifiers, used here for key assignment in list rendering and managing cart items uniquely.
- **Axios** (`axios`): A promise-based HTTP client for making requests to back-end services.
- **Fiserv** for payment processing integration

To install these dependencies, ensure you have Node.js and npm installed, then run `npm install` in the project directory after cloning the repository.

These packages facilitate the development of a modern, efficient, and user-friendly client-side application by providing essential utilities, components, and development tools.


## Setup

To get this project running on your local machine, follow these steps:

1. Clone the repository:
```bash
git clone https://github.com/AwdiTech/Fiserv_Hackathon
```

2. Navigate to the project directory:
```
cd Fiserv_Hackathon
```

3. Install dependencies:
```
npm install
```

4. Start the development server:
```
npm start
```

The application should now be running on http://localhost:3000.


## Usage
- **Browse the Menu:** Start by exploring the available dishes and their details, or alternatively make a reservation.
- **Manage Your Cart:** Add items to your cart, adjust quantities, or remove items as needed.
- **Checkout:** Proceed to checkout, choose your payment method, and complete your transaction.
- **Check In:** When you arrive at the restaurant, use the Check In feature to be served your completed order.


## Future Implementations

To continue and improve the application, we have several exciting features and enhancements planned for future implementations. Here's a glimpse of some planned next steps:

### Admin Restaurant Dashboard Implementation

We are planning a comprehensive design of the Admin Restaurant Dashboard to provide a more intuitive and user-friendly interface for restaurant managers and owners. This design will include all needed functionalities for management and efficient data visualizations to help manage orders, view analytics, and customize the menu more efficiently.

#### Mockup 1: Dashboard Overview
![Dashboard Overview Mockup](https://i.imgur.com/OV3AEAO.png)

#### Mockup 2: Analytics and Reporting
![Analytics Page Mockup](https://i.imgur.com/zNO7mXC.png)

### Enhanced Analytics

We aim to integrate advanced analytics features, enabling restaurants to gain deeper insights into their sales data, customer preferences, and operational efficiency. This will help restaurants tailor their offerings more effectively and make informed business decisions.

### Mobile App Development

To complement our web-based solution, we plan to develop a mobile application that offers all the functionalities of the desktop version in a mobile-friendly format. This will allow restaurant staff and managers to access the system from anywhere, providing greater flexibility and efficiency.

### Integration with Third-Party Services

We are exploring integrations with popular third-party services such as payment gateways, delivery platforms, and reservation systems. This will streamline operations and provide a seamless experience for both restaurants and their customers.


## Contributors

This project is the result of the collaborative efforts of a dedicated team. We appreciate the contributions from each individual who has helped improve and expand this project.

### Lead Developers

- **[AwdiTech](https://github.com/AwdiTech)**
- **[Anurag](https://github.com/Anurag-Bhattacharya4199)**
- **[Ryan](https://github.com/ryanatparks)**


## License
This project is licensed under the MIT License.
