import React from "react";
import TwoPage from "../components/page/Templates";
import { Badge } from "../components/page/Elements";

import xmas_front from "../assets/images/xmas_front.jpg";
import xmas_rear from "../assets/images/xmas_rear.jpg";

function Xmas() {
    return (
        <TwoPage
            heading="2019 Christmas Cards"
            image={xmas_front}
            abstract={<>
                <p>&emsp;For Christmas 2019 I decided to put my electronics
                    skills to work to make some extra special Christmas Cards
                    for friends and family.
                </p>
                <p>
                    These used an Atmel AtTiny Microcontroller running a 4x5
                    grid of charlieplexed LEDs to scroll a holiday message or
                    display a snowfall animation. This size was chosen as 3x5 is
                    one of the smallest sizes that can display a single font
                    character, and the extra column provides spacing between them.
                </p>
                <p>&emsp;Five of these were built in total for friends and family,
                    and the process of designing and building them was a great way
                    to refine my skills in making projects that are more polished
                    than my typical one-offs.
                </p>
            </>}
            footer={<>
                <h3>Skills:&ensp;
                    <Badge>KiCAD</Badge>
                    <Badge>Microcontrollers</Badge>
                    <Badge>C</Badge>
                </h3>
            </>}
            heading2="Technical Details"
            image2={xmas_rear}
            writeup={<>
                <p>&emsp;The hardware and electronic design on this project was fairly
                    straightforward as I'd already completed a PCB design project and
                    was using a microcontroller I already had some familiarity with.
                </p>
                <p>&emsp;That said, there were plenty of challenges in writing the custom
                    firmware and starting from a known point let me play with the more 
                    artistic side of setting up components and layouts in KiCAD.
                </p>
                <p>&emsp;Though the firmware is somewhat basic it had to fit in the
                    AtTiny84's limited memory and run for as long as possible on a coin
                    cell battery. The firmware uses the built in timer peripheral to fire
                    an interrupt periodically to update the display and run the current
                    animation, and a simple custom font was devised to allow the display
                    of standard ASCII text. 
                </p>
            </>}
            footer2={<>
                <h3>Links:&ensp;
                    <Badge><a href="https://github.com/juniperlynx/Christmas-2019">GitHub</a></Badge>
                </h3>
            </>}
        />
    )
}

export default Xmas;