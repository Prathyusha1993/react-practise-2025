import React, {Suspense, lazy} from 'react'

const About = lazy(() => import('./About'));

function lazyLoading() {
  return (
    <div>
        <h1>Home</h1>
        <Suspense fallabck={<div>Loading....</div>}>
        <About />
        </Suspense>
    </div>
  )
}

export default lazyLoading