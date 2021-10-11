import React, { Component } from 'react';
import { MdOutlineWbSunny } from 'react-icons/md';
import { BsCloudsFill, BsFillCloudRainFill } from 'react-icons/bs';
import { GiSnowing } from 'react-icons/gi';
import { RiDrizzleFill, RiThunderstormsFill } from 'react-icons/ri';
 
const apikey = "d5ad3fec279b6c3991610172fe112f7e";

class App extends Component {
    constructor() {
        super();
        this.handleChange = this.handleChange.bind(this);
    }

    state = {
        data: [],
        city: ''
    }
    
    handleSubmit = () => {
        let sehir = this.state.city
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${sehir}&appid=${apikey}&units=metric&lang=tr`)
        .then(res => res.json())
        .then(response => {
            this.setState({
                data: response
            });
        })
        
    }
    
    handleChange = (e) => {
        this.setState({
            city: e.target.value
        })
    }

    render() {
        const weather = this.state.data;
        let currentcity = this.state.city;
        let hava;
        if (typeof this.state.data.main != "undefined") {
            if (this.state.data.weather[0].main === "Clear") {
                hava = <MdOutlineWbSunny className="text-green-400" size={60}/>;
            }
            else if (this.state.data.weather[0].main === "Clouds") {
                hava = <BsCloudsFill className="text-green-400" size={60}/>
            }
            else if (this.state.data.weather[0].main === "Snow") {
                hava = <GiSnowing className="text-green-400" size={60}/>
            }
            else if (this.state.data.weather[0].main === "Rain") {
                hava = <BsFillCloudRainFill className="text-green-400" size={60}/>
            }
            else if (this.state.data.weather[0].main === "Drizzle") {
                hava = <RiDrizzleFill className="text-green-400" size={60}/>
            }
            else if (this.state.data.weather[0].main === "Thunderstorm") {
                hava = <RiThunderstormsFill className="text-green-400" size={60}/>
            }
        }
        return (
            <div className="w-full h-screen bg-background relative">
                <div className="w-full h-full text-center flex justify-center items-center">
                    <div className="text-center w-auto bg-gray-600 rounded-lg p-8">
                        <form>
                            <span className="text-green-300 text-xl">Lütfen Şehir Giriniz.</span><br />
                            <input value={currentcity} onChange={this.handleChange} type="text" className="bg-gray-400 border rounded mt-2 text-gray-700 py-1 pl-2" />
                            <button onClick={this.handleSubmit} type="button" className="bg-green-500 px-2 py-1 ml-3 text-gray-200 rounded">Göster</button>
                        </form>
                {(typeof this.state.data.main != "undefined") ? (
                    <div>
                        <div className="flex justify-center mt-3">
                            {hava}
                        </div>
                        <h4 className="text-xl text-green-400 capitalize">{weather.weather[0].description}</h4>
                        <h1 className="text-3xl font-bold text-gray-300 mt-2">{weather.name}</h1>
                        <h1 className="text-2xl text-green-400 m-3">{Math.round(weather.main.temp)}°c</h1>
                        <h2 className="text-xl text-green-500">En Yüksek Sıcaklık {Math.round(weather.main.temp_max)}°c &nbsp; En Düşük Sıcaklık {Math.round(weather.main.temp_min)}°c</h2>
                    </div>
                ) : ('')}
                    </div>
                </div>
            </div>
          );
    }
}

export default App;