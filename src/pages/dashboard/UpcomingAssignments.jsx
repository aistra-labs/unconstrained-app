import React, { memo } from "react";
import './UpcomingAssigments.css';
import { images } from "../../components/images";

const upcomingAssignmentsData = [
    {
        id: 1,
        assignmentNumber: "Assignment 1",
        assignmentDescription: "Peer-graded Assignment: An App of my Own",
        assignmentDueDate: "Due on Oct 1, 11:59 PM"
    },
    {
        id: 2,
        assignmentNumber: "Assignment 2",
        assignmentDescription: "Sentiment Analysis using Machine Learning",
        assignmentDueDate: "Due on Oct 1, 11:59 PM"
    },
    {
        id: 3,
        assignmentNumber: "Assignment 3",
        assignmentDescription: "Exercise on Making Music Videos with AI",
        assignmentDueDate: "Due on Oct 15, 11:59 PM"
    },
    {
        id: 4,
        assignmentNumber: "Assignment 4",
        assignmentDescription: "Additional Risks & Ethics with AI",
        assignmentDueDate: "Due on Oct 28, 11:59 PM"
    }
];

const upcomingAssignment = upcomingAssignmentsData.map(assignment => (
    <div key={assignment.id} className={`upcoming-assignment-container ${ assignment.id !== upcomingAssignmentsData.length ? 'upcoming-assignment-bottom-border' : ''}`}>
        <div className="assignment-number">
            {assignment.assignmentNumber}
        </div>
        <div className="assignment-description-block">
            <div className="assignment-description">
                {assignment.assignmentDescription}
            </div>
            <img src={images['chevron-right.svg']} loading="lazy" alt="right arrow button" />
        </div>
        <div className="assignment-due-date">
            {assignment.assignmentDueDate}
        </div>
    </div>
));


const UpcomingAssignments = () => {
    return (
        <div className="upcoming-assignments-card-container">
            <div className="card-title">
                Upcoming Assignments
            </div>
            <div className="card-content-container">
                {upcomingAssignment}
            </div>
        </div>
    );
};

export default memo(UpcomingAssignments);
