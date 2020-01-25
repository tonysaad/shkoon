import React, { Component } from 'react'
import ImageGallery from 'react-image-gallery';

export default class Gallery extends Component {
    render() {
        const images = [
            {
              original: 'https://picsum.photos/id/1018/1000/600/'
            },
            {
              original: 'https://picsum.photos/id/1015/1000/600/'
            },
            {
              original: 'https://picsum.photos/id/1019/1000/600/'
            },
          ];

        return (
            <div>
                <div className="page">
                    <div className="grid">
                        <div className="texted-content">
                            <div className="gallery">
                                <ImageGallery items={images} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
