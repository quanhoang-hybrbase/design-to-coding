import type { Config } from 'jest'
import nextJest from 'next/jest.js'

const createJestConfig = nextJest({
	// Provide the path to your Next.js app to load next.config.js and .env files in your test environment
	dir: './',
})

// Add any custom config to be passed to Jest
const config: Config = {
	coverageProvider: 'v8',
	testEnvironment: 'jsdom',
	// Add more setup options before each test is run
	setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
	// Handle module path aliases
	moduleNameMapper: {
		'^@/components/(.*)$': '<rootDir>/components/$1',
		'^@/lib/(.*)$': '<rootDir>/lib/$1',
		'^@/hooks/(.*)$': '<rootDir>/hooks/$1',
		'^@/utils/(.*)$': '<rootDir>/utils/$1',
		'^@/providers/(.*)$': '<rootDir>/providers/$1',
		'^@/stores/(.*)$': '<rootDir>/stores/$1',
		'^@/types/(.*)$': '<rootDir>/types/$1',
		'^@/app/(.*)$': '<rootDir>/app/$1',
		'^@/public/(.*)$': '<rootDir>/public/$1',
	},
}

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
export default createJestConfig(config)
