const employees = [
  {
    id: 1,
    email: "employee1@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Build Login Page",
        taskDescription: "Create a responsive login page with email and password validation.",
        date: "2026-10-04",
        category: "Development"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Fix Navbar Bug",
        taskDescription: "Fix the alignment and responsive issues in the navigation bar.",
        date: "2026-10-03",
        category: "Bug Fixing"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Update Documentation",
        taskDescription: "Update the project documentation with the latest API changes.",
        date: "2026-10-01",
        category: "Documentation"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Deploy Website",
        taskDescription: "Deploy the latest version of the employee dashboard.",
        date: "2026-09-29",
        category: "Deployment"
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Create Dashboard Cards",
        taskDescription: "Design and implement dashboard cards for displaying employee statistics.",
        date: "2026-10-05",
        category: "UI Development"
      }
    ]
  },

  {
    id: 2,
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Design Landing Page",
        taskDescription: "Create a modern landing page design for the company website.",
        date: "2026-10-04",
        category: "Design"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Create User API",
        taskDescription: "Develop REST API endpoints for creating and updating users.",
        date: "2026-10-02",
        category: "Backend"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Database Setup",
        taskDescription: "Set up the database schema and establish the required connections.",
        date: "2026-09-30",
        category: "Database"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Team Meeting",
        taskDescription: "Attend the weekly development team meeting.",
        date: "2026-10-01",
        category: "Meeting"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Performance Testing",
        taskDescription: "Test the application performance and identify slow API requests.",
        date: "2026-09-28",
        category: "Testing"
      }
    ]
  },

  {
    id: 3,
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Implement Search",
        taskDescription: "Add search functionality to the employee management dashboard.",
        date: "2026-10-04",
        category: "Development"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Write Unit Tests",
        taskDescription: "Write unit tests for the authentication and user management modules.",
        date: "2026-10-03",
        category: "Testing"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Fix Form Validation",
        taskDescription: "Fix validation issues in the employee registration form.",
        date: "2026-10-01",
        category: "Bug Fixing"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Code Review",
        taskDescription: "Review the pull request for the new dashboard features.",
        date: "2026-09-30",
        category: "Code Review"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Update Dependencies",
        taskDescription: "Update outdated project dependencies and resolve compatibility issues.",
        date: "2026-09-27",
        category: "Maintenance"
      }
    ]
  },

  {
    id: 4,
    email: "employee4@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Create Profile Page",
        taskDescription: "Build a profile page where employees can view and edit their details.",
        date: "2026-10-04",
        category: "Frontend"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Implement Dark Mode",
        taskDescription: "Add dark mode support to the employee dashboard.",
        date: "2026-10-03",
        category: "UI Development"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Setup Git Repository",
        taskDescription: "Initialize the repository and configure the development branches.",
        date: "2026-09-29",
        category: "Development"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Create Wireframes",
        taskDescription: "Create wireframes for the upcoming employee management system.",
        date: "2026-09-28",
        category: "Design"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "API Integration",
        taskDescription: "Integrate the employee dashboard with the backend APIs.",
        date: "2026-09-26",
        category: "Backend"
      }
    ]
  },

  {
    id: 5,
    email: "employee5@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Create Reports",
        taskDescription: "Build a reporting module for generating employee performance reports.",
        date: "2026-10-05",
        category: "Development"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Optimize Database",
        taskDescription: "Optimize database queries to improve application response time.",
        date: "2026-10-04",
        category: "Database"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Fix Login Issue",
        taskDescription: "Resolve the issue where users were unable to log in with valid credentials.",
        date: "2026-10-02",
        category: "Bug Fixing"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Prepare Presentation",
        taskDescription: "Prepare a presentation explaining the latest project updates.",
        date: "2026-10-01",
        category: "Presentation"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Server Configuration",
        taskDescription: "Configure the production server and environment variables.",
        date: "2026-09-27",
        category: "DevOps"
      }
    ]
  }
];

const admin = [
  {
    id: 1,
    email: "admin@example.com",
    password: "123"
  }
];



export const setLocalStorage = () => {
    localStorage.setItem('employees', JSON.stringify(employees))
    localStorage.setItem('admin', JSON.stringify(admin))
}

export const getLocalStorage = () => {
    const employees = JSON.parse((localStorage.getItem('employees')))
    const admin = JSON.parse((localStorage.getItem('admin')))
}