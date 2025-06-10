import React from 'react'

export default function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg shadow-lg p-3 mb-5 bg-white rounded">
                <a className="navbar-brand" href="#">HOTPACK</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <a className="navq" href="#"><strong>Login</strong> </a>
                        </li>
                        <span>   d </span>
                        <li className="nav-item">
                            <a className="navq" href="#"><strong>trending</strong></a>
                        </li>
                          <li className="nav-item">
                            <a className="navq" href="#"><strong>home</strong></a>
                        </li>
                         <li className="nav-item">
                            <a className="navq" href="#"><strong>shop</strong></a>
                        </li>
                          <li className="nav-item">
                            <a className="navq" href="#"><strong>order</strong></a>
                        </li>
                       
                    </ul>
                </div>
            </nav>
        </div>
    )
}
