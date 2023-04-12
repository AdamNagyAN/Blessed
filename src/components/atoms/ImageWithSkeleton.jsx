import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

const SkeletonAnimation = keyframes`
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: 200px 0;
  }
`;

const Skeleton = styled.div`
  width: 100%;
  height: 100%;
  background-color: #f6f7f8;
  background-image: linear-gradient(90deg, #f6f7f8 0px, #edeef1 40px, #f6f7f8 80px);
  background-size: 200px 100%;
  animation: ${SkeletonAnimation} 1s ease-in-out infinite;
`;

const ImageContainer = styled.div`
  width: 100%;
  aspect-ratio: ${(props) => (props.aspectRatio ? props.aspectRatio : '16 / 9')};
`;

const Image = styled.img`
  width: 100%;
  object-fit: cover;
  opacity: ${(props) => (props.isLoading ? '0' : '1')};
  transition: opacity 0.5s ease-in-out;
`;

function ImageWithSkeleton({ src, alt, aspectRatio, className }) {
    const [isLoading, setIsLoading] = useState(true);

    function handleImageLoad() {
        setIsLoading(false);
    }

    console.log(isLoading)

    return (
        <ImageContainer aspectRatio={aspectRatio} className={className}>
            {isLoading &&  <Skeleton />}
            <Image
                src={src}
                alt={alt}
                isLoading={isLoading}
                onLoad={handleImageLoad}
            />
        </ImageContainer>
    );
}

export default ImageWithSkeleton