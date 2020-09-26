import React, { Component } from 'react'




class FindLocation extends Component {


    constructor(props)
    {
        super();
        this.state=
        {
            longitude:0,
            latitude:0,
            error:''
        };
    }

    render() {
        window.navigator.geolocation.getCurrentPosition((position) => {
            console.log(position);
            this.setState({
                longitude:position.coords.longitude,
                latitude:position.coords.latitude
            });
        },
        (err) => 
        {
            console.log(err);
            this.setState({
                error:err.message
            });
        }
        
        );

        const{longitude,latitude, error}=this.state;

        if(longitude !== 0 && !error)
        {
            return(
                <div>
                    Longitude : {longitude}
                    <br/>
                    Latitude  : {latitude}
                </div>
            )
        }else if(longitude === 0 && error && latitude === 0){
            return(
                <div>
                    Hata : {error}
                </div>
            )
        }else if(latitude !== 0 && !error){
            return(
                <div>
                    Longitude : {longitude}
                    <br/>
                    Latitude  : {latitude}
                </div>
            )
        }
        
        return (
            <div>
               Loading...
            </div>
        )
    }
}


export default FindLocation;