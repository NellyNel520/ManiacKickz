import React from 'react'

const Footer = () => {
	return (
		<div className='box'>
			<footer>
				<div class="footer-container">
					<div class="column1">
						<img
							class="logo-footer"
							src="https://i.postimg.cc/tCxsxTDD/Maniac-Kicks-logo-1.png"
							alt="logo-footer"
						/>
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
						<h3>Lets Connect !</h3>
						<p><a href=""><i class="fab fa-facebook fa-2x"></i></a></p>
						<p><a href="#"><i class="fab fa-twitter fa-2x"></i></a></p>
						<p><a href="#"><i class="fab fa-google-plus-g fa-2x"></i></a></p>
						<p><a href="#"><i class="fab fa-instagram fa-2x"></i></a></p>
            <p><a href="#"><i class="fab fa-pinterest fa-2x"></i></a></p>
				  </div>
				</div>
							<div class="copyright">
									<p>&copy; Maniac Kickz (Developer: Channel Harris)</p>
									<div className='ft-links'>
										<p><a href='https://www.linkedin.com/in/channelharris/'><i class="fa-brands fa-linkedin fa-xl"></i></a></p>
										<p><a href="https://www.channelharris.com/"> Portfolio</a></p>
										<p><a href='https://github.com/NellyNel520'><i class="fa-brands fa-github fa-xl"></i></a></p>
								</div>
						</div>
			</footer>
		</div>
	)
}

export default Footer
