import React from 'react'

const Footer = () => {
	return (
		<div>
			<footer>
				<div class="footer-container">
					<div class="column1">
						<img
							class="logo-footer"
							src="assets/img/logo.png"
							alt="logo-footer"
						/>
						<p>
							We are a young company always looking for new and creative ideas
							to help you with our products in your everyday work.
						</p>
					</div>


					<div class="column2">
						<h3>Contact</h3>
						<p>
							<i class="fas fa-map-marker-alt"></i> Via Rossini 10, 10136 Turin
							Italy
						</p>
						<p>
							<i class="fas fa-phone"></i> Phone: (0039) 333 12 68 347
						</p>
						<p>
							<i class="fas fa-envelope"></i> Email:{' '}
							<a href="mailto:hello@domain.com">hello@domain.com</a>
						</p>
						<p>
							<i class="fab fa-skype"></i> Skype: you_online
						</p>
					</div>

          <div class="column3">
						<h3>Follow us</h3>
						<p><a href=""><i class="fab fa-facebook fa-2x"></i></a></p>
						<p><a href="#"><i class="fab fa-twitter fa-xl"></i></a></p>
						<p><a href="#"><i class="fab fa-google-plus-g fa-xl"></i></a></p>
						<p><a href="#"><i class="fab fa-instagram fa-xl"></i></a></p>
            <p><a href="#"><i class="fab fa-pinterest fa-xl"></i></a></p>
				  </div>
				</div>

				<div class="footer-bottom">
					<div class="container">
						<div class="row">
							<div class="copyright">
								<p>&copy; Maniac Kickz (Developer: Channel Harris)</p>
								<a href="https://www.channelharris.com/"> Portfolio Site</a>
							</div>
						</div>
					</div>
				</div>
			</footer>
		</div>
	)
}

export default Footer
