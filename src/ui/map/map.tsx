"use client";

import { AdvancedMarker, Map as GoogleMap, APIProvider } from "@vis.gl/react-google-maps";
import styles from "./map.module.scss";

const GOOGLE_MAPS_API = process.env.NEXT_PUBLIC_MAPS_API;

export default function Map(){
    console.log(GOOGLE_MAPS_API)

    const address = {
        lng: 123.75337136415794,
        lat: 10.206513235601017
    }

    return(
        <APIProvider apiKey={`${GOOGLE_MAPS_API}`}>
            <GoogleMap mapId={"2a383fdc6328fe7f "} defaultCenter={address} defaultZoom={15} className={`${styles["map"]}`}>
                <AdvancedMarker position={address}/>
            </GoogleMap>
        </APIProvider>
    );
}