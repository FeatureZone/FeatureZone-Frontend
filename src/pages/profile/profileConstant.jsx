//////REMOVE THIS///////

import { FaCode, FaStar, FaUser } from 'react-icons/fa';

// const menuItems = [
//   { name: 'Showcase', options: ['Option A', 'Option B'] },
//   { name: 'Popular', options: ['Option 1', 'Option 2', 'Option 3'] },
//   // Add more items as needed
// ];

const P = {
  BIO: [
    {
      name: 'Snow',
      gender: 'female',
      email: 'snow@gmail.com',
      job: 'web developer',
      skill: 'HTML, CSS, , JavaScript, React',
      bio: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
    },
  ],

  METRIC: [
    {
      title: 'Total Contributions',
      value: 256,
      icon: <FaCode className="text-blue-500" />,
      description: 'Code snippets, components, and explanations',
    },
    // {
    //   title: 'Followers & Following',
    //   value: '150 / 75',
    //   icon: <FaUser className="text-green-500" />,
    //   description: 'Users who follow you and those you follow',
    // },
    {
      title: 'Stars & Likes',
      value: '1.2K',
      icon: <FaStar className="text-yellow-500" />,
      description: 'Total stars and likes received on contributions',
    },
  ],

  SNIPPET: [
    {
      title: 'html snippet',
      content:
        'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
    },
  ],
};

export default P;
