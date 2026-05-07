// app/dashboard/layout.tsx
import { DashboardSidebar } from '@/components/dashboard/DashboardSidebar'
import { DashboardTopBar } from '@/components/dashboard/DashboardTopBar'

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen bg-plug-off-white overflow-hidden">

      {/* Sidebar */}
      <DashboardSidebar />

      {/* Main area */}
      <div className="flex flex-col flex-1 overflow-hidden">
        <DashboardTopBar />
        <main className="flex-1 overflow-y-auto px-8 py-8">
          {children}
        </main>
      </div>

    </div>
  )
}
