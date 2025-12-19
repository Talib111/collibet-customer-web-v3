import Layout from '@/components/Layout/Layout';
import React from 'react';
import { AuthGuard } from 'guard';
import DateTimeSlotSelection from './SlotSelection';
export default function Home() {
  return (
    <AuthGuard>
      <Layout>
        <DateTimeSlotSelection />
      </Layout>
    </AuthGuard>
  );
}
