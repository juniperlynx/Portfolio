import React from "react";
import TwoPage from "../components/page/Templates";
import { Badge } from "../components/page/Elements";

import tester_demo from "../assets/tester_demo.jpg";
import tester from "../assets/tester.jpg";

function Tester() {
    return (
        <TwoPage
            heading="AtTiny Cable Tester"
            image={tester_demo}
            abstract={<>
                <p>&emsp;
                </p>
            </>}
            footer={<>
                <h3>Skills: 
                    <Badge>Electronics</Badge>
                    <Badge>Microcontrollers</Badge>
                    <Badge>C</Badge>
                </h3>
            </>}
            heading2="Technical Details"
            image2={tester}
            writeup={<>
                <p>&emsp;
                </p>
            </>}
            footer2={<>
                <h3>Links: 
                    <Badge><a href="https://github.com/juniperlynx/Cable-Tester">GitHub</a></Badge>
                </h3>
            </>}
        />
    )
}

export default Tester;