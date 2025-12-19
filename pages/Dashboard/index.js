import Layout from '@/components/Layout/Layout';
import DashboardComponent from '@/components/Dashboard/Dashboard';
import React from 'react';
import { AuthGuard } from 'guard';

const dashboardPage = () => {
    return (
        <AuthGuard>
            <Layout>
                <DashboardComponent />
            </Layout>
        </AuthGuard>
    )
}

export default dashboardPage



