import React from "react";
import TwoPage from "../components/page/Templates";
import { Badge } from "../components/page/Elements";

import xmas_front from "../assets/xmas_front.jpg";
import xmas_rear from "../assets/xmas_rear.jpg";

function Xmas() {
    return (
        <TwoPage
            heading="2019 Christmas Cards"
            image={xmas_front}
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
            image2={xmas_rear}
            writeup={<>
                <p>&emsp;
                </p>
            </>}
            footer2={<>
                <h3>Links: 
                    <Badge><a href="https://github.com/juniperlynx/Christmas-2019">GitHub</a></Badge>
                </h3>
            </>}
        />
    )
}

export default Xmas;