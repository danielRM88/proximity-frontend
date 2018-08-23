import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Loading from '../Loading';

class ChairList extends Component {
  render() {
    const { chairs, loading } = this.props;

    if (!loading) {
      if (chairs && chairs.length > 0) {
        return (
          <div>
            <h1>Chairs</h1>
            <table className="table table-striped table-hover">
              <thead>
                <tr>
                  <th>Name</th>
                  <th className="left-separator">Notes</th>
                  <th className="left-separator">Has Filter</th>
                  <th className="left-separator">Calibrated</th>
                  <th className="left-separator"></th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                { chairs.map((chair, i) => {
                  return(
                    <tr key={i}>
                      <td>{chair.name}</td>
                      <td>{chair.notes}</td>
                      <td>{`${chair.has_filter}`}</td>
                      <td>{chair.calibration.ongoing? ('Ongoing') : (`${chair.calibrated}`)}</td>
                      <td><Link to={`/chairs/${chair.id}/panel`} className="btn btn-sm btn-info"> Panel </Link></td>
                      <td><Link to={`/chairs/${chair.id}/edit`} className="btn btn-sm btn-primary"> Edit </Link></td>
                      <td><button onClick={(event) => this.handleClick(event, chair.id)} className="btn btn-sm btn-danger"> Delete </button></td>
                    </tr>
                  )
                }) }
              </tbody>
            </table>
            <div className="text-center">
              <Link to={`/chairs/new`} className="btn btn-sm btn-success"> New Chair </Link>
              <br/>
              <br/>
              <br/>
              {/*<Pagination currentPage={currentPage} totalPages={totalPages} goToPage={ this.props.onPageClick }/>*/}
            </div>
          </div>
        )
      } else {
        return (
          <div>
            <h1>Chairs</h1>
            <h2>No chairs found in the system</h2>
            <Link to="/chairs/new" className="btn btn-sm btn-success"> New Chair </Link>
          </div>
        )
      }
    } else {
      return (
        <div>
          <h1>Chairs</h1>
          <Loading />
        </div>
      )
    }
  }
  
  handleClick(event, chairId) {
    event.preventDefault();
    event.stopPropagation();
    this.props.onDeleteClick(chairId);
  }
}

export default ChairList;