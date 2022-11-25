import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';


class App extends React.Component {
  state = { images: []};

  onSearchSubmit = async term => {
    const response = await unsplash.get('/search/photos', {
      params: { query: term }
    });
 console.log(response.data.results)
    this.setState({ images: response.data.results });
  };

  render() {
    return (<>
          <div className="ui inverted menu">
          <div className="item">
          <img src="./husky.jpg" />
           </div>
          <a className="item">Home</a>
          <a className="item">About</a>
          </div>

        <div>
        <h2 class="ui center aligned header">
  <img class="ui image" src="./husky-logo.png" />
  <div class="content">
  Husky-Search
  </div>
</h2> 
        </div>
      <div className="ui container" style={{ marginTop: '10px', color:'gray' }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
      </>
    );
  }
}

export default App;
