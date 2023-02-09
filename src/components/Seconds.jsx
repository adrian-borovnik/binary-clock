import { createEffect, createSignal, onMount, For } from 'solid-js'
import { time } from './Clock'

function Seconds() {
	const [seconds, setSeconds] = createSignal(0)
	const [binaryArray, setBinaryArray] = createSignal([])

	createEffect(() => {
		setSeconds(time().getSeconds())
		setBinaryArray(convertToBinary(seconds()))
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
						class={`w-24 aspect-square rounded-full border-4 border-gray-900 
              ${item === 1 ? 'bg-gray-900' : 'bg-transparent'}
            `}></div>
				)}
			</For>
		</div>
	)
}

export default Seconds
