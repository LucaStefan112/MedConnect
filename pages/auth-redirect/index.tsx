import React from 'react'
import { Dna } from 'react-loader-spinner'

export default function AuthRedirect() {
  return (
    <div>
      //import a mui loader here
      <h1>Redirecting...</h1>
      <Dna
        visible={true}
        height="80"
        width="80"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
      />
    </div>
  )
}
