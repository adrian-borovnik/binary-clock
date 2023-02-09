import { createEffect, createSignal, onMount, For } from 'solid-js'
import { time } from './Clock'

function Hours() {
	const [hours, setHours] = createSignal(0)
	const [binaryArray, setBinaryArray] = createSignal([])

	createEffect(() => {
		setHours(time().getHours())
		setBinaryArray(convertToBinary(hours()))
	})

	const convertToBinary = (num) => {
		if (num > 64) return
		let arr = []
		for (let i = 0; i < 6; i++) {
			arr.unshift(num % 2)
			num = Math.floor(num / 2)
		}
		return arr
	}

	return (
		<div class='flex space-x-1'>
			<For each={binaryArray()} fallback={<div>Loading...</div>}>
				{(item) => (
					<div
						class={`w-24 aspect-square rounded-full border-4 border-gray-900 transition-all
              ${item === 1 ? 'bg-gray-900' : 'bg-transparent'}
            `}></div>
				)}
			</For>
		</div>
	)
}

export default Hours
