

import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class FetchDemo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: []
    };
  }

  componentDidMount() {
     let currentComponent = this;
    axios.get(`http://10.11.202.253:8080/ETLTool/getAllDBProfile`)
      .then(function (response) {
    console.log(response);
    console.log(response.data);

    currentComponent.setState({
        posts: response.data.items
      });


  })
  .catch(function (error) {
    console.log(error);
  });
  }

 render() {
    const renderItems = this.state.posts.map(function(item, i) {
      return <li key={i}>{item.title}</li>
    });

    return (
      <ul className="FetchDemo">
        {renderItems}
      </ul>
    );
 }
}

export default FetchDemo;
