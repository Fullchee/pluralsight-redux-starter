import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import * as courseActions from '../../actions/courseActions';

class CoursesPage extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            course: {title: ""}
        };

        this.onTitleChange = this.onTitleChange.bind(this);
        this.onClickSave = this.onClickSave.bind(this);
    }

    /**
     * 
     * @param {????} event 
     */
    onTitleChange(event) {
        const course = this.state.course;
        course.title = event.target.value;
        this.setState({course:course});
    }

    onClickSave() {
        this.props.createCourse(this.state.course);
        // this.props.dispatch(courseActions.createCourse(this.state.course));
    }

    courseRow(course, index) {
        return <div key={index}>{course.title}</div>;
    }

    render() {
        return (
            <div className="jumbotron">
                <h1>Courses</h1>
                {this.props.courses.map(this.courseRow)}
                <h2>Add Course</h2>
                <input
                    type="text"
                    onChange={this.onTitleChange}
                    value={this.state.course.title} />
                <input
                    type="submit"
                    onChange={this.onTitleChange}
                    value="Save"
                    onClick={this.onClickSave} />
            </div>
        );
    }
}

CoursesPage.propTypes ={
    // dispatch: PropTypes.func.isRequired,
    createCourse: PropTypes.func.isRequired,
    courses: PropTypes.array.isRequired
};

/**
 * Return the properties that we'd like to see exposed on our component
 * @param {obj} state 
 * @param {object} ownProps 
 */
function mapStateToProps(state, ownProps) {
    // state.courses is defined in the reducer
    return {
        courses: state.courses
    };
}
/**
 * What actions you want exposed to your component
 * Optional param to connect()
 * 
 * @param {*} state 
 * @param {*} ownProps 
 */
function mapDispatchToProps(dispatch) {
    return {
        createCourse: course => dispatch(courseActions.createCourse(course))
    };
}

// not just a plain component, a higher level component
// 2 fn calls
// if there is no mapDispatchToProps, it gets a dispatch property
// now that we do have mapDispatchToPRops, connect doesn't inject a dispatch() fn
export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);