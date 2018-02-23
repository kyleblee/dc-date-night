import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { SpotForm } from '../components/SpotForm';
import { collectNeighborhoodOptions, collectCategoryOptions, createCuratedDate } from '../actions/dateActions';
import { NeighborhoodSelect } from '../components/NeighborhoodSelect';
import Errors from '../components/Errors';

class CuratedDateForm extends React.Component {
  constructor() {
    super();

    this.state = {
      title: "",
      description: "",
      neighborhood: "",
      coverPhoto: undefined,
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

  deleteSpot = (spotIndex, event) => {
    if (this.state.spots.length > 1) {
      this.setState({
        spots: [
          ...this.state.spots.slice(0, spotIndex),
          ...this.state.spots.slice(spotIndex + 1, this.state.spots.length)
        ]
      });
    }
  }

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
         selectedCategory={spot.category}
         deleteSpot={this.deleteSpot.bind(this)} />
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

  updateCoverPhoto = e => {
    const coverPhoto = this.coverPhotoField.files[0];

    this.setState({
      coverPhoto: coverPhoto
    });
  }

  handleSubmit = e => {
    e.preventDefault();

    const invalidSpot = this.state.spots.find(spot => {
      return spot.title === "" || spot.category === "";
    })

    if (this.state.title === "") {
      this.setState({
        error: "Please set a title for this date."
      })
    } else if (this.state.neighborhood === "") {
      this.setState({
        error: "Please choose a neighborhood for this date."
      })
    } else if (invalidSpot) {
      this.setState({
        error: "Please make sure that all spots have a title and category."
      });
    } else {
      this.props.createCuratedDate(this.state);
      this.props.history.push('/');
    }
  }

  render() {
    return (
      <div className="curated-date-form">
        <h3>Curate a Date</h3>
        <Errors errors={this.state.error}/>
        <form onSubmit={this.handleSubmit}>
            <label
              className="form-labels"
              htmlFor="date-title">What should we call this date?</label>
            <input id="date-title"
              type="text" value={this.state.title}
              name="title"
              onChange={this.updateInput}/>
            <label
              className="form-labels"
              htmlFor="date-description">Tell our users what this date is all about:</label>
            <textarea id="date-description"
              value={this.state.description}
              name="description"
              onChange={this.updateInput}></textarea>
            <NeighborhoodSelect
              labelText="What neighborhood of DC is this date in?"
              neighborhoods={this.props.options.neighborhoods}
              selectedNeighborhood={this.state.neighborhood}
              updateNeighborhood={this.updateInput.bind(this)}/>
            <label
              className="form-labels upload-photo-label"
              htmlFor="cover-photo">Upload a photo for this date:</label>
            <input
              id="cover-photo"
              name="coverPhoto"
              type="file"
              ref={field => (this.coverPhotoField = field)}
              multiple={true}
              onChange={e => this.updateCoverPhoto(e)} />
            <div className="curated-date-spots">
              {this.generateSpotForms()}
            </div>
            <button
              id="add-spot-button"
              onClick={this.addAdditionalSpot}>Add Spot</button>
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
