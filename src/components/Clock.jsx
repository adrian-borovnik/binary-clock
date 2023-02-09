import { createSignal } from 'solid-js'
import Hours from './Hours'
import Minutes from './Minutes'
import Seconds from './Seconds'

export const [time, setTime] = createSignal(new Date())

function Clock() {
	const [minutes, setMinutes] = createSignal(0)
	const [hours, setHours] = createSignal(0)

	setInterval(() => {
		setTime(new Date())
	}, 100)

	return (
		<div class='p-8 flex flex-col space-y-6 overflow-hidden justify-center'>
			<Hours />
			<Minutes />
			<Seconds />
		</div>
	)
}

export default Clock
