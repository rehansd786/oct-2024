import React from 'react'
import { useParams, useSearchParams } from 'react-router'
import { Link } from 'react-router'

function Course() {

    const params = useParams();
    // const result = useSearchParams();

    // const queryParams = result[0];

    const [queryParams, setQueryParams] = useSearchParams();

    console.log(queryParams.toString());

    const x = queryParams.get("x");
    const y = queryParams.get("y");;

    // console.log(params);

    return (
        <h1>
            Course Page , Course Id : {params.courseId}
            <h2>
                x : {x}
                y : {y}
            </h2>
            {/* <Link to={'/courses'}>Course List</Link>
        <Link to={'/courses/1'}>Course 1</Link>
        <Link to={'/courses/2'}>Course 2</Link>
        <Link to={'/courses/new'}>New Course</Link> */}
        </h1>
    )
}

export default Course