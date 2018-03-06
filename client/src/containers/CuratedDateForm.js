import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { SpotForm } from '../components/forms/SpotForm';
import { collectNeighborhoodOptions, collectCategoryOptions, fetchExistingDate, clearEditCuratedDate, fetchDates, createOrUpdateCuratedDate } from '../actions/dateActions';
import { NeighborhoodSelect } from '../components/forms/NeighborhoodSelect';
import { Errors } from '../components/Errors';
import PropTypes from 'prop-types';

class CuratedDateForm extends React.Component {
  constructor() {
    super();

    this.state = {
      id: undefined,
      title: "",
      description: "",
      neighborhood: "",
      coverPhoto: undefined,
      spots: [{
        id: undefined,
        title: "",
        description: "",
        category: "",
        photo: undefined
      }],
      error: undefined
    }
  }

  componentDidMount() {
    this.props.collectNeighborhoodOptions();
    // passing in hard-coded empty string so that all categories are retrieved
    this.props.collectCategoryOptions({neighborhood: ""})
    this.props.clearEditCuratedDate();
    this.props.fetchExistingDate(parseInt(this.props.editId));
  }

  componentWillReceiveProps(nextProps) {

    if (nextProps.editDate) {
      const existingDateSpots = nextProps.editDate.spots.map(spot => {
        return {
          id: spot.id,
          title: spot.name,
          description: spot.description,
          category: spot.category.name
        }
      })

      this.setState({
        id: parseInt(nextProps.match.params.id),
        title: nextProps.editDate.title,
        description: nextProps.editDate.description ? nextProps.editDate.description : "",
        neighborhood: nextProps.editDate.neighborhood.name,
        spots: existingDateSpots
      });
    }
  }

  updateInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  updateSpotAttributes = (spotIndex, event) => {
    let updatedSpot = this.state.spots[spotIndex];
    updatedSpot[event.target.name] = event.target.value;
    this.setState({
      spots: [
        ...this.state.spots.slice(0, spotIndex),
        updatedSpot,
        ...this.state.spots.slice(spotIndex + 1, this.state.spots.length)
      ]
    })
  };

  updateSpotPhoto = (spotIndex, event) => {
    const coverPhoto = this[`spotPhotoField${spotIndex}`].files[0];
    let updatedSpot = this.state.spots[spotIndex];
    updatedSpot.photo = coverPhoto;

    this.setState({
      spots: [
        ...this.state.spots.slice(0, spotIndex),
        updatedSpot,
        ...this.state.spots.slice(spotIndex + 1, this.state.spots.length)
      ]
    });
  }

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
      let uniquePhotoVar = `spotPhotoField${index}`;
      return (
       <SpotForm
         key={index}
         title={spot.title}
         description={spot.description}
         updateSpotAttributes={this.updateSpotAttributes.bind(this)}
         categories={categories}
         index={index}
         selectedCategory={spot.category}
         deleteSpot={this.deleteSpot.bind(this)}
         updateSpotPhoto={this.updateSpotPhoto.bind(this)}
         photoRef={(field => (this[uniquePhotoVar] = field)).bind(this)}/>
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
      if (this.props.editId) {
        this.props.createOrUpdateCuratedDate(this.state);

        // brief pause to allow PUT requests to complete
        setTimeout(() => {
          this.props.fetchDates(this.state.neighborhood, undefined);
          this.props.history.push(`/dates/${parseInt(this.props.editId)}`);
        }, 500);
      } else {
        this.props.createOrUpdateCuratedDate(this.state);

        // brief pause to allow POST requests to complete
        setTimeout(() => {
          this.props.history.push('/');
        }, 500);
      }
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

const mapStateToProps = (state, ownProps) => {
  return {
    options: state.dates.options,
    editId: ownProps.match.params.id,
    editDate: state.dates.editCuratedDate
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    collectNeighborhoodOptions: collectNeighborhoodOptions,
    collectCategoryOptions: collectCategoryOptions,
    fetchExistingDate: fetchExistingDate,
    clearEditCuratedDate: clearEditCuratedDate,
    fetchDates: fetchDates,
    createOrUpdateCuratedDate: createOrUpdateCuratedDate
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CuratedDateForm);

CuratedDateForm.propTypes = {
  collectNeighborhoodOptions: PropTypes.func.isRequired,
  collectCategoryOptions: PropTypes.func.isRequired,
  clearEditCuratedDate: PropTypes.func.isRequired,
  fetchExistingDate: PropTypes.func.isRequired,
  createOrUpdateCuratedDate: PropTypes.func.isRequired,
  fetchDates: PropTypes.func.isRequired,
  editId: PropTypes.string,
  options: PropTypes.object.isRequired
}
