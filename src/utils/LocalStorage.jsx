localStorage.clear();

const employees = [
    {
        "id": 1,
        "firstName": "Rohit",
        "email": "employee1@example.com",
        "password": "123",
        "taskNumber": {
            "active": 2,
            "newTask": 1,
            "completed": 1,
            "failure": 0
        },
        "tasks": [
            {
                "taskTitle": "Design Homepage",
                "taskDescription": "Create a responsive design for the homepage.",
                "taskCategory": "Design",
                "taskDate": "2024-11-01",
                "active": true,
                "newTask": false,
                "completed": false,
                "failure": false
            },
            {
                "taskTitle": "Fix Login Bug",
                "taskDescription": "Resolve the login issue on mobile devices.",
                "taskCategory": "Development",
                "taskDate": "2024-10-30",
                "active": true,
                "newTask": true,
                "completed": false,
                "failure": false
            },
            {
                "taskTitle": "Update User Profile",
                "taskDescription": "Add new fields to the user profile page.",
                "taskCategory": "Development",
                "taskDate": "2024-11-05",
                "active": false,
                "newTask": false,
                "completed": true,
                "failure": false
            }
        ]
    },
    {
        "id": 2,
        "firstName": "Priya",
        "email": "employee2@example.com",
        "password": "123",
        "taskNumber": {
            "active": 2,
            "newTask": 1,
            "completed": 0,
            "failure": 0
        },
        "tasks": [
            {
                "taskTitle": "Customer Feedback Analysis",
                "taskDescription": "Analyze recent customer feedback and create a report.",
                "taskCategory": "Research",
                "taskDate": "2024-11-03",
                "active": true,
                "newTask": false,
                "completed": false,
                "failure": false
            },
            {
                "taskTitle": "Inventory Check",
                "taskDescription": "Complete a full inventory check for the last quarter.",
                "taskCategory": "Operations",
                "taskDate": "2024-11-10",
                "active": true,
                "newTask": true,
                "completed": false,
                "failure": false
            }
        ]
    },
    {
        "id": 3,
        "firstName": "Ananya",
        "email": "employee3@example.com",
        "password": "123",
        "taskNumber": {
            "active": 2,
            "newTask": 1,
            "completed": 1,
            "failure": 0
        },
        "tasks": [
            {
                "taskTitle": "Optimize Database",
                "taskDescription": "Optimize the database queries for faster load times.",
                "taskCategory": "Development",
                "taskDate": "2024-10-28",
                "active": false,
                "newTask": false,
                "completed": true,
                "failure": false
            },
            {
                "taskTitle": "Prepare Sales Report",
                "taskDescription": "Gather and analyze sales data for Q3 report.",
                "taskCategory": "Sales",
                "taskDate": "2024-10-30",
                "active": true,
                "newTask": true,
                "completed": false,
                "failure": false
            },
            {
                "taskTitle": "Update Landing Page",
                "taskDescription": "Revise the landing page for the new product launch.",
                "taskCategory": "Marketing",
                "taskDate": "2024-11-05",
                "active": true,
                "newTask": false,
                "completed": false,
                "failure": false
            }
        ]
    },
    {
        "id": 4,
        "firstName": "Vikram",
        "email": "employee4@example.com",
        "password": "123",
        "taskNumber": {
            "active": 1,
            "newTask": 0,
            "completed": 1,
            "failure": 0
        },
        "tasks": [
            {
                "taskTitle": "Security Audit",
                "taskDescription": "Perform a security audit of the application.",
                "taskCategory": "IT",
                "taskDate": "2024-10-29",
                "active": true,
                "newTask": false,
                "completed": false,
                "failure": false
            },
            {
                "taskTitle": "Fix Server Issues",
                "taskDescription": "Resolve the server outage and implement backup measures.",
                "taskCategory": "IT",
                "taskDate": "2024-10-27",
                "active": false,
                "newTask": false,
                "completed": true,
                "failure": false
            }
        ]
    },
    {
        "id": 5,
        "firstName": "Meera",
        "email": "employee5@example.com",
        "password": "123",
        "taskNumber": {
            "active": 2,
            "newTask": 1,
            "completed": 1,
            "failure": 0
        },
        "tasks": [
            {
                "taskTitle": "Design Social Media Ads",
                "taskDescription": "Create ads for the new social media campaign.",
                "taskCategory": "Marketing",
                "taskDate": "2024-11-02",
                "active": true,
                "newTask": true,
                "completed": false,
                "failure": false
            },
            {
                "taskTitle": "Write Blog Post",
                "taskDescription": "Write a blog post about the latest industry trends.",
                "taskCategory": "Content",
                "taskDate": "2024-10-31",
                "active": true,
                "newTask": false,
                "completed": false,
                "failure": false
            },
            {
                "taskTitle": "Review SEO Strategy",
                "taskDescription": "Review and update the SEO strategy for Q4.",
                "taskCategory": "Marketing",
                "taskDate": "2024-11-06",
                "active": false,
                "newTask": false,
                "completed": true,
                "failure": false
            }
        ]
    }
];


const admin = [
    {
        "id": 1,
        "email": "admin@example.com",
        "password": "123"
    }
];

export const setLocalStorage = () => {
    if (!localStorage.getItem('employees')) {
        localStorage.setItem('employees', JSON.stringify(employees));
    }
    if (!localStorage.getItem('admin')) {
        localStorage.setItem('admin', JSON.stringify(admin));
    }
};

export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem('employees'));
    const admin = JSON.parse(localStorage.getItem('admin'));
    return { employees, admin };
};