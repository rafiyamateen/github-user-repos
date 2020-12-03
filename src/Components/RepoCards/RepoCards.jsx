import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from "react-bootstrap";
import './RepoCards.css'

const RepoCards = ({ data }) => {
    return (
        <div id='cardContainer'>
            {Object.keys(data).map(val =>
                (<Card style={{ width: '18rem' }} key={data[val].id}>
                    <Card.Body>
                        <Card.Title>{data[val].name}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Description</Card.Subtitle>
                        <Card.Text>
                            {data[val].description ?
                                data[val].description : 'Not Available'}
                        </Card.Text>
                        <span id='links'>
                            <Card.Link target='_blank' href={data[val].html_url}>Repo</Card.Link>
                            {data[val].homepage ?
                                <Card.Link target='_blank' href={data[val].homepage}>Live website</Card.Link> : null}
                        </span>
                    </Card.Body>
                </Card>))
            }
        </div>
    )
}

export default RepoCards
