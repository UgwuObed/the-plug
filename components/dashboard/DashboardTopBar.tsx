// components/dashboard/DashboardTopBar.tsx

// Mock user — replace with real session data (next-auth, clerk, etc.)
const MOCK_USER = {
  name: 'Davis Natzle',
  affiliation: 'ASCAP',
  initials: 'DN',
}

export function DashboardTopBar() {
  return (
    <header className="h-[56px] flex-shrink-0 bg-white border-b border-plug-border px-8 flex items-center justify-between">

      {/* Page breadcrumb — rendered by each page via context if needed */}
      <div className="flex items-center gap-2 text-[13px] text-plug-text-muted">
        <span>Dashboard</span>
      </div>

      {/* User pill */}
      <div className="flex items-center gap-3">
        <span className="label-mono text-[9.5px] text-mint bg-mint-pale border border-mint-mid rounded px-2 py-1">
          {MOCK_USER.affiliation}
        </span>
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-full bg-coral flex items-center justify-center flex-shrink-0">
            <span className="text-[11px] font-medium font-mono text-white">
              {MOCK_USER.initials}
            </span>
          </div>
          <span className="text-[13px] text-plug-text-primary font-medium">
            {MOCK_USER.name}
          </span>
        </div>
      </div>

    </header>
  )
}
