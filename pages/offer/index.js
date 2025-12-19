import Layout from '@/components/Layout/Layout'
import { AuthGuard } from 'guard'
import React from 'react'
import OfferPage from './OfferPage'

function index() {
	console.log('test')
    return (
        <AuthGuard>
            <Layout>
                <OfferPage />
            </Layout>
        </AuthGuard>
    )
}

export default index
