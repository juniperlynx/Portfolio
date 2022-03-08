import React from "react";
import TwoPage from "../components/page/Templates";
import { Badge } from "../components/page/Elements";

import homepage from "../assets/images/jnp-3r.png";

function Jnp3r() {
    return (
        <TwoPage
            heading="JNP-3R.net"
            image={homepage}
            abstract={<>
                <p>&emsp;JNP-3R.net is my personal blog and homepage on the
                    net. I grew up with early to mid '00s personal sites, and
                    wanted to keep that vibe alive. I also kinda missed running
                    web servers at my old job, and wanted to dip back into that
                    fun.
                </p>
                <p>&emsp;The actual impetus to <em>build</em> something came
                    when I started to dig into VPS services and found that there
                    are some excellent free tier options these days. I have a
                    hard time saying no to "free server", so I figured I may as
                    well get started.
                </p>
            </>} 
            footer={<>
                <h3>Skills:&ensp;
                    <Badge>HTML</Badge>
                    <Badge>CSS</Badge>
                    <Badge>Python</Badge>
                    <Badge>Server Admin</Badge>
                </h3>
            </>}
            heading2="Technical Details"
            writeup={<>
                <p>&emsp;The site itself is largely static, in homage to the ones I 
                    stayed up all night reading as a kid. A <em>purely</em> static
                    site does bring up some issues, however, in particular when it
                    comes to maintenance and generating pages from templates (such as in a blog).
                </p>
                <p>&emsp;To address this, I'm using the <a href="http://publ.plaidweb.site/">Publ</a> web
                    publishing system, largely as a page generator and templating system.
                    I chose this software as the author has a similar web design ethos
                    and nostalgia with an eye to the future. Plus, I wanted an excuse
                    to play with a Python web framework. I've just begun to scratch the
                    surface of what this software can do, but so far I've found it to
                    be quite flexible and useful.
                </p>
                <p>&emsp;Serving a Python site does require a few more considerations
                    on the technical side, and to that end I have Gunicorn running Publ
                    on a UNIX socket, which is then served up to the internet at large
                    by Nginx running as a reverse proxy.
                </p>
                <p>&emsp;This site was a great way to get back into the web space, and
                    an excellent platform to have for future expansion and modification.
                </p>
            </>}
            footer2={<>
                <h3>Links:&ensp;
                    <Badge><a href="https://github.com/juniperlynx/jnp-3r.net">GitHub</a></Badge>
                    <Badge><a href="https://jnp-3r.net">Site</a></Badge>
                </h3>
            </>}
        />
    )
}

export default Jnp3r;