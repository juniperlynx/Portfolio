import React from "react";

import { OnePage } from "../components/pagetemplate/Templates"

function FourOhFour() {
    return (
        <OnePage 
            heading="404"
            abstract={<>
                <h2>That's an error.</h2>
                <p>&emsp;It looks like the URL you
                    requested was not found. Try one of the links above.
                </p>
            </>}
        />
    )
}

export default FourOhFour;