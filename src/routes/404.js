import React from "react";
import {
    Bumper,
    Heading,
    Abstract,
} from "../templates/TwoPageTemplate"

function FourOhFour() {
    return (
        <>
            <Bumper>
                <Heading>404</Heading>
                <Abstract>
                    <h2>That's an error.</h2>
                    <p>&emsp;It looks like the URL you
                        requested was not found. Try one of the links above.
                    </p>
                </Abstract>
            </Bumper>
        </>
    )
}

export default FourOhFour;