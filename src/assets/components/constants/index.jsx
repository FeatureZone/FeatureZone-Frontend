import { Code, FileText, User, Search as SearchIcon, Cat, Users, Share } from 'lucide-react';
import User1 from '../../images/User1.jpg';  
import User2 from '../../images/User2.jpg';  
import User3 from '../../images/User3.jpg';  
import User4 from '../../images/User4.jpg';  
import User5 from '../../images/User5.jpg';  
import User6 from '../../images/User6.jpg';  


export default{
    NAVLINKS : [
        { text: 'Home', link: '/' },
        { text: 'Features', link: '/features' },
        { text: 'Tutorials', link: '/tutorials' },
        { text: 'Codes', link: '/code'},
        { text: 'Testimonials', link: '/testimonials' },
        { text: 'Contact', link: '/contact' },
      ],

      FEATURES: [
        { 
          id: 1, 
          icon: <Code />, 
          title: 'Code Sharing', 
          description: 'Effortlessly upload, manage, and download code snippets with syntax highlighting.',
          color: '#3498db', // Bright Blue
        },
        { 
          id: 2, 
          icon: <FileText />, 
          title: 'AI-Generated Documentation', 
          description: 'Automatically generate detailed documentation and explanations for your code.',
          color: '#e74c3c', // Red
        },
        { 
          id: 3, 
          icon: <User />, 
          title: 'User Management', 
          description: 'Seamless registration, login, and user profile management with favorites.',
          color: '#2ecc71', // Green
        },
        { 
          id: 4, 
          icon: <SearchIcon />, 
          title: 'Search and Filtering', 
          description: 'Find code snippets quickly using keyword search and advanced filtering options.',
          color: '#f39c12', // Orange
        },
        { 
          id: 5, 
          icon: <Cat />, 
          title: 'GitHub Synchronization', 
          description: 'Automatically synchronize code snippets with GitHub repositories and manage contributions.',
          color: '#9b59b6', // Purple
        },
        { 
          id: 6, 
          icon: <Users />, 
          title: 'Contributor Management', 
          description: 'Add and manage contributors with customizable permissions and notifications.',
          color: '#1abc9c', // Teal
        },
      ],
HOWITWORKS : [
  {
    id: 1,
    icon: <User />,
    title: 'Sign Up',
    description: 'Create an account to get started with uploading and managing your code snippets.',
  },
  {
    id: 2,
    icon: <Code />,
    title: 'Upload Code Snippets',
    description: 'Easily upload your code snippets and manage them with syntax highlighting.',
  },
  {
    id: 3,
    icon: <FileText />,
    title: 'AI-Generate Documentation',
    description: 'Generate comprehensive documentation and explanations for your code using AI.',
  },
  {
    id: 4,
    icon: <Share />,
    title: 'Manage and Share',
    description: 'Organize your snippets, manage versions, and share them with others effortlessly.',
  },
  {
    id: 5,
    icon: <Cat />,
    title: 'Synchronize with GitHub',
    description: 'Automatically sync your code snippets with GitHub repositories for version control.',
  },
  {
    id: 6,
    icon: <Users />,
    title: 'Collaborate with Contributors',
    description: 'Add contributors to your snippets and manage their permissions and notifications.',
  },
],

TESTIMONIALS : [
  {
    id: 1,
    image: User2,
    name: 'John Doe',
    role: 'Software Engineer',
    review: 'This platform has transformed the way I manage and share my code snippets. The AI-generated documentation is a game-changer!',
  },
  {
    id: 2,
    image: User1,
    name: 'Jane Smith',
    role: 'Full Stack Developer',
    review: 'The seamless integration with GitHub and the user-friendly interface make this the best tool for any developer.',
  },
  {
    id: 3,
    image: User4,
    name: 'Samuel Green',
    role: 'Data Scientist',
    review: 'I love how easy it is to search and filter through my snippets. The contributor management feature is also very helpful.',
  },
  {
    id: 4,
    image: User3,
    name: 'Emily White',
    role: 'Frontend Developer',
    review: 'The platform is incredibly intuitive and has saved me so much time. The search and filtering options are very powerful.',
  },
  {
    id: 5,
    image: User6,
    name: 'Michael Brown',
    role: 'Backend Developer',
    review: 'I appreciate the clean interface and the robust functionality. It has made managing my codebase much simpler.',
  },
  {
    id: 6,
    image: User5,
    name: 'Sophia Blue',
    role: 'DevOps Engineer',
    review: 'The AI-powered insights are extremely useful for documentation and understanding code. It’s an indispensable tool for my workflow.',
  },
],

CTA_TEXT : {
  main: "Ready to revolutionize your coding workflow?",
  sub: "Join us today and start experiencing the benefits of AI-driven code management.",
  primaryButton: "Get Started",
  secondaryButton: "Learn More",
},

CODESNIPPETS :[
  {
    id: 1,
    user: {
      name: 'John Doe',
      profilePicture: User1,
      bio: 'Full Stack Developer',
    },
    title: 'Logging a Variable to the Console',
    description: 'This JavaScript snippet demonstrates how to declare a variable and log its value to the console. It initializes a variable "a" with the value 10 and then prints this value using console.log().',
    code: 'const a = 10;\nconsole.log(a);',
    likes: 10,
    comments: 2,
    shares: 1,
    date: '2024-07-30',
    tags: ['javascript', 'beginner'],
  },
  {
    id: 2,
    user: {
      name: 'Jane Smith',
      profilePicture: User2,
      bio: 'Frontend Developer',
    },
    title: 'Greeting Function in JavaScript',
    description: 'This function named "greet" takes a single argument, "name", and returns a greeting message that includes the provided name. It uses template literals for string interpolation.',
    code: 'function greet(name) {\n  return `Hello, ${name}`;\n}',
    likes: 5,
    comments: 1,
    shares: 3,
    date: '2024-07-29',
    tags: ['javascript', 'function'],
  },
  {
    id: 3,
    user: {
      name: 'Alice Johnson',
      profilePicture: User3,
      bio: 'Backend Developer',
    },
    title: 'Sum Function Using Arrow Function',
    description: 'This arrow function named "sum" takes two arguments, "a" and "b", and returns their sum. It is a concise way to define a function in JavaScript.',
    code: 'const sum = (a, b) => a + b;\nconsole.log(sum(5, 7));',
    likes: 8,
    comments: 3,
    shares: 2,
    date: '2024-07-28',
    tags: ['javascript', 'arrow function'],
  },
  {
    id: 4,
    user: {
      name: 'Bob Brown',
      profilePicture: User4,
      bio: 'UI/UX Designer',
    },
    title: 'DOM Manipulation: Changing Text Content',
    description: 'This code selects an HTML element with the id "myElement" and changes its text content to "Hello World". It uses the document.querySelector method to find the element and the innerText property to set the text.',
    code: 'document.querySelector("#myElement").innerText = "Hello World";',
    likes: 12,
    comments: 4,
    shares: 5,
    date: '2024-07-27',
    tags: ['javascript', 'DOM manipulation'],
  },
  {
    id: 5,
    user: {
      name: 'Charlie Davis',
      profilePicture: User5,
      bio: 'Data Scientist',
    },
    title: 'Reading a CSV File with Pandas',
    description: 'This Python snippet uses the pandas library to read a CSV file named "data.csv" and print the first few rows of the data. It demonstrates basic file I/O operations in Python.',
    code: 'import pandas as pd\n\ndata = pd.read_csv("data.csv")\nprint(data.head())',
    likes: 6,
    comments: 2,
    shares: 4,
    date: '2024-07-26',
    tags: ['python', 'pandas'],
  },
  {
    id: 6,
    user: {
      name: 'Dana Evans',
      profilePicture: User6,
      bio: 'Mobile App Developer',
    },
    title: 'Simple React Component',
    description: 'This is a simple React functional component named "App" that returns a div element with the text "Hello, React!". It serves as an introduction to creating React components.',
    code: 'import React from "react";\n\nfunction App() {\n  return <div>Hello, React!</div>;\n}\n\nexport default App;',
    likes: 15,
    comments: 5,
    shares: 7,
    date: '2024-07-25',
    tags: ['react', 'javascript'],
  },
  {
    id: 7,
    user: {
      name: 'Eve Fox',
      profilePicture: User2,
      bio: 'Software Engineer',
    },
    title: 'Class Definition and Method in JavaScript',
    description: 'This JavaScript snippet defines a class named "Person" with a constructor that takes a "name" parameter and a method "greet" that returns a greeting message. It then creates an instance of the class and logs the greeting message.',
    code: 'class Person {\n  constructor(name) {\n    this.name = name;\n  }\n  greet() {\n    return `Hello, ${this.name}`;\n  }\n}\n\nconst person = new Person("Alice");\nconsole.log(person.greet());',
    likes: 9,
    comments: 3,
    shares: 6,
    date: '2024-07-24',
    tags: ['javascript', 'class'],
  },
  {
    id: 8,
    user: {
      name: 'Frank Green',
      profilePicture: User5,
      bio: 'DevOps Engineer',
    },
    title: 'Fetching Data with Async/Await',
    description: 'This JavaScript snippet defines an asynchronous function "fetchData" that fetches data from an API endpoint and logs the response data to the console. It uses the fetch API and async/await syntax for handling asynchronous operations.',
    code: 'const fetchData = async () => {\n  const response = await fetch("https://api.example.com/data");\n  const data = await response.json();\n  console.log(data);\n};\n\nfetchData();',
    likes: 11,
    comments: 4,
    shares: 3,
    date: '2024-07-23',
    tags: ['javascript', 'async/await'],
  },
  {
    id: 9,
    user: {
      name: 'Grace Harris',
      profilePicture: User1,
      bio: 'Cloud Architect',
    },
    title: 'Listing S3 Buckets Using Boto3',
    description: 'This Python snippet uses the boto3 library to list all S3 buckets in an AWS account. It creates an S3 client, calls the list_buckets method, and prints the names of the buckets.',
    code: 'import boto3\n\ns3 = boto3.client("s3")\nresponse = s3.list_buckets()\nprint(response["Buckets"])',
    likes: 7,
    comments: 2,
    shares: 4,
    date: '2024-07-22',
    tags: ['python', 'aws'],
  },
  {
    id: 10,
    user: {
      name: 'Hank Ivers',
      profilePicture: User3,
      bio: 'Game Developer',
    },
    title: 'Simple Game Score System',
    description: 'This JavaScript snippet defines a simple game score system. It contains a function "Game" that initializes a score variable and a method "increaseScore" to increment the score. An instance of the game is created, and the score is increased and logged.',
    code: 'function Game() {\n  let score = 0;\n  function increaseScore() {\n    score += 10;\n  }\n  return { score, increaseScore };\n}\n\nconst game = Game();\ngame.increaseScore();\nconsole.log(game.score);',
    likes: 13,
    comments: 3,
    shares: 5,
    date: '2024-07-21',
    tags: ['javascript', 'game development'],
  },
  {
    id: 11,
    user: {
      name: 'Ivy Jenkins',
      profilePicture: User4,
      bio: 'AI Researcher',
    },
    title: 'Creating a Neural Network with TensorFlow',
    description: 'This Python snippet uses TensorFlow to create a neural network model. It defines a sequential model with two dense layers, compiles the model with the Adam optimizer and mean squared error loss function, and is ready for training.',
    code: 'import tensorflow as tf\n\nmodel = tf.keras.models.Sequential([\n  tf.keras.layers.Dense(10, activation="relu"),\n  tf.keras.layers.Dense(1)\n])\n\nmodel.compile(optimizer="adam", loss="mean_squared_error")',
    likes: 10,
    comments: 2,
    shares: 3,
    date: '2024-07-20',
    tags: ['python', 'tensorflow'],
  },
  {
    id: 12,
    user: {
      name: 'Jack Lee',
      profilePicture: User6,
      bio: 'Database Administrator',
    },
    title: 'Creating a Users Table in SQL',
    description: 'This SQL snippet creates a table named "users" with columns for id, name, and email. The id column is an auto-incrementing primary key, and the email column must be unique and not null.',
    code: 'CREATE TABLE users (\n  id INT AUTO_INCREMENT PRIMARY KEY,\n  name VARCHAR(255) NOT NULL,\n  email VARCHAR(255) UNIQUE NOT NULL\n);',
    likes: 5,
    comments: 1,
    shares: 2,
    date: '2024-07-19',
    tags: ['sql', 'database'],
  }
],

} 