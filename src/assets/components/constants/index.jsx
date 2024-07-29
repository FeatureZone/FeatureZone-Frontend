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
} 