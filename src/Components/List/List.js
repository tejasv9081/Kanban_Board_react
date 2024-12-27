import React, {useState , useEffect} from 'react'

import './List.css'
import Card from '../Card/Card'

let cardCount = 0;
const initialData = {
    "tickets": [
      {
        "id": "CAM-1",
        "title": "Update User Profile Page UI",
        "tag": [
          "Feature request"
        ],
        "userId": "usr-1",
        "status": "Todo",
        "priority": 4
      },
      {
        "id": "CAM-2",
        "title": "Add Multi-Language Support - Enable multi-language support within the application.",
        "tag": [
          "Feature Request"
        ],
        "userId": "usr-2",
        "status": "In progress",
        "priority": 3
      },
      {
        "id": "CAM-3",
        "title": "Optimize Database Queries for Performance",
        "tag": [
          "Feature Request"
        ],
        "userId": "usr-2",
        "status": "In progress",
        "priority": 1
      },
      {
        "id": "CAM-4",
        "title": "Implement Email Notification System",
        "tag": [
          "Feature Request"
        ],
        "userId": "usr-1",
        "status": "In progress",
        "priority": 3
      },
      {
        "id": "CAM-5",
        "title": "Enhance Search Functionality",
        "tag": [
          "Feature Request"
        ],
        "userId": "usr-5",
        "status": "In progress",
        "priority": 0
      },
      {
        "id": "CAM-6",
        "title": "Third-Party Payment Gateway",
        "tag": [
          "Feature Request"
        ],
        "userId": "usr-2",
        "status": "Todo",
        "priority": 1
      },
      {
        "id": "CAM-7",
        "title": "Create Onboarding Tutorial for New Users",
        "tag": [
          "Feature Request"
        ],
        "userId": "usr-1",
        "status": "Backlog",
        "priority": 2
      },
      {
        "id": "CAM-8",
        "title": "Implement Role-Based Access Control (RBAC)",
        "tag": [
          "Feature Request"
        ],
        "userId": "usr-3",
        "status": "In progress",
        "priority": 3
      },
      {
        "id": "CAM-9",
        "title": "Upgrade Server Infrastructure",
        "tag": [
          "Feature Request"
        ],
        "userId": "usr-5",
        "status": "Todo",
        "priority": 2
      },
      {
        "id": "CAM-10",
        "title": "Conduct Security Vulnerability Assessment",
        "tag": [
          "Feature Request"
        ],
        "userId": "usr-4",
        "status": "Backlog",
        "priority": 1
      }
    ],
    "users": [
      {
        "id": "usr-1",
        "name": "Anoop sharma",
        "available": false
      },
      {
        "id": "usr-2",
        "name": "Yogesh",
        "available": true
      },
      {
        "id": "usr-3",
        "name": "Shankar Kumar",
        "available": true
      },
      {
        "id": "usr-4",
        "name": "Ramesh",
        "available": true
      },
      {
        "id": "usr-5",
        "name": "Suresh",
        "available": true
      }
    ]
  };

  export default function List({ groupValue, listTitle, ticketDetails, onUpdateTickets }) {
    const [tickets, setTickets] = useState(ticketDetails || []);
    const [showForm, setShowForm] = useState(false);
    const [ticket, setTicket] = useState({
        id: "",
        title: "",
        tag: ["Feature Request"],
        userId: "",
        status: "",
        priority: 0,
    });

    useEffect(() => {
        setTickets(ticketDetails);
    }, [ticketDetails]);

    // Get priority name based on value
    const getPriorityName = (value) => {
        const priorities = {
            0: "No Priority",
            1: "Low",
            2: "Medium",
            3: "High",
            4: "Urgent"
        };
        return priorities[value] || "Unknown";
    };

    // Toggle form visibility
    const toggleForm = () => setShowForm(!showForm);
    
    // Handle form input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setTicket({ ...ticket, [name]: value });
    };

    // Render header icon based on groupValue and listTitle
    const renderHeaderIcon = () => {
        if (groupValue === 'status') {
            const statusIcons = {
                'Backlog': (
                    <div className="list-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24">
                            <g fill="none" stroke="brown" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                                <path d="m4 8l8 4l8-4l-8-4z"/>
                                <path fill="gray" d="m12 16l-4-2l-4 2l8 4l8-4l-4-2l-4 2z"/>
                                <path d="m8 10l-4 2l4 2m8 0l4-2l-4-2"/>
                            </g>
                        </svg>
                    </div>
                ),
                'Todo': (
                    <div className="list-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24">
                            <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.56 3.69a9 9 0 0 0-2.92 1.95M3.69 8.56A9 9 0 0 0 3 12m.69 3.44a9 9 0 0 0 1.95 2.92m2.92 1.95A9 9 0 0 0 12 21m3.44-.69a9 9 0 0 0 2.92-1.95m1.95-2.92A9 9 0 0 0 21 12m-.69-3.44a9 9 0 0 0-1.95-2.92m-2.92-1.95A9 9 0 0 0 12 3"/>
                        </svg>
                    </div>
                ),
                'In progress': (
                    <div className="list-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
                            <g transform="translate(24 0) scale(-1 1)">
                                <path fill="#fdc000" d="M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2m0 2a8 8 0 0 1 8 8a8 8 0 0 1-8 8V4Z"/>
                            </g>
                        </svg>
                    </div>
                ),
                'Done': (
                    <div className="list-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 512 512">
                            <path fill="blue" d="M258.9 48C141.92 46.42 46.42 141.92 48 258.9c1.56 112.19 92.91 203.54 205.1 205.1c117 1.6 212.48-93.9 210.88-210.88C462.44 140.91 371.09 49.56 258.9 48Zm-16.79 192.47l51.55-59a16 16 0 0 1 24.1 21.06l-51.55 59a16 16 0 1 1-24.1-21.06Zm-38.86 90.85a16 16 0 0 1-22.62 0l-47.95-48a16 16 0 1 1 22.64-22.62l48 48a16 16 0 0 1-.07 22.62Zm176.8-128.79l-111.88 128a16 16 0 0 1-11.51 5.47h-.54a16 16 0 0 1-11.32-4.69l-47.94-48a16 16 0 1 1 22.64-22.62l29.8 29.83a8 8 0 0 0 11.68-.39l95-108.66a16 16 0 0 1 24.1 21.06Z"/>
                        </svg>
                    </div>
                ),
                'Cancelled': (
                    <div className="list-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24">
                            <path fill="red" d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10s10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17L12 13.41L8.41 17L7 15.59L10.59 12L7 8.41L8.41 7L12 10.59L15.59 7L17 8.41L13.41 12L17 15.59z"/>
                        </svg>
                    </div>
                )
            };
            return statusIcons[listTitle] || null;
        } else if (groupValue === 'priority') {
            const priorityIcons = {
                0: (
                    <div className="card-tag-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 1024 1024">
                            <path fill="currentColor" d="M112 476h160v72H112zm320 0h160v72H432zm320 0h160v72H752z"/>
                        </svg>
                    </div>
                ),
                1: (
                    <div className="card-tag-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 48 48">
                            <g fill="currentColor">
                                <path fillRule="evenodd" d="M35 6a3 3 0 0 0-3 3v30a3 3 0 0 0 3 3h4a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3h-4Zm-1 3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v30a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1V9Z" clipRule="evenodd"/>
                            </g>
                        </svg>
                    </div>
                ),
                2: (
                    <div className="card-tag-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 48 48">
                            <g fill="currentColor">
                                <path d="M19 21a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v18a3 3 0 0 1-3 3h-4a3 3 0 0 1-3-3V21ZM6 33a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3v-6Z"/>
                            </g>
                        </svg>
                    </div>
                ),
                3: (
                    <div className="card-tag-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 48 48">
                            <path fill="currentColor" d="M32 9a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v30a3 3 0 0 1-3 3h-4a3 3 0 0 1-3-3V9Z"/>
                        </svg>
                    </div>
                ),
                4: (
                    <div className="card-tag-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 16 16">
                            <path fill="red" d="M5.96 4.457a2.075 2.075 0 1 1 4.08 0l-.856 4.56a1.205 1.205 0 0 1-2.368 0l-.855-4.56ZM9.5 12.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0Z"/>
                        </svg>
                    </div>
                )
            };
            return priorityIcons[listTitle] || null;
        }
        return null;
    };

    // Render title based on groupValue
    const renderTitle = () => {
        if (groupValue === 'status') {
            return listTitle;
        } else if (groupValue === 'priority') {
            return getPriorityName(parseInt(listTitle));
        } else if (groupValue === 'user') {
            return listTitle;
        }
        return '';
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Generate a new CAM ID based on existing tickets
        const storedData = JSON.parse(localStorage.getItem("manifestData")) || initialData;
        const lastTicketNum = Math.max(...storedData.tickets.map(t => 
            parseInt(t.id.split('-')[1]) || 0
        ));
        const newTicketId = `CAM-${lastTicketNum + 1}`;
        
        // Find the user object from initialData
        const user = initialData.users.find(u => u.id === ticket.userId);
        
        // Create new ticket with generated ID and user object
        const newTicket = {
            ...ticket,
            id: newTicketId,
            userObj: user,  // Include the full user object
            tag: ["Feature Request"]
        };
        
        // Update localStorage with the new ticket
        const updatedTickets = [...storedData.tickets, newTicket];
        const updatedData = {
            ...storedData,
            tickets: updatedTickets
        };
        localStorage.setItem("manifestData", JSON.stringify(updatedData));
        
        // Update local state
        setTickets(prevTickets => [...prevTickets, newTicket]);
        
        // Update parent component state
        if (onUpdateTickets) {
            onUpdateTickets(updatedTickets);
        }
        
        // Reset form
        setTicket({
            id: "",
            title: "",
            tag: ["Feature Request"],
            userId: "",
            status: "",
            priority: 0,
        });
        setShowForm(false);
    };

    // Calculate filtered tickets based on groupValue and listTitle
    const filteredTickets = tickets.filter(ticket => {
        if (groupValue === 'status') {
            return ticket.status === listTitle;
        } else if (groupValue === 'priority') {
            return parseInt(ticket.priority) === parseInt(listTitle);
        } else if (groupValue === 'user') {
            const userName = ticket.userObj?.name || 
                           initialData.users.find(u => u.id === ticket.userId)?.name;
            return userName === listTitle;
        }
        return false;
    });

    return (
        <>
            <div className="list-container">
                <div className="list-header">
                    <div className="list-header-left">
                        {renderHeaderIcon()}
                        <div className="list-title">
                            {renderTitle()}
                        </div>
                        <div className="list-sum">{filteredTickets.length}</div>
                    </div>
                    <div className="list-header-right">
                        <div onClick={toggleForm} className="list-add-item">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
                                <path fill="currentColor" d="M12 4a1 1 0 0 1 1 1v6h6a1 1 0 1 1 0 2h-6v6a1 1 0 1 1-2 0v-6H5a1 1 0 1 1 0-2h6V5a1 1 0 0 1 1-1z"/>
                            </svg>
                        </div>
                        <div className="list-option-item">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 20 20">
                                <path fill="currentColor" d="M10.001 7.8a2.2 2.2 0 1 0 0 4.402A2.2 2.2 0 0 0 10 7.8zm-7 0a2.2 2.2 0 1 0 0 4.402A2.2 2.2 0 0 0 3 7.8zm14 0a2.2 2.2 0 1 0 0 4.402A2.2 2.2 0 0 0 17 7.8z"/>
                            </svg>
                        </div>
                    </div>
                </div>

                <div className="list-card-items">
                    {filteredTickets.map(ticket => (
                        <Card key={ticket.id} cardDetails={ticket} />
                    ))}
                </div>
            </div>

            {showForm && (
                <div style={{
                    zIndex: 100,
                    width: "60%",
                    height: "70%",
                    backgroundColor: "#fff",
                    borderWidth: 2,
                    borderStyle: "solid",
                    borderColor: "#000",
                    position: "absolute",
                    marginLeft: "5%",
                    marginTop: "5%",
                    borderRadius: 20,
                    padding: 20,
                }}>
                    <p style={{ fontSize: 30, fontWeight: "bold" }}>Add Task</p>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label>Title:</label>
                            <input
                                type="text"
                                name="title"
                                value={ticket.title}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div>
                            <label>User ID:</label>
                            <select
                                name="userId"
                                value={ticket.userId}
                                onChange={handleInputChange}
                                required
                            >
                                <option value="">Select a user</option>
                                {initialData.users.map(user => (
                                    <option key={user.id} value={user.id}>
                                        {user.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <label>Status:</label>
                            <select
                                name="status"
                                value={ticket.status}
                                onChange={handleInputChange}
                                required
                            >
                                <option value="">Select status</option>
                                <option value="Backlog">Backlog</option>
                                <option value="Todo">Todo</option>
                                <option value="In progress">In progress</option>
                                <option value="Done">Done</option>
                                <option value="Cancelled">Cancelled</option>
                            </select>
                        </div>
                        <div>
                            <label>Priority:</label>
                            <select
                                name="priority"
                                value={ticket.priority}
                                onChange={handleInputChange}
                                required
                            >
                                <option value="">Select priority</option>
                                <option value="0">No Priority</option>
                                <option value="1">Low</option>
                                <option value="2">Medium</option>
                                <option value="3">High</option>
                                <option value="4">Urgent</option>
                            </select>
                        </div>
                        <button type="submit">Save</button>
                    </form>
                </div>
            )}
        </>
    );
}