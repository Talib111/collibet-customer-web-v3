import Layout from '@/components/Layout/Layout'
import { AuthGuard } from 'guard'
import React from 'react'
import BlogPage from './BlogPage'

function index() {
    return (
            <Layout>
                <BlogPage />
            </Layout>
    )
}

export default index