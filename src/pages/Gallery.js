import React, { Component } from 'react'
import { useStaticQuery, graphql } from "gatsby"
import ImageGallery from 'react-image-gallery';

export default function Gallery() {
    const data = useStaticQuery(graphql`
        {
            allFile {
                nodes {
                    publicURL
                }
                }
        }
    `)
    console.log(data.allFile);
    let images = [];
    if (data.allFile.nodes && data.allFile.nodes.length) {
        images = data.allFile.nodes.map(element => ({ original: element.publicURL }));
    }
    console.log(images);
    return (
        <div className="slide">
            <div className="page">
                <div className="grid">
                    <div className="gallery">
                        <ImageGallery
                            items={images}
                            showThumbnails={false}
                            autoPlay={true}
                            disableKeyDown={true}
                            additionalClass="shkoonGallery"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
