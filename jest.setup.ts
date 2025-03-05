import '@testing-library/jest-dom'

// Mock next/router
jest.mock('next/navigation', () => ({
	useRouter: () => ({
		push: jest.fn(),
		replace: jest.fn(),
		prefetch: jest.fn(),
		back: jest.fn(),
		forward: jest.fn(),
		refresh: jest.fn(),
		pathname: '/',
		query: {},
	}),
	usePathname: () => '/',
	useSearchParams: () => new URLSearchParams(),
}))

// Suppress specific console errors during tests
const originalConsoleError = console.error
console.error = (...args) => {
	if (
		typeof args[0] === 'string' &&
		(args[0].includes('ReactDOM.render is no longer supported') || 
		 args[0].includes('Warning: ReactDOM.render'))
	) {
		return
	}
	originalConsoleError(...args)
}

// Set up global afterEach cleanup
afterEach(() => {
	jest.clearAllMocks()
})
