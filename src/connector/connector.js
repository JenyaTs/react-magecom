import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        categoriesArray: state.categories
    }
}

export const sidebarConnector = connect(
    mapStateToProps
);
