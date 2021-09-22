import React from 'react';
import '../Styles/home.css';

class Wallpaper extends React.Component {
    handleLocationChange = (event) => {
     const locId = event.target.value;
    sessionStorage.setItem('locationId', locId);
    }

    render() {
        const { locationsData } = this.props;
        
        return (
            <div>
                <div>
                    <div className="container-fluid">
                        <img className="img_main" src="./Assets/homepageimg.png" />
                        <div className="row">
                            <div className="wallpaper-content text-center">

                                <div className="col-lg-12 col-md-12">
                                    <b className="logo">e!</b>
                                </div>
                                <div className="col-lg-12 text-center headingm">Find the best restaurants, cafés, and bars</div>

                                <div className="selectBoxh" styles="display: inline-block;">

                                    <select className="selectBox" onChange={this.handleLocationChange}>
                                        <option value="0" selected disabled>Please type a location</option>
                                        {locationsData.map((item) => {
                                            return <option key={item.location_id}  value={item.location_id}>{`${item.name}, ${item.city}`}</option>
                                        })}
                                        
                                    </select>
                                </div>
                                <div className="restaurantSelector" styles="display: inline-block;">

                                    <input className="searchBox" type="text" placeholder="Search for Restaurants" />
                                    <div className="search-icon" styles="display: inline-block;">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                            className="bi bi-search " viewBox="0 0 16 16">
                                            <path
                                                d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            <span className="login-signup">
                                <a href="#" className="login">Login</a>
                                <a href="#" className="signup">Create new account</a>
                            </span>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Wallpaper;