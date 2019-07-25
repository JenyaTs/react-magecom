import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        ...state
    }
}

export const sidebarConnector = connect(
    mapStateToProps
);