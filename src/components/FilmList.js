import React, {Component} from 'react';
import Film from './Film';


class FilmList extends Component {
  render() {
    const filmNodes = this.props.data.map (film => {
      return (
        <Film key={film.id} url={film.url}>{film.name}</Film>
      )
    });
    return(
    <ul>
      {filmNodes}
    </ul>
    )
  }
}

export default FilmList;
