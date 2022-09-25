import React from 'react'

export default function Navbar(props) {
  return (
    <div>
      <nav className={`navbar navbar-expand-md navbar-${props.mode} bg-${props.mode}`} aria-label="Fourth navbar example">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">Textutils</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarsExample04">
            <ul className="navbar-nav me-auto mb-2 mb-md-0">
              <li className="nav-item">
                <a className="nav-link" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">Link</a>
              </li>
            </ul>
            <a className="btn text-white border-radius-sm mb-1 mx-2" style={{ backgroundColor: "#000033" }} href="/" role="button" onClick={() => { props.changeTheme("#000033") }}>
            </a>
            <a className="btn text-white border-radius-sm mb-1 mx-2" style={{ backgroundColor: "#003300" }} href="/" role="button" onClick={() => { props.changeTheme("#003300") }}>
            </a>
            <a className="btn text-white border-radius-sm mb-1 mx-2" style={{ backgroundColor: "#330000" }} href="/" role="button" onClick={() => { props.changeTheme("#330000") }}>
            </a>
            <a className="btn text-white border-radius-sm mb-1 mx-2" style={{ backgroundColor: "#004d4d" }} href="/" role="button" onClick={() => { props.changeTheme("#004d4d") }}>
            </a>
            <div className="form-check form-switch">
              <input className="form-check-input" onClick={props.toggleTheme} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
              <label className={`form-check-label text-${props.textmode}`} htmlFor="flexSwitchCheckDefault">Dark mode</label>
            </div>
          </div>
        </div>
      </nav >
    </div >
  )
}
