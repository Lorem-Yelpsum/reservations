import React, { Component } from 'react';

class Hours extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="biz-hours">
            <h3>Hours</h3>
            <table>
              <tbody>

                <tr>
                  <th>Mon</th>
                  <td>
                    <span>8:00 am</span>
                    -
                    <span>10:00 pm</span>
                  </td>
                  <td className="extra"></td>
                </tr>

                <tr>
                  <th>Tues</th>
                  <td>
                    <span>8:00 am</span>
                    -
                    <span>10:00 pm</span>
                  </td>
                  <td className="extra"></td>
                </tr>

                <tr>
                  <th>Wed</th>
                  <td>
                    <span>8:00 am</span>
                    -
                    <span>10:00 pm</span>
                  </td>
                  <td className="extra"></td>
                </tr>

                <tr>
                  <th>Thurs</th>
                  <td>
                    <span>8:00 am</span>
                    -
                    <span>10:00 pm</span>
                  </td>
                  <td className="extra"></td>
                </tr>

                <tr>
                  <th>Fri</th>
                  <td>
                    <span>8:00 am</span>
                    -
                    <span>10:00 pm</span>
                  </td>
                  <td className="extra"></td>
                </tr>

                <tr>
                  <th>Sat</th>
                  <td>
                    <span>8:00 am</span>
                    -
                    <span>10:00 pm</span>
                  </td>
                  <td className="extra"></td>
                </tr>

                <tr>
                  <th>Sun</th>
                  <td>
                    <span>8:00 am</span>
                    -
                    <span>10:00 pm</span>
                  </td>
                  <td className="extra">
                    <span className="nowrap open">Open now</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
    );
  }
}

export default Hours;