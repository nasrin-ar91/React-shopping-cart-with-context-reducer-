export default function Footer() {
	return (
		<div className="w-full h-fit flex flex-col gap-2 p-5 text-text  justify-center items-center bg-bg-light">
			<a
				href="https://github.com/gulshancodes/react-shopping-cart"
				className="text-main active:no-underline"
				target="_blank"
			>
				github.com/gulshancodes/react-shopping-cart
			</a>
			<div className="flex items-center gap-0">
				<p>
					Built by |&nbsp;
					<a
						href="https://gulshansongara.netlify.app/"
						className="active:no-underline"
						target="_blank"
					>
						Gulshan Songara
					</a>
				</p>
			</div>
		</div>
	);
}
