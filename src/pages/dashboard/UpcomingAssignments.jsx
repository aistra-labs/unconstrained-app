import React, { memo, useEffect, useState } from "react";
import './UpcomingAssigments.css';
import { images } from "../../components/images";

const data = {
    "courseWork": [
        {
            "courseId": "523788643592",
            "id": "529126982281",
            "title": "Putting It in to Action",
            "description": "We've learned and played and now it's time to put our learnings into action. \n\nEither individually or with a group:\n\nDesign a unit for students, using two of the resources from week two, that asks students to use AI to complete an assignment.",
            "materials": [
                {
                    "driveFile": {
                        "driveFile": {
                            "id": "1Ct5DHQ4wwVWsvPy66yWo2fnmOKKnoZWf6FRpKxsG9_o",
                            "title": "[Template] Rubric Designing a Project with AI-Based Resources",
                            "alternateLink": "https://docs.google.com/spreadsheets/d/14t0aNwwxOLwp2theLpd0Fnte9d_2kKtWs1qjRHKzkCk/edit?usp=drive_web",
                            "thumbnailUrl": "https://lh3.google.com/drive-storage/AKHj6E6u3aj7QWCvb81OLK7QVBbLUIwkI4bGQO3Z_tATmKK-iK0MPB0apSxghAgf1cmBoW3lx0THLpCX07XKxCFolrHE6Gtg-apsVMON8mJBBl5WOQwzy9hwo7AJYqce8RRgeA=s200"
                        },
                        "shareMode": "STUDENT_COPY"
                    }
                }
            ],
            "state": "PUBLISHED",
            "alternateLink": "https://classroom.google.com/c/NTIzNzg4NjQzNTky/a/NTI5MTI2OTgyMjgx/details",
            "creationTime": "2023-09-22T19:08:05.420Z",
            "updateTime": "2023-10-30T18:07:54.757Z",
            "maxPoints": 100,
            "workType": "ASSIGNMENT",
            "submissionModificationMode": "MODIFIABLE_UNTIL_TURNED_IN",
            "creatorUserId": "116918884464760439263",
            "topicId": "523788331839"
        },
        {
            "courseId": "523788643592",
            "id": "629785731788",
            "title": "Connecting to Our Community Server (Discord)",
            "description": "Getting connected to our Discord Server is an important first step to engaging with our community. This video tutorial will walk you through the basics of logging in for the first time. \nThe discord server invitation has been shared via email - but is also available in this assignment\nDiscord has a mobile app, desktop app, and is available on the web as well\nOnce you are connected, share your Discord username in the assignment comment section (For example, alexj0008 is mine)\nReach out to us if you have any questions or issues joining",
            "materials": [
                {
                    "link": {
                        "url": "https://www.loom.com/share/d06f2ec7160c44e780bdd6635f486de4?sid=e44e0fdd-320e-4867-8011-ab23353ca602",
                        "title": "Get Connected to Our Discord Server",
                        "thumbnailUrl": "https://classroom.google.com/webthumbnail?url=https://www.loom.com/share/d06f2ec7160c44e780bdd6635f486de4?sid%3De44e0fdd-320e-4867-8011-ab23353ca602"
                    }
                },
                {
                    "link": {
                        "url": "https://discord.gg/2De4RVUV",
                        "title": "Discord",
                        "thumbnailUrl": "https://classroom.google.com/webthumbnail?url=https://discord.gg/2De4RVUV"
                    }
                }
            ],
            "state": "PUBLISHED",
            "alternateLink": "https://classroom.google.com/c/NTIzNzg4NjQzNTky/a/NjI5Nzg1NzMxNzg4/details",
            "creationTime": "2023-10-08T15:56:35.780Z",
            "updateTime": "2023-10-16T13:30:49.789Z",
            "dueDate": {
                "year": 2023,
                "month": 10,
                "day": 10
            },
            "dueTime": {
                "hours": 18,
                "minutes": 29
            },
            "workType": "ASSIGNMENT",
            "submissionModificationMode": "MODIFIABLE_UNTIL_TURNED_IN",
            "creatorUserId": "117734953151531108096",
            "topicId": "523788397925"
        },
        {
            "courseId": "523788643592",
            "id": "524007025651",
            "title": "TUESDAY AI Introduction - the details (60 min)",
            "description": "Watch the following videos and add your reflections on them by creating a simile or a metaphor and posting it in the class comment section below.\n\nSIMILE\nAI (or machine learning or neural networks, etc.) is like __________ because...\n\nMETAPHOR\nAI (or machine learning or neural networks, etc.) is _____________ because\n\nYes, you could use ChatGPT to create your similes or metaphors, but you will need to choose the best one to share here",
            "materials": [
                {
                    "youtubeVideo": {
                        "id": "JrXazCEACVo",
                        "title": "How Neural Networks Work",
                        "alternateLink": "https://www.youtube.com/watch?v=JrXazCEACVo",
                        "thumbnailUrl": "https://i.ytimg.com/vi/JrXazCEACVo/default.jpg"
                    }
                },
                {
                    "youtubeVideo": {
                        "id": "Ok-xpKjKp2g",
                        "title": "How AI Works",
                        "alternateLink": "https://www.youtube.com/watch?v=Ok-xpKjKp2g",
                        "thumbnailUrl": "https://i.ytimg.com/vi/Ok-xpKjKp2g/default.jpg"
                    }
                },
                {
                    "youtubeVideo": {
                        "id": "KHbwOetbmbs",
                        "title": "What is Machine Learning?",
                        "alternateLink": "https://www.youtube.com/watch?v=KHbwOetbmbs",
                        "thumbnailUrl": "https://i.ytimg.com/vi/KHbwOetbmbs/default.jpg"
                    }
                },
                {
                    "youtubeVideo": {
                        "id": "dWRnCXbUDgA",
                        "title": "Why AI Matters with Deb Raji",
                        "alternateLink": "https://www.youtube.com/watch?v=dWRnCXbUDgA",
                        "thumbnailUrl": "https://i.ytimg.com/vi/dWRnCXbUDgA/default.jpg"
                    }
                },
                {
                    "youtubeVideo": {
                        "id": "X-AWdfSFCHQ",
                        "title": "How Chatbots and Large Language Models Work",
                        "alternateLink": "https://www.youtube.com/watch?v=X-AWdfSFCHQ",
                        "thumbnailUrl": "https://i.ytimg.com/vi/X-AWdfSFCHQ/default.jpg"
                    }
                },
                {
                    "youtubeVideo": {
                        "id": "ik70A1ge-aY",
                        "title": "AI 101 For Teachers: Fireside Chat with Sal Khan and Hadi Partovi",
                        "alternateLink": "https://www.youtube.com/watch?v=ik70A1ge-aY",
                        "thumbnailUrl": "https://i.ytimg.com/vi/ik70A1ge-aY/default.jpg"
                    }
                },
                {
                    "youtubeVideo": {
                        "id": "R9OHn5ZF4Uo",
                        "title": "How AIs, like ChatGPT, Learn",
                        "alternateLink": "https://www.youtube.com/watch?v=R9OHn5ZF4Uo",
                        "thumbnailUrl": "https://i.ytimg.com/vi/R9OHn5ZF4Uo/default.jpg"
                    }
                }
            ],
            "state": "PUBLISHED",
            "alternateLink": "https://classroom.google.com/c/NTIzNzg4NjQzNTky/a/NTI0MDA3MDI1NjUx/details",
            "creationTime": "2023-09-04T17:40:19.263Z",
            "updateTime": "2023-10-11T02:23:37.904Z",
            "dueDate": {
                "year": 2023,
                "month": 10,
                "day": 11
            },
            "dueTime": {
                "hours": 4,
                "minutes": 59
            },
            "workType": "ASSIGNMENT",
            "submissionModificationMode": "MODIFIABLE_UNTIL_TURNED_IN",
            "creatorUserId": "116918884464760439263",
            "topicId": "523788397925"
        },
        {
            "courseId": "523788643592",
            "id": "524006375761",
            "title": "Workshop One Feedback",
            "description": "Please share your feedback on our first workshop together.",
            "materials": [
                {
                    "link": {
                        "url": "https://forms.gle/FMnx8aXio1EavFZo6",
                        "title": "Workshop One: Introduction to AI",
                        "thumbnailUrl": "https://classroom.google.com/webthumbnail?url=https://forms.gle/FMnx8aXio1EavFZo6"
                    }
                }
            ],
            "state": "PUBLISHED",
            "alternateLink": "https://classroom.google.com/c/NTIzNzg4NjQzNTky/a/NTI0MDA2Mzc1NzYx/details",
            "creationTime": "2023-09-04T16:36:48.356Z",
            "updateTime": "2023-10-08T16:55:50.474Z",
            "dueDate": {
                "year": 2023,
                "month": 10,
                "day": 12
            },
            "dueTime": {
                "hours": 4,
                "minutes": 59
            },
            "workType": "ASSIGNMENT",
            "submissionModificationMode": "MODIFIABLE_UNTIL_TURNED_IN",
            "creatorUserId": "116918884464760439263",
            "topicId": "523788397925"
        },
        {
            "courseId": "523788643592",
            "id": "523788535482",
            "title": "WEDNESDAY The Good News... (30 mins)",
            "description": "Watch this video and respond to the following questions (4 A's protocol) in the class comments below.\n\n1. What do you AGREE with in this video?\n2. What ASSUMPTIONS can you identify in the video?\n3. What might you ARGUE with in this video?\n4. After watching the video, what do you ASPIRE to do with AI?",
            "materials": [
                {
                    "youtubeVideo": {
                        "id": "hJP5GqnTrNo",
                        "title": "How AI Could Save (Not Destroy) Education | Sal Khan | TED",
                        "alternateLink": "https://www.youtube.com/watch?v=hJP5GqnTrNo",
                        "thumbnailUrl": "https://i.ytimg.com/vi/hJP5GqnTrNo/default.jpg"
                    }
                }
            ],
            "state": "PUBLISHED",
            "alternateLink": "https://classroom.google.com/c/NTIzNzg4NjQzNTky/a/NTIzNzg4NTM1NDgy/details",
            "creationTime": "2023-08-28T15:44:06.028Z",
            "updateTime": "2023-10-11T22:05:22.250Z",
            "dueDate": {
                "year": 2023,
                "month": 10,
                "day": 13
            },
            "dueTime": {
                "hours": 4,
                "minutes": 59
            },
            "maxPoints": 4,
            "workType": "ASSIGNMENT",
            "submissionModificationMode": "MODIFIABLE_UNTIL_TURNED_IN",
            "creatorUserId": "116918884464760439263",
            "topicId": "523788397925"
        }
    ],
    "nextPageToken": "GjcSNRIzEjEKBwig5Ju7sjEKDmIMCOuCs6cGEMDSoc4CCgoIgICA8PmFj9sQCgoIgICA8PmF17Fd"
}

