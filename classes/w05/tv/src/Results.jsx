//? React -> One way data flows -> Parent to Child -> props
//? Pass from Child to Parent, Child to Sibling -> Lift State
//? Pass info through URL, Search changes the URL, Results useParams
//? Context 

import { useParams } from "react-router-dom";


function Results(props) {
    const params = useParams()

    return (
        <p>
            Results {params.title}
        </p>
    )
}

export default Results;

//? https://www.google.com.sg/search?q=general+assembly&sxsrf=ALiCzsaHQncbk9U-wn_n6SBpAnL_6KwTIA%3A1653446061874&source=hp&ei=rZWNYqXKMpXD3LUP3t2KwAk&iflsig=AJiK0e8AAAAAYo2jvRb-y_SjcsfSabGvbizOuGWyn1lA&gs_ssp=eJzj4tVP1zc0TDJPzi4wKStUYDRgdGDwEkhPzUstSsxRSCwuTs1NyqkEAMdzC3s&oq=gen&gs_lcp=Cgdnd3Mtd2l6EAMYADIKCC4QxwEQowIQJzIECCMQJzIUCC4QgAQQsQMQgwEQxwEQrwEQ1AIyCAguEIAEELEDMg4ILhCABBCxAxDHARCjAjIOCC4QgAQQsQMQxwEQrwEyEQguEIAEELEDEIMBEMcBENEDMhEILhCABBCxAxCDARDHARCvATIICAAQgAQQsQMyCAgAELEDEIMBOgcIIxDqAhAnOgUIABCABDoLCAAQgAQQsQMQgwE6EQguEIAEELEDEIMBEMcBEKMCOhEILhCABBCxAxDHARDRAxDUAlCkB1i-CWCTD2gBcAB4AIABPYgBrAGSAQEzmAEAoAEBsAEK&sclient=gws-wiz