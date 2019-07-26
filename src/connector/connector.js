import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        categoriesArray: state
    }
}

export const sidebarConnector = connect(
    mapStateToProps
);