const upcomingAssignment = data => data?.map(assignment => (
    <a href={assignment.alternateLink} rel="noreferrer" className="upcoming-assignment-card" target="_blank">
        <div key={assignment.id} className={`upcoming-assignment-container ${assignment.id !== data.length ? 'upcoming-assignment-bottom-border' : ''}`}>
            <div className="assignment-number">
                {assignment.title}
            </div>
            <div className="assignment-description-block">
                <div className="assignment-description">
                    {assignment.description}
                </div>
                <img src={images['chevron-right.svg']} loading="lazy" alt="right arrow button" />
            </div>
            <div className="assignment-due-date">
                {assignment?.dueDate?.day ? `Due on ${assignment.dueDate?.day}/${assignment.dueDate?.month}/${assignment.dueDate?.year}` : ''}
            </div>
        </div>
    </a>
));

function getAssignments(id, successCb) {
    // const headers = { Cookie: "JSESSIONID=1A291EC748D592310E5AC6957CE473E7" };

    fetch(`https://dev.api.unconstrained.work/classroom/course/${id}?pageSize=4`, { credentials: 'include' })
        .then(response => response.json())
        .then(result => successCb(result))
        .catch(error => {
            console.log('error', error);
            successCb(data['courseWork'])
        });
}

const UpcomingAssignments = (props) => {
    const [data, setData] = useState();

    useEffect(() => {
        getAssignments(props.currentCardId, setData)
    }, [props.currentCardId]);

    return (
        <div className="upcoming-assignments-card-container">
            <div className="card-title">
                Upcoming Assignments
            </div>
            <div className="card-content-container">
                {upcomingAssignment(data)}
            </div>
        </div>
    );
};

export default memo(UpcomingAssignments);
