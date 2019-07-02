import React from 'react';
import { createTeleporter } from 'react-teleporter'

const StatusBar = createTeleporter()
function Header() {
  return (
    <header>
      <StatusBar.Target />
    </header>
  )
}

function Page() {
  return (
    <main>
      {/* Teleport "Loading..." into the header */}
      <StatusBar.Source>Loading...</StatusBar.Source>
    </main>
  )
}

export default class Telep extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Page />
      </div>
    )
  }
}