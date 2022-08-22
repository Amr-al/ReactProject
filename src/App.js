import logo from './logo.svg';
import './App.css';
import Header from './component/header';
import Card from './component/Card';
function App() {
  const Description = {
      "head": "Expand your career opportunities with Python",
      "buttonValue": "Explore Python",
      "description": "Take one of Udemy’s range of Python courses and learn how to code using this incredibly useful language. Its simple syntax and readability makesPython perfect for Flask, Django, data science, and machine learning.You’ll learn how to build everything from games to sites to apps. Choosefrom a range of courses that will appeal to both beginners and advanceddevelopers alike..."
  };
  const Python_Course = [
    {
      "id": 1,
      "title": "Learn Python: The Complete Python Programming Course",
      "author": "Avinash Jain,The Codex",
      "image": "https://img-c.udemycdn.com/course/240x135/394676_ce3d_5.jpg",
      "price": "679.99",
      "rating": 4.4,
      "people": "2,948"
    },
    {
      "id": 2,
      "title": "Learning Python for Data Analysis and Visualization",
      "author": "Jose Portilla",
      "image": "https://img-c.udemycdn.com/course/240x135/396876_cc92_7.jpg",
      "price": "1,599.99",
      "rating": 4.4,
      "people": "17,999"
    },
    {
      "id": 3,
      "title": "Python for Beginners - Learn Programming from scratch",
      "author": "Edwin Diaz, Coding FAcutly Solutaions",
      "image": "https://img-c.udemycdn.com/course/240x135/405878_e5a0_3.jpg",
      "price": "679.99",
      "rating": 4.4,
      "people": "1,781"
    },
    {
      "id": 4,
      "title": "Learn Python: Python for Beginners ",
      "author": "Abrar Hussain",
      "image": "https://img-c.udemycdn.com/course/240x135/426570_1b91_3.jpg",
      "price": "319.99",
      "rating": 4.3,
      "people": "2,773"
    },
    {
      "id": 5,
      "title": "Python Beyond the Basics - Object-Oriented Programming",
      "author": "Infinite Skills",
      "image": "https://img-c.udemycdn.com/course/480x270/449532_2aa9_7.jpg",
      "price": "519.99",
      "rating": 4.4,
      "people": "2,930"
    }
  ];
  return (
    <div className="App">
      <Header myobject = {Description}></Header>
      <Card myobject = {Python_Course} className = "Course_Content"></Card>
    </div>
  );
}

export default App;
