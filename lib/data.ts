export const siteData = {
  "tasks": [
    {
      "id": "1",
      "title": "Complete project documentation",
      "completed": false,
      "priority": "high",
      "createdAt": "2024-01-15T09:00:00Z",
      "completedAt": null
    },
    {
      "id": "2",
      "title": "Review pull requests",
      "completed": true,
      "priority": "medium",
      "createdAt": "2024-01-15T10:30:00Z",
      "completedAt": "2024-01-15T14:45:00Z"
    },
    {
      "id": "3",
      "title": "Schedule team meeting",
      "completed": false,
      "priority": "medium",
      "createdAt": "2024-01-15T11:15:00Z",
      "completedAt": null
    },
    {
      "id": "4",
      "title": "Update dependencies",
      "completed": true,
      "priority": "low",
      "createdAt": "2024-01-14T16:20:00Z",
      "completedAt": "2024-01-15T09:30:00Z"
    },
    {
      "id": "5",
      "title": "Prepare presentation slides",
      "completed": false,
      "priority": "high",
      "createdAt": "2024-01-15T13:00:00Z",
      "completedAt": null
    }
  ],
  "settings": {
    "appName": "TaskFlow",
    "description": "A simple and intuitive task manager to organize your daily activities",
    "version": "1.0.0",
    "defaultPriority": "medium",
    "showCompletedTasks": true,
    "sortOrder": "createdAt",
    "theme": "light",
    "autoDeleteCompleted": false,
    "notificationsEnabled": true
  },
  "stats": {
    "totalTasks": 5,
    "completedTasks": 2,
    "activeTasks": 3,
    "completionRate": 40
  }
};

export const navigation = {
  "main": [
    {
      "label": "Dashboard",
      "route": "/",
      "icon": "home",
      "active": true
    },
    {
      "label": "Active Tasks",
      "route": "/active",
      "icon": "clock",
      "active": false,
      "badge": "{{activeTasksCount}}"
    },
    {
      "label": "Completed",
      "route": "/completed",
      "icon": "check-circle",
      "active": false,
      "badge": "{{completedTasksCount}}"
    }
  ],
  "footer": [
    {
      "label": "About",
      "route": "/about",
      "icon": "info"
    },
    {
      "label": "Help",
      "route": "/help",
      "icon": "question-mark"
    }
  ]
};