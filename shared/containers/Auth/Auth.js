import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import ViewAuth from '../../components/ViewAuth';
import { selectFlashError } from './selectors';

const mapStateToProps = createStructuredSelector({
  flashError: selectFlashError(),
});

export default connect(mapStateToProps)(ViewAuth);
