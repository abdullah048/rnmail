import { LoremIpsum } from 'lorem-ipsum'
import { nanoid } from 'nanoid'

const DATA = []

const lorem = new LoremIpsum({
	sentencesPerParagraph: {
		max: 8,
		min: 4
	},
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
		title: capitalizeFirstLetter(
			lorem.generateWords(
				Math.round(Math.random() * 10) + 2)
		),
		body: capitalizeFirstLetter(
			lorem.generateSentences(Math.round(Math.random() * 3) + 1)
		)
	})
}

export default DATA
