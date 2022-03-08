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
                <p>&emsp;This was my first PCB design project, and I learned
                    a lot as I went through designing, ordering, and building
                    multiple revisions.
                </p>
                <p>&emsp;For some time I'd wanted to learn PCB design, but
                    never had a project that was involved enough to need a
                    PCB and simple enough I felt confident with it. Then one
                    of the cheap RJ45 cable testers we used at work failed
                    and I saw an opportunity.
                </p>
                <p>&emsp;I designed a new set of boards with beefier drive
                    circuitry to replace the originals while still fitting
                    inside the original case.
                </p>
            </>}
            footer={<>
                <h3>Skills: 
                    <Badge>KiCAD</Badge>
                    <Badge>PCB Design</Badge>
                    <Badge>Microcontrollers</Badge>
                </h3>
            </>}
            heading2="Technical Details"
            image2={tester}
            writeup={<>
                <p>&emsp;The actual circuitry is quite simple. The unit applies 
                    a positive voltage to one wire of the cable while pulling the 
                    other wires to ground and an pair of LEDs in series with each wire
                    light if it has continuity. A complementary pair of P-channel and 
                    N-channel MOSFETs provide drive for the pair of LEDS.
                </p>
                <p>&emsp;The software is also straightforward, given the MCU only has to
                    sequentially light indicator lights, but I chose to use this simplicity
                    as a testbed to play with some of the power saving features on the AtTiny.
                    The system is set up to sleep in between state changes, and the Watchdog
                    timer peripheral is used to wake up the MCU for the next change. This means
                    the system is only fully powered up for a tiny fraction of run time, and
                    greatly improves battery life.
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