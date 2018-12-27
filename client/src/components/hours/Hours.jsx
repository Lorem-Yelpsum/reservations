import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import Icon from '../icons/Icon.jsx';
import style from './hours.css';

class Hours extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div styleName="biz-hours">
        <h3 styleName="biz-hours-header">Hours</h3>
        <table styleName="hours-table">
          <tbody>

            <tr>
              <th scope="row">Mon</th>
              <td>
                <span>8:00 am - 10:00 pm</span> <span>8:00 am - 10:00 pm</span>
              </td>
              <td>
                <span styleName="open-now">Open now</span>
              </td>
            </tr>

            <tr>
              <th scope="row">Tues</th>
              <td>
              <span>8:00 am - 10:00 pm</span>
              </td>
              <td></td>
            </tr>

            <tr>
              <th scope="row">Wed</th>
              <td>
              <span>8:00 am - 10:00 pm</span>
              </td>
              <td></td>
            </tr>

            <tr>
              <th scope="row">Thu</th>
              <td>
              <span>8:00 am - 10:00 pm</span>
              </td>
              <td></td>
            </tr>

            <tr>
              <th scope="row">Fri</th>
              <td>
              <span>8:00 am - 10:00 pm</span>
              </td>
              <td></td>
            </tr>

            <tr>
              <th scope="row">Sat</th>
              <td>
              <span>8:00 am - 10:00 pm</span>
              </td>
              <td></td>
            </tr>

            <tr>
              <th scope="row">Sun</th>
              <td>
              <span>8:00 am - 10:00 pm</span>
              </td>
              <td></td>
            </tr>
          </tbody>
        </table>

        <div styleName="biz-info-link">
          <Icon name={`14x14_pencil`} />
          <a href='#' styleName="biz-link">Edit business info</a>
        </div>
      </div>
    );
  }
}

export default CSSModules(Hours, style, {allowMultiple: true});