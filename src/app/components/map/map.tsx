'use client'

import { useEffect, useRef } from 'react';

const Map = () => {
    
    const mapRef = useRef(null);

    return (
        <>
            <div ref={mapRef}></div>
        </>   
    )
}

export default Map;