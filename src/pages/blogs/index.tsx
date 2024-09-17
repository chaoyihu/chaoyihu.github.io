import React, { useState, useEffect } from 'react';

import dynamic from 'next/dynamic';

// const DynamicBlogListing: React.FC<{ blogName: string }> = ({ blogName }) => {
//     const [BlogInfo, setBlogInfo] = useState(null);

//     useEffect(() => {
//         const loadBlogInfo = async () => {
//             const { default: Comp } = await import(`@/components/${blogName}`);
//             setBlogInfo(() => Comp);
//         };

//         loadComponent();
//     }, [componentName]);

//     if (!Component) return null;

//     return <Component />;
// };

export default function Blogs() {
    return (
        <div>
            <h1>Blogs</h1>
            <ul>
                <li><a href='/blogs/build-c-extension-for-python'>build-c-extension-for-python</a></li>
                <li><a href='/blogs/solving-a-tzinfo-issue'>solving-a-tzinfo-issue</a></li>
                <li><a href='/blogs/fast-fibonacci'>fast-fibonacci</a></li>
                <li><a href='/blogs/git-detached-head'>git-detached-head</a></li>
                <li><a href='/blogs/run-multiple-apps-on-same-server-using-nginx'>run-multiple-apps-on-same-server-using-nginx</a></li>
                <li><a href='/blogs/deploying-dockerized-web-app-to-amazon-ec2'>deploying-dockerized-web-app-to-amazon-ec2</a></li>
            </ul>
        </div>
    )
}

