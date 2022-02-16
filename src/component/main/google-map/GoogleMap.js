import {Map, GoogleApiWrapper, Marker} from 'google-maps-react';
import {API_KEY} from "../../../constants";
import {useSelector} from "react-redux";

const Map = () => {
    const {currentBird} = useSelector(state => state.birds);

    return (
        <div style={{display: "flex", height: "100%"}}>
            <Map
                google={this.props.google}
                zoom={8}
                style={{
                    width: '100%',
                    height: '100%'
                }}
                initialCenter={{let: currentBird.lat, lng: currentBird.lng}}
            >
                <Marker position={{let: currentBird.lat, lng: currentBird.lng}}/>
            </Map>
        </div>
    );
};

export default Map;
