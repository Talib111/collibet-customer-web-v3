import Layout from '@/components/Layout/Layout'
import { AuthGuard } from 'guard'
import React from 'react'
import PackageDetails from './PackageDetails'

function index() {
    return (
        <AuthGuard>
            <Layout>
                <PackageDetails />
            </Layout>
        </AuthGuard>
    )
}

export default index