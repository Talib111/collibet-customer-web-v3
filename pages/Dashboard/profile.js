import Layout from '@/components/Layout/Layout'
import { AuthGuard } from 'guard'
import React from 'react'
import ViewProfile from 'sections/profile/ViewProfile'

function profile() {
  return (
    <AuthGuard>
      <Layout>
        <ViewProfile />
      </Layout>
    </AuthGuard>
  )
}

export default profile