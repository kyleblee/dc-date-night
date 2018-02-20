import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { SpotForm } from '../components/SpotForm';
import { collectNeighborhoodOptions, collectCategoryOptions, createCuratedDate } from '../actions/dateActions';
import { NeighborhoodSelect } from '../components/NeighborhoodSelect';

class CuratedDateForm extends React.Component {
  constructor() {
    super();

    this.state = {
      title: "",
      description: "",
      neighborhood: "",
      spots: [{
        title: "",
        description: "",
        category: ""
      }],
      error: undefined
    }
  }

  componentDidMount() {
    this.props.collectNeighborhoodOptions();
    // passing in hard-coded empty string so that all categories are retrieved
    this.props.collectCategoryOptions({neighborhood: ""})
  }

  updateInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  updateSpotAttributes = (spotIndex, event) => {
    let updatedSpot = this.state.spots[spotIndex]
    updatedSpot[event.target.name] = event.target.value;
    this.setState({
      spots: [
        ...this.state.spots.slice(0, spotIndex),
        updatedSpot,
        ...this.state.spots.slice(spotIndex + 1, this.state.spots.length)
      ]
    })
  };

  generateSpotForms() {
    const categories = this.props.options.categories;

    const spotForms = this.state.spots.map((spot, index) => {
      return (
       <SpotForm
         key={index}
         title={spot.title}
         updateSpotAttributes={this.updateSpotAttributes.bind(this)}
         categories={categories}
         index={index}
         selectedCategory={spot.category} />
      )
    })

    return spotForms;
  }

  addAdditionalSpot = e => {
    e.preventDefault();
    this.setState({
      spots: this.state.spots.concat({
        title: "",
        description: "",
        category: ""
      })
    })
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.createCuratedDate(this.state);
    this.props.history.push('/');
  }

  render() {
    return (
      <div className="curated-date-form">
        <h3>Curate a Date</h3>
        <form onSubmit={this.handleSubmit}>
            <label htmlFor="date-title">What should we call this date?</label>
            <input id="date-title" type="text" value={this.state.title} name="title" onChange={this.updateInput}/>
            <label htmlFor="date-description">Tell our users what this date is all about:</label>
            <textarea id="date-description" value={this.state.description} name="description" onChange={this.updateInput}></textarea>
            <label htmlFor="neighborhood-select">Which neighborhood of DC is this date in?</label>
            <NeighborhoodSelect
              neighborhoods={this.props.options.neighborhoods}
              selectedNeighborhood={this.state.neighborhood}
              updateNeighborhood={this.updateInput.bind(this)}/>
            {this.generateSpotForms()}
            <button onClick={this.addAdditionalSpot}>Add Spot</button>
            <input type="submit" />
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    collectNeighborhoodOptions: collectNeighborhoodOptions,
    collectCategoryOptions: collectCategoryOptions,
    createCuratedDate: createCuratedDate
  }, dispatch);
}

const mapStateToProps = (state) => {
  return {
    options: state.dates.options
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CuratedDateForm);
