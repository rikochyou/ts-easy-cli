#! /usr/bin/env node

const program = require('commander')
const path = require('path')
const { version } = require('./const.js')

const commandMap = {
	create: {
		alias: 'c',
		description: 'create a new project powered by ts-easy-cli-service',
		example: 'ts-cli create <app-name>'
	},
	'*': {
		alias: '',
		description: '',
		example: ''
	}
}

Reflect.ownKeys(commandMap).forEach(key => {
	const directive = commandMap[key]
	program
		.command(key)
		.alias(directive.alias)
		.description(directive.description)
		.action(() => {
			if (key === '*') {
				console.log('指令不存在')
			} else {
				require(path.resolve(__dirname, key))(...process.argv.splice(3))
			}
		})
})

program.on('--help', () => {
	console.log('Example:');
	Reflect.ownKeys(commandMap).forEach((key) => {
		const value = commandMap[key];
		console.log(`  ${value.example}  `);
	});
})
program.version(version).parse(process.argv)
