import "./styles.css";
import React from "react";
import Image from "./components/Image";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      photos: [],
      loading: false,
    };
  }

  // Use the required lifecycle methods here
  async componentDidMount() {
    const data = await fetch(
      "https://jsonplaceholder.typicode.com/albums/1/photos"
    );
    const fetchedData = await data.json();
    // console.log(fetchedData);
    this.setState({ photos: fetchedData, loading: true });
  }

  render() {
    // Display loading status here
    return this.state.photos.length == 0 ? (
      "Loading..."
    ) : (
      <div className="App">
        {this.state.photos.map((photo) => {
          return <Image key={photo.id} photo={photo} />;
        })}
      </div>
    );
  }
}
