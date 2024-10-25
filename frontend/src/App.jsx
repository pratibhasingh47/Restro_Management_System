import { useState } from 'react'
import { RouterProvider } from 'react-router-dom'
import Router from './router/Router'

function App() {
	const [count, setCount] = useState(0)

	return (
		<div>
			<RouterProvider router={Router} />
		</div>
	)
}

export default App
