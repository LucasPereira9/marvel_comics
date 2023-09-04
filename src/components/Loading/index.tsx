import React from 'react';
import Lottie from 'react-lottie';
import test from '../../assets/videos/test.json'

export default function Loading() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: test,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };
  return (
    <div style={{marginTop: '3%'}}>
       <Lottie
	    options={defaultOptions}
        height={400}
        width={400}
      />
    </div>
  )
}
