import Clock from './components/Clock'

function App() {
	return (
		<div class='w-screen h-screen bg-white flex flex-col justify-center items-center relative select-none'>
			<h1 class='text-6xl font-bold font-mono text-gray-900'>
				Binary Clock
			</h1>
			<Clock />
			<a
				href='https://github.com/adrian-borovnik'
				class='absolute bottom-0 right-0 text-xs mr-1 text-gray-400'>
				Binary Clock by Adrian Borovnik
			</a>
		</div>
	)
}

export default App
