import React, { Component, Fragment } from 'react'

export default class extends Component {
  render() {
    return (
      <Fragment>
          <div className="example">
              <header>
                  header content here
              </header>
              <main className="main">
                  <nav>
                      nav content here
                  </nav>
                  <div className="content">
                      main content here
                  </div>
                  <aside>
                      aside content here
                  </aside>
              </main>
              <footer>
                  footer content here
              </footer>
          </div>
      </Fragment>
     )
   }
}