import React from 'react';
import { BsFacebook } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';
function Nav() {
	return (
		<>
			<section className="nav-body">
				<nav className="nav-items">
					<div className="icons">
						<a href="https://www.facebook.com/liingkon">
							<BsFacebook size="2.5em" />
						</a>
						<a href="https://github.com/SLingkon">
							<BsGithub size="2.5em" />
						</a>
						<a href="https://twitter.com/SLingkon_">
							<BsTwitter size="2.5em" />
						</a>
						<a href="https://www.linkedin.com/in/slingkon/">
							<BsLinkedin size="2.5em" />
						</a>
					</div>
					<div className="navitems-container">
						<div className="nav-a">
							<a href="#">Home</a>
							<a href="#project">Projects</a>
							<a href="#">Contact</a>
							<a href="#">More</a>
						</div>
					</div>
				</nav>
			</section>
		</>
	);
}
export default Nav;
