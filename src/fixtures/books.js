import { LoremIpsum } from 'lorem-ipsum'
import { nanoid } from 'nanoid'

const DATA = []

const lorem = new LoremIpsum({
	wordsPerSentence: {
		max: 16,
		min: 4
	}
})

function capitalizeFirstLetter([first, ...rest]) {
	first.toLocaleUpperCase() + rest.join('')
}

for (let i = 0; i < 100; ++i) {
	DATA.push({
		id: nanoid(),
		name: capitalizeFirstLetter(
			lorem.generateSentences(Math.round(Math.random() * 4))
		)
	})
}

export default DATA
