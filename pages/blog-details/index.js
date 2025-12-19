import Layout from '@/components/Layout/Layout'
import { AuthGuard } from 'guard'
import React from 'react'
import BlogDetails from './BlogDetails'

function index() {
    return (
            <Layout>
                <BlogDetails />
            </Layout>
    )
}

export default index