import React from "react";
import TwoPage from "../components/page/Templates";
import { Badge } from "../components/page/Elements";

import uno_overview from "../assets/images/uno_overview.jpg";
import uno_bottom from "../assets/images/uno_bottom.jpg";

function Uno() {
    return (
        <TwoPage
            heading="Uno Computer"
            image={uno_overview}
            abstract={<>
                <p>&emsp;The Uno is a one bit, Harvard architecture,
                    discreet CMOS computer system I designed and built
                    as an exercise in understanding digital logic and
                    computer architecture.
                </p>
                <p>&emsp;The design is inspired by Motorola's MC14500B,
                    but simplified quite extensively, perhaps even to the
                    point of being a little hokey. That said, it's a
                    Turing complete (given enough I/O) computer system that
                    can be easily built and understood, and was an excellent
                    learning exercise.
                </p>
                <p>&emsp;To make it a little easier to program, an 
                    assembler was written in Python to translate
                    mnemonic op codes into binary to be toggled into
                    the machine's memory.
                </p>
            </>}
            footer={<>
                <h3>Skills:&ensp;
                    <Badge>Electronics</Badge>
                    <Badge>Digital Logic</Badge>
                    <Badge>Python</Badge>
                </h3>
            </>}
            heading2="Technical Details"
            image2={uno_bottom}
            writeup={<>
                <p>&emsp;As a one bit computer, the uno only works on
                    a single bit of information at a time. This means
                    that the data path and I/O are all single bits, on
                    or off. This means the machine is limited to simple
                    boolean operations. You may wonder how you can tell
                    a computer to <em>do</em> anything with only one bit,
                    but here we cheat.
                </p>
                <p>&emsp;The Harvard architecture (named for the Harvard
                    Mark-1) is distinct form the more common Von-Neuman
                    architecture in that it has two separate memories, one
                    for data, and another for program storage, rather than
                    sharing these. This does pose some limits in how we 
                    can write and modify the code on such a machine as it
                    runs, but it also lets us use wider instruction words.
                    The Uno uses an 8-bit instruction word, with 5 bits for
                    the operation code and 3 bits for the address on which
                    it should be performed.
                </p>
                <p>&emsp;The construction is done by wire-wrap on perfboard,
                    using largely components and old stock that was available
                    to me locally from the EE department or that could be
                    scrounged on a college student's budget.
                </p>
                <p>&emsp;The build process was super fun and this project was
                    an excellent way to gain familiarity with digital logic
                    and computer design. If I were to do it again, however,
                    I'd focus more on building a machine that's reproducible
                    and more fun to play with. There are some parts and design
                    choices that were made because they were convenient for me
                    or kept me under budget, but make it harder for others to 
                    replicate and learn from the build.
                </p>
                <p>&emsp;If you'd like to read more, see the link below for 
                    more information and schematics.
                </p>
            </>}
            footer2={<>
                <h3>Links:&ensp;
                    <Badge><a href="https://github.com/juniperlynx/Uno-Computer">GitHub</a></Badge>
                </h3>
            </>}
        />
    )
}

export default Uno;