import {Component} from 'react'
import ConfigurationContext from '../../context/ConfigurationContext'

import './index.css'

class ConfigurationController extends Component {
  render() {
    return (
      <ConfigurationContext.Consumer>
        {value => {
          const {
            showContent,
            showLeftNavbar,
            showRightNavbar,
            onToggleShowContent,
            onToggleShowLeftNavbar,
            onToggleShowRightNavbar,
          } = value

          const onChangeContent = event => {
            onToggleShowContent(event.target.value)
          }

          const onChangeLeftArrow = event => {
            onToggleShowLeftNavbar(event.target.value)
          }

          const onChangeRightArrow = event => {
            onToggleShowRightNavbar(event.target.value)
          }

          return (
            <div className="layout-containers">
              <h1>Layout</h1>
              <div>
                <input
                  type="checkbox"
                  id="context"
                  checked={showContent}
                  onChange={onChangeContent}
                />
                <label htmlFor="context">Content</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="left"
                  checked={showLeftNavbar}
                  onChange={onChangeLeftArrow}
                />
                <label htmlFor="left">Left Navbar</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="right"
                  checked={showRightNavbar}
                  onChange={onChangeRightArrow}
                />
                <label htmlFor="right">Right Navbar</label>
              </div>
            </div>
          )
        }}
      </ConfigurationContext.Consumer>
    )
  }
}

export default ConfigurationController
