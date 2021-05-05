import React, { useEffect, useState } from 'react';

const Footer = () => {

    const [pageUrl, setPageUrl] = useState("");

    useEffect(() => {
        setPageUrl(window.location.href);
    },[])

    return (
        <>
            <footer className={pageUrl.match(/Main/) ? 'mainFooter' : 'topFooter'}>
                <a href="https://shirokuma-lab.github.io/shirokumaHP/"
                   target="_blank"
                   rel="noopener noreferrer"
                   className="shirokuma-logo">
                       しろくまLab
                </a>
                <div class="copy">&copy;2021 seeso</div>
            </footer>
        </>
    )
}

export default Footer
