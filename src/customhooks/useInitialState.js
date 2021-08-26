import React, { useState, useEffect } from 'react'

export default function useInitialState(API) {
    const [videos, setVideos] = useState(null);

    useEffect(() => {
        fetch("http://localhost:3000/initalState")
            .then((response) => response.json())
            .then((data) => setVideos(data))
            .catch((e) => {
                alert("Hubo un error al intentar obtener la informacion del api");
                console.log(e);
            });
    }, [])

    return [videos, setVideos];
}
