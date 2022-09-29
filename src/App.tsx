import * as React from "react"
import { RelayEnvironmentProvider } from "react-relay"
import { createEnvironment } from "./RelayEnvironment"
import { MyProfile } from "./MyProfile"

export const App: React.FC = () => {
  const environment = createEnvironment()
  return (
    <RelayEnvironmentProvider environment={environment}>
      <MyProfile />
    </RelayEnvironmentProvider>
  )
}