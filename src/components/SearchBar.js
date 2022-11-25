import React from 'react';

class SearchBar extends React.Component {
  state = { term: '' };

  onFormSubmit = event => {
    event.preventDefault();

    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui segment" style={{backgroundColor:'gray' }}>
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label style={{fontSize:15 }}>Image Search</label>
            <input
              type="text"
              placeholder="search anything"
              value={this.state.term}
              onChange={e => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
