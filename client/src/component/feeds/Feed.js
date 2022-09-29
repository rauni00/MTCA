import React from 'react'

export default function Feed() {
  return (
    <div>
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
        <div className="container">
            <a className="navbar-brand" href="../landing/landing.html">TraineeCommunity</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mobile-nav">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="mobile-nav">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="../profiles/profiles.html">Developer</a>
                    </li>
                </ul>
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="../feeds/feed.html">Post Feed</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="../dashboard/dashboard.html">Dashboard</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">
                            <img className="rounded-circle" style="width: 25px;margin-right: 5px;" src="https://www.gravatar.com/avatar/anything?s=200&d=mm" alt="" title="You Must Have A Gravatar Connected To Your Email To Display An Image"/>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    {/* <!-- Feed --> */}
    <div className="feed">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    {/* <!--Post Form--> */}
                    <div className="post-form mb-3">
                        <div className="card card-info">
                            <div className="card-header bg-info text-white">
                                Say Something...
                            </div>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <textarea className="form-control from-control-lg" placeholder="Create a post"></textarea>
                                    </div>
                                    <button type="submit" className="btn btn-dark">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Post Feed--> */}
                    <div className="comments">
                        {/* <!--Comment item--> */}
                        <div className="card card-body mb-3">
                            <div className="row">
                                <div className="col-md-2">
                                    <a href="../profile/profile.html">
                                        <img className="rounded-circle d-none d-md-block" src="../../img/doe.jpg" style="height: 180px; width:180px;" alt=""/>
                                    </a>
                                    <br/>
                                    <p className="text-center">John Doe</p>
                                </div>
                                <div className="col-md-10 p-md-5">
                                    <p className="lead">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet voluptates, debitis enim sequi cupiditate tempore asperiores at maiores magni hic explicabo dolor animi laudantium natus porro unde! Quidem, optio nostrum.</p>
                                    <button type="button" className="btn btn-light mr-1">
                                        <i className="text-info fas fa-thumbs-up"></i>
                                        <span className="badge badge-light"></span>
                                    </button>
                                    <button className="btn btn-light mr-1" type="button">
                                        <i className="text-secondary fas fa-thumbs-down"></i>
                                    </button>
                                    <a href="../posts/post.html" className="btn btn-info mr-1">Comments</a>
                                    {/* <!--<button className="btn btn-danger mr-1" type="button">
                                        <i className="fas fa-times" />
                                    </button>--> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <footer className="bg-dark text-white mt-5 p-4 text-center">Copyright &copy; 2018
        Trainee Connector</footer>

    </div>
  )
}
