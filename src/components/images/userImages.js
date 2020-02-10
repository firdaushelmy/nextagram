import React, { useState, useEffect } from "react";
import axios from "axios";
import LoadingIndicator from "./LoadingIndicator";
import {
    Container,
    Row,
    Col,
    Card,
    CardBody,
    CardTitle,
    CardImg
} from "reactstrap";

function UserImages({ userId }) {
    const [userImages, setUserImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        axios.get(`https://insta.nextacademy.com/api/v1/images?userId=${userId}`).then(result => {
            setUserImages(result.data);
            setIsLoading(false);
        });
    }, []);

    if (isLoading) {
        return <LoadingIndicator />;
    } else {
        return (
            <div style={{ columnCount: 3, columnGap: '1em' }}>
                {userImages.map(userImage => {
                    return (
                        <>
                            <img style={{ width: '100%', margin: '0 0 1em', display: 'inline-block' }} src={userImage} />
                        </>
                    );

                })}
            </div>
        )
    }
}

export default UserImages;