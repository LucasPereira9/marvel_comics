import React from 'react';
import Lottie from 'react-lottie';
import LoadingJson from '../../assets/videos/LoadingJson.json'

export default function Loading() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: LoadingJson,
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
