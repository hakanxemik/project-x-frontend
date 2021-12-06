import React, { Component } from 'react'

import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

export class GoogleMaps extends Component {

    constructor(props) {
        super(props)
        this.state = {
          coord: this.props.coord
        }
      }

    render() {

        return (<div className="map-area">

            <Map

                google={this.props.google}

                zoom={14}

                center={{
                    lat: 2,
                    lng: 2

                }}>

                <Marker key="marker_1"

                    position={{

                        lat: 2,
                        lng: 2

                    }}

                />

            </Map>

        </div>);

    }

}

export default GoogleApiWrapper({

    apiKey: ("AIzaSyA19BMs9uSzGyTRE6s6Aziu2xYOfmmmPXc")

})(GoogleMaps);