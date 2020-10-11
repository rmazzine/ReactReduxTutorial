import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };

    // Needed to the function "know" the context
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onFormSubmit(e) {
    e.preventDefault();

    console.log(this.state.term);
  }

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Image Search</label>
            {/* The parentesis off will call the function every time the event onChange is called */}
            <input
              type="text"
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
