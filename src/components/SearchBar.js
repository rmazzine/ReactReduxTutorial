import React from 'react';

class SearchBar extends React.Component {
  // Name pattern on/handle FIELD EVENT
  onInputChange(event) {
    console.log(event.target.value);
  }

  render() {
    return (
      <div className="ui segment">
        <form className="ui form">
          <div className="field">
            <label>Image Search</label>
            {/* The parentesis off will call the function every time the event onChange is called */}
            <input type="text" onChange={this.onInputChange} />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
